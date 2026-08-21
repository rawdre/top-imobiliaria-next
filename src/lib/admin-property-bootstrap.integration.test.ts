import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";
import { describe, expect, it, vi } from "vitest";

type Listener = (event?: unknown) => unknown;

function createElement() {
  const listeners = new Map<string, Listener[]>();
  return {
    checked: false,
    className: "",
    dataset: {} as Record<string, string>,
    disabled: false,
    files: [] as unknown[],
    textContent: "",
    value: "",
    addEventListener(type: string, listener: Listener) {
      const current = listeners.get(type) ?? [];
      current.push(listener);
      listeners.set(type, current);
    },
    getListeners(type: string) {
      return listeners.get(type) ?? [];
    },
    querySelector() {
      return null;
    },
    querySelectorAll() {
      return [];
    },
  };
}

describe("admin property form integration", () => {
  it("boots the add form and intercepts native submission", async () => {
    const source = readFileSync(
      resolve(process.cwd(), "public", "admin", "property-form.js"),
      "utf8",
    );
    const elements = new Map<string, ReturnType<typeof createElement>>();
    const getElement = (id: string) => {
      if (!elements.has(id)) elements.set(id, createElement());
      return elements.get(id)!;
    };
    const form = getElement("propertyForm");
    const submitButton = getElement("submitButton");
    form.querySelector = () => submitButton;

    let domContentLoaded: Listener | undefined;
    const document = {
      body: { dataset: { mode: "add" } },
      addEventListener(type: string, listener: Listener) {
        if (type === "DOMContentLoaded") domContentLoaded = listener;
      },
      getElementById: getElement,
      querySelector: () => getElement("genericField"),
      querySelectorAll: () => [],
    };
    const context = vm.createContext({
      URL,
      URLSearchParams,
      console,
      createProperty: vi.fn(),
      document,
      escapeHtml: (value: unknown) => String(value ?? ""),
      fetchPropertyById: vi.fn(),
      fetchPropertyMeta: vi.fn(),
      removePropertyVideos: vi.fn(),
      requireSession: vi.fn().mockResolvedValue(undefined),
      savePropertyMeta: vi.fn(),
      updateProperty: vi.fn(),
      uploadPropertyImages: vi.fn().mockResolvedValue([]),
      uploadPropertyVideos: vi.fn().mockResolvedValue([]),
      window: {
        crypto: { randomUUID: () => "test-id" },
        location: { search: "" },
      },
    });

    vm.runInContext(source, context);
    expect(domContentLoaded).toBeTypeOf("function");
    await domContentLoaded!();

    const submitListeners = form.getListeners("submit");
    expect(submitListeners).toHaveLength(1);

    const preventDefault = vi.fn();
    await submitListeners[0]({ preventDefault });
    expect(preventDefault).toHaveBeenCalledOnce();
  });
});
