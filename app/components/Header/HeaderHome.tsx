import Image from "next/image";

import HeaderSubtitle from "@/styled/Header/HeaderSubtitle";
import HeaderTitle from "@/styled/Header/HeaderTitle";
import HeaderWrapper from "@/styled/Header/HeaderWrapper";
import HeaderImage from "@/styled/Header/HeaderImage";
import profileImage from "@/public/melin-kan.jpg";

const titleVariants = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      delay: 0.3,
    },
  },
};

const subtitleVariants = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      delay: 0.5,
    },
  },
};

const descriptionVariants = {
  offscreen: { x: -100, opacity: 0 },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 0.8,
      delay: 0.7,
    },
  },
};

const imageVariants = {
  offscreen: { opacity: 0, scale: 0.5 },
  onscreen: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      delay: 0.5,
      ease: [0, 0.71, 0.2, 1.01],
    },
  },
};

export function HeaderHome() {
  return (
    <HeaderWrapper>
      <div>
        <HeaderTitle
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
          variants={titleVariants}
        >
          Hello, I&apos;m Melin
        </HeaderTitle>
        <HeaderSubtitle
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
          variants={subtitleVariants}
        >
          A Web Developer and UI Designer
        </HeaderSubtitle>
      </div>
      <HeaderImage
        initial="offscreen"
        animate="onscreen"
        exit="offscreen"
        variants={imageVariants}
      >
        <Image src={profileImage} placeholder="blur" alt="Melin Kan" />
      </HeaderImage>
    </HeaderWrapper>
  );
}
