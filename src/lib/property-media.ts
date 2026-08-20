export type PropertyVideo = {
  id: string;
  name: string;
  url: string;
  source: "upload" | "link";
  path?: string;
};

type LegacyPropertyVideos = {
  youtube_url?: string | null;
  video_360_url?: string | null;
};

function safeHttpUrl(value: unknown): string | null {
  if (typeof value !== "string" || !value.trim()) return null;

  try {
    const parsed = new URL(value.trim());
    return parsed.protocol === "https:" || parsed.protocol === "http:" ? parsed.href : null;
  } catch {
    return null;
  }
}

export function normalizePropertyVideos(
  videos: PropertyVideo[] | null | undefined,
  propertyTitle: string,
  legacy: LegacyPropertyVideos = {},
): PropertyVideo[] {
  const normalized = (Array.isArray(videos) ? videos : []).flatMap((video, index) => {
    const url = safeHttpUrl(video?.url);
    if (!url) return [];

    return [{
      id: String(video.id || `video-${index + 1}`),
      name: String(video.name || `${propertyTitle || "Imóvel"} - vídeo ${index + 1}`),
      url,
      source: video.source === "upload" ? "upload" as const : "link" as const,
      ...(video.path ? { path: String(video.path) } : {}),
    }];
  });

  if (normalized.length) return normalized;

  const legacyItems = [
    { id: "legacy-youtube", name: "Vídeo do imóvel", url: legacy.youtube_url },
    { id: "legacy-360", name: "Tour 360°", url: legacy.video_360_url },
  ];

  return legacyItems.flatMap((video) => {
    const url = safeHttpUrl(video.url);
    return url ? [{ ...video, url, source: "link" as const }] : [];
  });
}

export function getEmbeddableVideoUrl(value: string): string | null {
  const safeUrl = safeHttpUrl(value);
  if (!safeUrl) return null;

  const url = new URL(safeUrl);
  const host = url.hostname.replace(/^www\./, "").toLowerCase();

  if (host === "youtu.be") {
    const id = url.pathname.split("/").filter(Boolean)[0];
    return id ? `https://www.youtube.com/embed/${encodeURIComponent(id)}` : null;
  }

  if (host === "youtube.com" || host === "m.youtube.com") {
    const id = url.pathname.startsWith("/embed/")
      ? url.pathname.split("/").filter(Boolean)[1]
      : url.searchParams.get("v");
    return id ? `https://www.youtube.com/embed/${encodeURIComponent(id)}` : null;
  }

  if (host === "vimeo.com" || host === "player.vimeo.com") {
    const id = url.pathname.split("/").filter(Boolean).find((part) => /^\d+$/.test(part));
    return id ? `https://player.vimeo.com/video/${id}` : null;
  }

  return null;
}
