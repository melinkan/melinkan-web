"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const HeaderDescription = styled(motion.p)`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
  font-family: var(--font-inter);
  color: rgb(var(--clr-dark));

  @media (max-width: 992px) {
    font-size: 14px;
  }
`;

export default HeaderDescription;
