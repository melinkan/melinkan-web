"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.section)`
  width: 100%;
  padding: 64px 36px;
`;

export const Wrapper = styled(motion.div)`
  margin: 0 auto;

  @media (min-width: 1920px) {
    max-width: 1800px;
  }
`;
