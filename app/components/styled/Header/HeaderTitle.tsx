"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const HeaderTitle = styled(motion.h1)`
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

export default HeaderTitle;
