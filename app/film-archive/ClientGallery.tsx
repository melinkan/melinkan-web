"use client";

import { useState, useEffect } from "react";
import GalleryGrid from "@/app/components/Gallery/GalleryGrid";
import { ImageData } from "@/app/lib/images";

export default function ClientGallery({
  serializedImages,
}: {
  serializedImages: string;
}) {
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    try {
      const parsedImages = JSON.parse(serializedImages);
      setImages(parsedImages);
    } catch (error) {
      console.error("Failed to parse images:", error);
    }
  }, [serializedImages]);

  return <GalleryGrid images={images} />;
}
