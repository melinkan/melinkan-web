"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "styled-components";
import { Container, Wrapper } from "@/app/components/Container";

export const StyledPageTitle = styled(motion.h1)`
  padding-top: 110px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5;
  color: rgb(var(--clr-dark));
  text-transform: uppercase;
  text-align: center;

  @media (max-width: 640px) {
    padding-top: 60px;
    font-size: 28px;
  }
`;

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
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
    <Container>
      <Wrapper>
        <StyledPageTitle
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
          variants={titleVariants}
          ref={ref}
        >
          {title}
        </StyledPageTitle>
      </Wrapper>
    </Container>
  );
};

export default PageTitle;
