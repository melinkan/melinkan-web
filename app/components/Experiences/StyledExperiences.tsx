"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

import { Container, Wrapper } from "../Container";

export const StyledExperiencesContainer = styled(Container)`
  border-bottom: 1px solid rgb(var(--clr-dark));
`;

export const StyledExperiencesWrapper = styled(Wrapper)`
  display: flex;
  justify-content: space-between;

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
