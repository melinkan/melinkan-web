"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Container, Wrapper } from "../Container";

export const StyledWhatIDoContainer = styled(Container)`
  border-bottom: 1px solid rgb(var(--clr-dark));
`;

export const StyledWhatIDoWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const StyledWhatIDoGrid = styled(motion.div)`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  row-gap: 48px;
  column-gap: 48px;
  flex: 3;

  &:before,
  &:after {
    content: "";
    position: absolute;
    background-color: rgb(var(--clr-dark));
  }

  &:before {
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    transform: translateY(-50%);
  }

  &:after {
    top: 0;
    left: 50%;
    width: 1px;
    height: 100%;
    transform: translateX(-50%);
  }

  @media (max-width: 640px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(4, auto);
    row-gap: 24px;

    &:before,
    &:after {
      display: none;
    }
  }
`;

export const StyledWhatIDoCard = styled(motion.div)``;

export const StyledWhatIDoCardTitle = styled(motion.h3)`
  margin-bottom: 8px;
  font-size: 24px;
  font-weight: 500;
`;

export const StyledWhatIDoCardDescription = styled(motion.p)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;
