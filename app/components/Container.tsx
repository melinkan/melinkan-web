"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.section)`
  width: 100%;
  padding: 64px 36px;

  @media (min-width: 1920px) {
    max-width: 1800px;
  }
`;

export default Container;
