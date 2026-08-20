import { describe, expect, it } from "vitest";
import {
  getEmbeddableVideoUrl,
  normalizePropertyVideos,
  type PropertyVideo,
} from "./property-media";

describe("property video gallery", () => {
  it("preserves multiple videos in their saved order", () => {
    const videos: PropertyVideo[] = [
      { id: "tour", name: "Tour", url: "https://youtu.be/abc123", source: "link" },
      { id: "visit", name: "Visita", url: "https://cdn.example.com/visit.mp4", source: "upload" },
    ];

    expect(normalizePropertyVideos(videos, "Apartamento")).toEqual(videos);
  });

  it("accepts legacy YouTube and 360 links without duplicating them", () => {
    expect(
      normalizePropertyVideos([], "Apartamento", {
        youtube_url: "https://www.youtube.com/watch?v=abc123",
        video_360_url: "https://vimeo.com/987654",
      }),
    ).toMatchObject([
      { name: "Vídeo do imóvel", source: "link" },
      { name: "Tour 360°", source: "link" },
    ]);
  });

  it("rejects unsafe and malformed video links", () => {
    expect(
      normalizePropertyVideos(
        [
          { id: "bad", name: "Bad", url: "javascript:alert(1)", source: "link" },
          { id: "empty", name: "Empty", url: "", source: "upload" },
        ],
        "Apartamento",
      ),
    ).toEqual([]);
  });

  it("creates safe embeds for YouTube and Vimeo while leaving uploaded files native", () => {
    expect(getEmbeddableVideoUrl("https://youtu.be/abc123")).toBe(
      "https://www.youtube.com/embed/abc123",
    );
    expect(getEmbeddableVideoUrl("https://vimeo.com/987654")).toBe(
      "https://player.vimeo.com/video/987654",
    );
    expect(getEmbeddableVideoUrl("https://cdn.example.com/visit.mp4")).toBeNull();
  });
});
