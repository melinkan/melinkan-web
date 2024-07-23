"use client";

import Marquee from "react-fast-marquee";
import { useRef } from "react";
import { useInView } from "framer-motion";

import SectionTitle from "../SectionTitles";
import {
  StyledMarqueeMotion,
  StyledMarqueeText,
  StyledMarqueeWrapper,
  StyledTechStackContainer,
  StyledTechStackWrapper,
} from "./StyledTechStack";

import {
  SiFigma,
  SiFramer,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiJavascript,
  SiNextdotjs,
  SiSemrush,
  SiTypescript,
  SiWebflow,
  SiWordpress,
} from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";

export function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: isInView ? 0 : -100,
      opacity: isInView ? 1 : 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <StyledTechStackContainer id="techstack">
      <StyledTechStackWrapper>
        <SectionTitle title="Tech Stack" />
        <StyledMarqueeMotion
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
          variants={cardVariants}
          ref={ref}
        >
          <Marquee direction="right" speed={75}>
            <StyledMarqueeWrapper>
              <SiJavascript />
              <StyledMarqueeText>JavaScript</StyledMarqueeText>
            </StyledMarqueeWrapper>
            <StyledMarqueeWrapper>
              <SiTypescript />
              <StyledMarqueeText>TypeScript</StyledMarqueeText>
            </StyledMarqueeWrapper>
            <StyledMarqueeWrapper>
              <IoLogoReact />
              <StyledMarqueeText>React</StyledMarqueeText>
            </StyledMarqueeWrapper>
            <StyledMarqueeWrapper>
              <SiNextdotjs />
              <StyledMarqueeText>Next.js</StyledMarqueeText>
            </StyledMarqueeWrapper>
            <StyledMarqueeWrapper>
              <SiWordpress />
              <StyledMarqueeText>WordPress</StyledMarqueeText>
            </StyledMarqueeWrapper>
            <StyledMarqueeWrapper>
              <SiFigma />
              <StyledMarqueeText>Figma</StyledMarqueeText>
            </StyledMarqueeWrapper>
            <StyledMarqueeWrapper>
              <SiFramer />
              <StyledMarqueeText>Framer</StyledMarqueeText>
            </StyledMarqueeWrapper>
            <StyledMarqueeWrapper>
              <SiWebflow />
              <StyledMarqueeText>Webflow</StyledMarqueeText>
            </StyledMarqueeWrapper>
            <StyledMarqueeWrapper>
              <SiSemrush />
              <StyledMarqueeText>Semrush</StyledMarqueeText>
            </StyledMarqueeWrapper>
            <StyledMarqueeWrapper>
              <SiGoogletagmanager />
              <StyledMarqueeText>Google Tag Manager</StyledMarqueeText>
            </StyledMarqueeWrapper>
            <StyledMarqueeWrapper>
              <SiGoogleanalytics />
              <StyledMarqueeText>Google Analytics 4</StyledMarqueeText>
            </StyledMarqueeWrapper>
          </Marquee>
        </StyledMarqueeMotion>
      </StyledTechStackWrapper>
    </StyledTechStackContainer>
  );
}
