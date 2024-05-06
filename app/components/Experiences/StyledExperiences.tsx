"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import Container from "../Container";

export const StyledExperiencesWrapper = styled(Container)`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(var(--clr-dark));

  @media (max-width: 992px) {
    flex-direction: column;
    gap: 24px;
  }
`;

export const StyledExperienceContainer = styled(motion.div)`
  flex: 3;
`;

export const StyledExperienceCard = styled(motion.div)`
  &:not(:last-child) {
    margin-bottom: 36px;
  }
`;

export const StyledExperienceDate = styled(motion.div)`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 300;
  margin-bottom: 8px;
`;

export const StyledExperienceTitle = styled(motion.h3)`
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const StyledExperienceDescription = styled(motion.p)`
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
`;
