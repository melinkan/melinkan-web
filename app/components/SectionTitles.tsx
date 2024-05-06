"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

export const StyledSectionTitle = styled(motion.h2)`
  font-size: 20px;
  font-weight: 400;
  line-height: 1;
  color: rgb(var(--clr-dark));
  text-transform: uppercase;
  flex: 2;

  @media (max-width: 992px) {
    font-size: 16px;
  }
`;

interface SectionTitleProps {
  title: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const titleVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: isInView ? 0 : -100,
      opacity: isInView ? 1 : 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <StyledSectionTitle
      initial="offscreen"
      animate="onscreen"
      exit="offscreen"
      variants={titleVariants}
      ref={ref}
    >
      {title}
    </StyledSectionTitle>
  );
};

export default SectionTitle;
