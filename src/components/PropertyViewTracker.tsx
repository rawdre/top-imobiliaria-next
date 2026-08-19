"use client";

import { useEffect } from "react";
import { track } from "@/lib/analytics";

type PropertyViewTrackerProps = {
  propertyId: string | number;
  slug: string;
  listingType?: string;
  price?: number;
};

export default function PropertyViewTracker({
  propertyId,
  slug,
  listingType,
  price,
}: PropertyViewTrackerProps) {
  useEffect(() => {
    track.propertyView(propertyId, slug, listingType, price);
  }, [listingType, price, propertyId, slug]);

  return null;
}
