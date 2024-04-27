"use client";

import { motion } from "framer-motion";
import styled from "styled-components";

const HeaderImage = styled(motion.div)`
  img {
    border-radius: 5vw;
  }

  @media (max-width: 992px) {
    max-width: 450px;
  }
`;

export default HeaderImage;
