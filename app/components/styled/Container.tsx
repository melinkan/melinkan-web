"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const Container = styled(motion.section)`
  max-width: var(--max-width);
  width: 100%;
  margin: 0 auto;
  padding: 64px 0px;

  @media (min-width: 1920px) {
    max-width: 1800px;
  }
`;

export default Container;
