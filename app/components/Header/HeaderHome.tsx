import Image from "next/image";

import profileImage from "@/public/melin-kan.jpg";
import {
  HeaderImage,
  HeaderSubtitle,
  HeaderTitle,
  HeaderWrapper,
} from "../styled/StyledHeader";

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
