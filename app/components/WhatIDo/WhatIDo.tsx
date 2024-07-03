"use client";
import { useRef } from "react";
import { useInView } from "framer-motion";

import {
  StyledWhatIDoGrid,
  StyledWhatIDoContainer,
  StyledWhatIDoWrapper,
} from "./StyledWhatIDo";
import SectionTitle from "../SectionTitles";
import WhatIDoCard from "./WhatIDoCard";

interface WhatIDo {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  date: string;
  company: string;
}
interface WhatIDoProps {
  whatIDo: Array<WhatIDo>;
}

export function WhatIDo({ whatIDo }: WhatIDoProps) {
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
    <StyledWhatIDoContainer id="whatido">
      <StyledWhatIDoWrapper>
        <SectionTitle title="What i do" />
        <StyledWhatIDoGrid
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
          variants={cardVariants}
          ref={ref}
        >
          {whatIDo.map((card) => (
            <WhatIDoCard
              key={card.sys.id}
              title={card.title}
              description={card.description}
            />
          ))}
        </StyledWhatIDoGrid>
      </StyledWhatIDoWrapper>
    </StyledWhatIDoContainer>
  );
}
