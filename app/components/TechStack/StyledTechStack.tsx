"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Container, Wrapper } from "../Container";

export const StyledTechStackContainer = styled(Container)`
  border-bottom: 1px solid rgb(var(--clr-dark));
`;

export const StyledTechStackWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }

  & h2 {
    flex: 2;
  }
`;

export const StyledMarqueeMotion = styled(motion.div)`
  flex: 3;
  overflow: hidden;
  width: 100%;
`;

export const StyledMarqueeWrapper = styled.div`
  font-size: 40px;
  margin: 0 36px;
  text-align: center;
`;
