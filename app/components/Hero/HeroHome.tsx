import Image from "next/image";

import {
  StyledHeroImage,
  StyledHeroSubtitle,
  StyledHeroTitle,
  StyledHeroWrapper,
  StyledHeroContainer,
  StyledHeroInfoWrapper,
} from "./StyledHeroHome";

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

interface Hero {
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
interface HeroHomeProps {
  heroHome: Array<Hero>;
}

export function HeroHome({ heroHome }: HeroHomeProps) {
  return (
    <StyledHeroContainer>
      <StyledHeroWrapper>
        <StyledHeroInfoWrapper>
          <StyledHeroTitle
            initial="offscreen"
            animate="onscreen"
            exit="offscreen"
            variants={titleVariants}
          >
            {heroHome[0].greeting}
          </StyledHeroTitle>
          <StyledHeroSubtitle
            initial="offscreen"
            animate="onscreen"
            exit="offscreen"
            variants={subtitleVariants}
          >
            {heroHome[0].title}
          </StyledHeroSubtitle>
        </StyledHeroInfoWrapper>
        <StyledHeroImage
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
          variants={imageVariants}
        >
          <Image
            src={heroHome[0].image.url}
            alt="Melin Kan"
            width={700}
            height={475}
            sizes="(max-width: 768px) 300vw, (max-width: 1200px) 200vw"
          />
        </StyledHeroImage>
      </StyledHeroWrapper>
    </StyledHeroContainer>
  );
}
