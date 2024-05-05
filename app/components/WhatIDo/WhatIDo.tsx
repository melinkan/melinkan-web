"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

import {
  StyledWhatIDoGrid,
  StyledWhatIDoWrapper,
} from "../styled/StyledWhatIDo";
import SectionTitle from "../styled/StyledSectionTitles";
import WhatIDoCard from "./WhatIDoCard";

const cardData = [
  {
    title: "Web Development",
    description:
      "I build performant and responsive websites and modern web applications using latest technologies.",
  },
  {
    title: "UI Design",
    description:
      "I design user-friendly and visually appealing user interfaces that enhance user interaction and satisfaction.",
  },
  {
    title: "SEO",
    description:
      "I optimize websites to improve their visibility in search engine results, increasing organic traffic and engagement.",
  },
  {
    title: "Digital Marketing",
    description:
      "I develop and implement strategic digital marketing campaigns that drive growth, enhance brand awareness, and increase conversions.",
  },
];

export function WhatIDo() {
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
    <StyledWhatIDoWrapper>
      <SectionTitle title="What i do" />
      <StyledWhatIDoGrid
        initial="offscreen"
        animate="onscreen"
        exit="offscreen"
        variants={cardVariants}
        ref={ref}
      >
        {cardData.map((card, index) => (
          <WhatIDoCard
            key={index}
            title={card.title}
            description={card.description}
          />
        ))}
      </StyledWhatIDoGrid>
    </StyledWhatIDoWrapper>
  );
}
