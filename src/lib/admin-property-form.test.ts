import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import vm from "node:vm";
import { describe, expect, it } from "vitest";

const projectRoot = process.cwd();

function readPublicFile(path: string): string {
  return readFileSync(resolve(projectRoot, "public", path), "utf8");
}

describe("admin property form bootstrap", () => {
  it("exposes every video helper needed during bootstrap and submission", () => {
    const source = readPublicFile("admin/property-form.js");
    const context = vm.createContext({
      console,
      document: { addEventListener: () => undefined },
      URL,
      URLSearchParams,
      window: { location: { search: "" } },
    });

    vm.runInContext(source, context);

    for (const helper of [
      "normalizeVideoItem",
      "collectVideoPayload",
      "renderVideoPreview",
      "moveVideo",
      "removeVideo",
      "addVideoLink",
      "syncPendingVideos",
    ]) {
      expect(vm.runInContext(`typeof ${helper}`, context), helper).toBe("function");
    }
  });

  it.each(["add-property.html", "edit-property.html"])(
    "places the video section before the independent submit row in %s",
    (fileName) => {
      const html = readPublicFile(`admin/${fileName}`);
      const videoSection = html.indexOf("<h2>Vídeos</h2>");
      const submitRow = html.indexOf('<div class="field-full form-submit-row">');

      expect(videoSection).toBeGreaterThan(-1);
      expect(submitRow).toBeGreaterThan(-1);
      expect(videoSection).toBeLessThan(submitRow);
    },
  );
});
