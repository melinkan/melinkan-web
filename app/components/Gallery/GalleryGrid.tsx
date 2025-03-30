"use client";

import { useState } from "react";
import styled from "styled-components";
import CustomLightbox from "./CustomLightbox";

interface GalleryItemProps {
  src: string;
  alt: string;
  date?: string;
  location?: string;
}

const GalleryItem = styled.div`
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  break-inside: avoid;
  cursor: pointer;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
`;

const ImageCaption = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  padding: 10px;
  font-size: 0.9rem;
  opacity: 0;
  transition: opacity 0.3s ease;

  ${GalleryItem}:hover & {
    opacity: 1;
  }
`;

const MasonryContainer = styled.div`
  column-count: 1;
  column-gap: 20px;

  @media (min-width: 576px) {
    column-count: 2;
  }

  @media (min-width: 992px) {
    column-count: 3;
  }

  @media (min-width: 1200px) {
    column-count: 4;
  }
`;

const MasonryItem = styled.div`
  margin-bottom: 20px;
  display: inline-block;
  width: 100%;
`;

const GalleryImage = ({
  src,
  alt,
  date,
  location,
  onClick,
}: GalleryItemProps & { onClick: () => void }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <MasonryItem>
      <GalleryItem onClick={onClick}>
        <ImageContainer>
          <img
            src={src}
            alt={alt}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              opacity: loaded ? 1 : 0,
              transition: "opacity 0.3s ease",
            }}
            onLoad={() => setLoaded(true)}
          />
          {(date || location) && (
            <ImageCaption>
              {location && <p>{location}</p>}
              {date && <p>{date}</p>}
            </ImageCaption>
          )}
        </ImageContainer>
      </GalleryItem>
    </MasonryItem>
  );
};

interface GalleryGridProps {
  images: GalleryItemProps[];
}

export default function GalleryGrid({ images }: GalleryGridProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const sortedImages = [...images].sort((a, b) => {
    const getFileNumber = (src: string) => {
      const fileName = src.split("/").pop() || "";
      const match = fileName.match(/[a-z](\d+)-(\d+)/i);
      if (match && match.length >= 3) {
        return parseInt(match[1] + match[2]);
      }

      return fileName;
    };

    const numA = getFileNumber(a.src);
    const numB = getFileNumber(b.src);

    if (typeof numA === "number" && typeof numB === "number") {
      return numA - numB;
    }

    return String(numA).localeCompare(String(numB));
  });

  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  return (
    <>
      <MasonryContainer>
        {sortedImages.map((image, index) => (
          <GalleryImage
            key={index}
            src={image.src}
            alt={image.alt}
            date={image.date}
            location={image.location}
            onClick={() => openLightbox(index)}
          />
        ))}
      </MasonryContainer>

      {/* Özel Lightbox Bileşeni */}
      <CustomLightbox
        images={sortedImages}
        currentIndex={currentImageIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
}
