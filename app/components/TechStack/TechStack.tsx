"use client";

import Marquee from "react-fast-marquee";
import { useRef } from "react";
import { useInView } from "framer-motion";

import SectionTitle from "../SectionTitles";
import {
  StyledMarqueeMotion,
  StyledMarqueeWrapper,
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
    <StyledTechStackWrapper id="techstack">
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
          </StyledMarqueeWrapper>
          <StyledMarqueeWrapper>
            <SiTypescript />
          </StyledMarqueeWrapper>
          <StyledMarqueeWrapper>
            <IoLogoReact />
          </StyledMarqueeWrapper>
          <StyledMarqueeWrapper>
            <SiNextdotjs />
          </StyledMarqueeWrapper>
          <StyledMarqueeWrapper>
            <SiWordpress />
          </StyledMarqueeWrapper>
          <StyledMarqueeWrapper>
            <SiFigma />
          </StyledMarqueeWrapper>
          <StyledMarqueeWrapper>
            <SiFramer />
          </StyledMarqueeWrapper>
          <StyledMarqueeWrapper>
            <SiWebflow />
          </StyledMarqueeWrapper>
          <StyledMarqueeWrapper>
            <SiSemrush />
          </StyledMarqueeWrapper>
          <StyledMarqueeWrapper>
            <SiGoogletagmanager />
          </StyledMarqueeWrapper>
          <StyledMarqueeWrapper>
            <SiGoogleanalytics />
          </StyledMarqueeWrapper>
        </Marquee>
      </StyledMarqueeMotion>
    </StyledTechStackWrapper>
  );
}
