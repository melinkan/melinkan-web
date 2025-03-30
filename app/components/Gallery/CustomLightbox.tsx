"use client";

import { useState, useEffect, useCallback } from "react";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";
import styled from "styled-components";

interface LightboxProps {
  images: {
    src: string;
    alt: string;
    date?: string;
    location?: string;
  }[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

const LightboxOverlay = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.9);
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
  flex-direction: column;
`;

const LightboxContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 1200px;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LightboxContent = styled.div`
  position: relative;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LightboxImage = styled.img`
  max-width: 100%;
  max-height: 80vh;
  object-fit: contain;
`;

const LightboxCaption = styled.div`
  color: white;
  text-align: center;
  padding: 16px;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

const NavButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  z-index: 1010;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(255, 255, 255, 0.5);
  }
`;

const PrevButton = styled(NavButton)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const NextButton = styled(NavButton)`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
`;

const CloseButton = styled(NavButton)`
  position: absolute;
  top: 20px;
  right: 20px;
`;

const Thumbnails = styled.div`
  display: flex;
  overflow-x: auto;
  padding: 10px 0;
  margin-top: 20px;
  max-width: 90%;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.5) transparent;

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 6px;
  }
`;

const Thumbnail = styled.img<{ isActive: boolean }>`
  width: 80px;
  height: 60px;
  object-fit: cover;
  margin: 0 5px;
  cursor: pointer;
  border: 2px solid ${({ isActive }) => (isActive ? "white" : "transparent")};
  opacity: ${({ isActive }) => (isActive ? 1 : 0.7)};
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

const Counter = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 14px;
  z-index: 1010;
`;

export default function CustomLightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
}: LightboxProps) {
  const [index, setIndex] = useState(currentIndex);

  useEffect(() => {
    setIndex(currentIndex);
  }, [currentIndex]);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;

      switch (e.key) {
        case "ArrowLeft":
          setIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
          );
          break;
        case "ArrowRight":
          setIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
          );
          break;
        case "Escape":
          onClose();
          break;
      }
    },
    [isOpen, images.length, onClose]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [isOpen, handleKeyDown]);

  const goNext = () => {
    setIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goPrev = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  if (!images || images.length === 0) return null;

  const currentImage = images[index];

  return (
    <LightboxOverlay isOpen={isOpen} onClick={onClose}>
      <CloseButton
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
      >
        <IoClose size={24} />
      </CloseButton>

      <Counter>
        {index + 1} / {images.length}
      </Counter>

      <LightboxContainer onClick={(e) => e.stopPropagation()}>
        {images.length > 1 && (
          <>
            <PrevButton
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
            >
              <IoChevronBack size={20} />
            </PrevButton>

            <NextButton
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
            >
              <IoChevronForward size={20} />
            </NextButton>
          </>
        )}

        <LightboxContent>
          <LightboxImage src={currentImage.src} alt={currentImage.alt} />

          {(currentImage.location || currentImage.date) && (
            <LightboxCaption>
              {currentImage.location && (
                <p style={{ fontWeight: "bold", margin: "4px 0" }}>
                  {currentImage.location}
                </p>
              )}
              {currentImage.date && (
                <p style={{ margin: "4px 0" }}>{currentImage.date}</p>
              )}
            </LightboxCaption>
          )}
        </LightboxContent>
      </LightboxContainer>

      {images.length > 1 && (
        <Thumbnails onClick={(e) => e.stopPropagation()}>
          {images.map((image, i) => (
            <Thumbnail
              key={i}
              src={image.src}
              alt={image.alt}
              isActive={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </Thumbnails>
      )}
    </LightboxOverlay>
  );
}
