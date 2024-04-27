"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const HeaderSubtitle = styled(motion.h2)`
  margin-bottom: 24px;
  font-size: 72px;
  font-weight: 500;
  line-height: 1;
  color: rgb(var(--clr-dark));

  @media (max-width: 992px) {
    font-size: 36px;
    text-align: center;
  }
`;

export default HeaderSubtitle;
