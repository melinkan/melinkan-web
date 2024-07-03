import Image from "next/image";

import profileImage from "@/public/melin-kan.jpg";
import {
  StyledHeaderImage,
  StyledHeaderSubtitle,
  StyledHeaderTitle,
  StyledHeaderWrapper,
  StyledHeaderContainer,
  StyledHeaderInfoWrapper,
} from "./StyledHeader";

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

interface Header {
  sys: {
    id: string;
  };
  greeting: string;
  title: string;
  image: {
    url: string;
    title: string;
    description: string;
  };
}
interface HeaderHomeProps {
  headerHome: Array<Header>;
}

export function HeaderHome({ headerHome }: HeaderHomeProps) {
  return (
    <StyledHeaderContainer>
      <StyledHeaderWrapper>
        <StyledHeaderInfoWrapper>
          <StyledHeaderTitle
            initial="offscreen"
            animate="onscreen"
            exit="offscreen"
            variants={titleVariants}
          >
            {headerHome[0].greeting}
          </StyledHeaderTitle>
          <StyledHeaderSubtitle
            initial="offscreen"
            animate="onscreen"
            exit="offscreen"
            variants={subtitleVariants}
          >
            {headerHome[0].title}
          </StyledHeaderSubtitle>
        </StyledHeaderInfoWrapper>
        <StyledHeaderImage
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
          variants={imageVariants}
        >
          <Image
            src={headerHome[0].image.url}
            alt="Melin Kan"
            width={700}
            height={475}
            sizes="(max-width: 768px) 300vw, (max-width: 1200px) 200vw"
          />
        </StyledHeaderImage>
      </StyledHeaderWrapper>
    </StyledHeaderContainer>
  );
}
