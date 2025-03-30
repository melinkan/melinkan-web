"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Container, Wrapper } from "../Container";

export const StyledHeroContainer = styled(Container)`
  padding-top: 148px;
  border-bottom: 1px solid rgb(var(--clr-dark));
`;

export const StyledHeroWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 64px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const StyledHeroInfoWrapper = styled(motion.div)`
  flex: 3;
`;

export const StyledHeroTitle = styled(motion.h1)`
  margin-bottom: 16px;
  font-size: 48px;
  font-weight: 400;
  line-height: 1;
  color: rgb(var(--clr-dark));

  @media (max-width: 992px) {
    font-size: 24px;
    text-align: center;
  }
`;

export const StyledHeroSubtitle = styled(motion.h2)`
  font-size: 72px;
  font-weight: 500;
  line-height: 1;
  color: rgb(var(--clr-dark));
  margin-bottom: 16px;
  width: 75%;

  @media (max-width: 1440px) {
    width: 100%;
  }

  @media (max-width: 992px) {
    font-size: 36px;
    text-align: center;
  }
`;

export const StyledHeroImage = styled(motion.div)`
  flex: 2;

  img {
    border-radius: 5vw;
  }

  @media (max-width: 992px) {
    max-width: 450px;
  }
`;
