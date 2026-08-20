"use client";

import Image from "next/image";
import { Camera, Play } from "lucide-react";
import { useState } from "react";
import { getEmbeddableVideoUrl, type PropertyVideo } from "@/lib/property-media";
import type { GalleryItem } from "@/lib/property-data";

type MediaItem = ({ kind: "photo" } & GalleryItem) | ({ kind: "video" } & PropertyVideo);

export default function PropertyMediaGallery({ photos, videos, title }: {
  photos: GalleryItem[];
  videos: PropertyVideo[];
  title: string;
}) {
  const items: MediaItem[] = [
    ...photos.map((photo) => ({ ...photo, kind: "photo" as const })),
    ...videos.map((video) => ({ ...video, kind: "video" as const })),
  ];
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selected = items[selectedIndex];
  const embedUrl = selected?.kind === "video" ? getEmbeddableVideoUrl(selected.url) : null;

  return (
    <div className="property-media-gallery">
      <div className="property-media-stage">
        {!selected ? (
          <div className="property-page-cover property-page-cover-empty"><Camera size={58} /></div>
        ) : selected.kind === "photo" ? (
          <Image src={selected.url} alt={selected.name} width={1180} height={760} priority className="property-page-cover" />
        ) : embedUrl ? (
          <iframe
            src={embedUrl}
            title={`${selected.name} - ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <video src={selected.url} controls playsInline preload="metadata" aria-label={`${selected.name} - ${title}`} />
        )}
        {videos.length > 0 && (
          <span className="property-video-available">
            <Play size={15} fill="currentColor" />
            {videos.length === 1 ? "Vídeo disponível" : `${videos.length} vídeos disponíveis`}
          </span>
        )}
      </div>

      {items.length > 1 && (
        <div className="property-media-thumbnails" aria-label="Fotos e vídeos do imóvel">
          {items.map((item, index) => (
            <button
              type="button"
              key={`${item.kind}-${item.url}`}
              className={index === selectedIndex ? "active" : ""}
              onClick={() => setSelectedIndex(index)}
              aria-label={`Abrir ${item.name}`}
            >
              {item.kind === "photo" ? (
                <Image src={item.url} alt="" width={150} height={95} />
              ) : (
                <span><Play size={22} fill="currentColor" />Vídeo</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
