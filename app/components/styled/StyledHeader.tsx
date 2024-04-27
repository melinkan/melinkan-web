"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import Container from "./Container";

export const HeaderWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  gap: 48px;
  border-bottom: 1px solid rgb(var(--clr-dark));

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
  }
`;

export const HeaderTitle = styled(motion.h1)`
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

export const HeaderSubtitle = styled(motion.h2)`
  font-size: 72px;
  font-weight: 500;
  line-height: 1;
  color: rgb(var(--clr-dark));

  @media (max-width: 992px) {
    font-size: 36px;
    text-align: center;
  }
`;

export const HeaderImage = styled(motion.div)`
  img {
    border-radius: 5vw;
  }

  @media (max-width: 992px) {
    max-width: 450px;
  }
`;
