"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import Container from "./Container";
import Link from "next/link";

export const StyledFooterWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledSiteTitle = styled(motion.div)`
  font-size: 38px;
  font-weight: 500;
`;

export const StyledCopyRight = styled(motion.span)`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
`;

export const StyledFooterTitle = styled(motion.h2)`
  font-weight: 500;
  font-size: 18px;
`;

export const StyledSocialsWrapper = styled(motion.div)`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const StyledSocialLink = styled(Link)`
  font-size: 28px;
`;
