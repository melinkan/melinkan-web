"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import Container from "../Container";

export const StyledHeaderWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 64px;
  border-bottom: 1px solid rgb(var(--clr-dark));
  padding-top: 110px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const StyledHeaderInfoWrapper = styled(motion.div)`
  flex: 3;
`;

export const StyledHeaderTitle = styled(motion.h1)`
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

export const StyledHeaderSubtitle = styled(motion.h2)`
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

export const StyledHeaderImage = styled(motion.div)`
  flex: 2;

  img {
    border-radius: 5vw;
  }

  @media (max-width: 992px) {
    max-width: 450px;
  }
`;
