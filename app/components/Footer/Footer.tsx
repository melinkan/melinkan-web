"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaCodepen, FaDribbble, FaGithub, FaLinkedin } from "react-icons/fa";

import {
  StyledCopyRight,
  StyledFooterContainer,
  StyledFooterTitle,
  StyledFooterWrapper,
  StyledSiteTitle,
  StyledSocialLink,
  StyledSocialsWrapper,
} from "./StyledFooter";

export function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const currentYear = new Date().getFullYear();

  const titleVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: isInView ? 0 : -100,
      opacity: isInView ? 1 : 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: 0.3,
      },
    },
  };

  return (
    <StyledFooterContainer as="footer">
      <StyledFooterWrapper>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
          variants={titleVariants}
          ref={ref}
        >
          <StyledSiteTitle>MelinKan</StyledSiteTitle>
          <StyledCopyRight>
            © {currentYear} - All rights reserved.
          </StyledCopyRight>
        </motion.div>
        <motion.div
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
          variants={titleVariants}
          ref={ref}
        >
          <StyledFooterTitle>Socials</StyledFooterTitle>
          <StyledSocialsWrapper>
            <StyledSocialLink
              href="https://github.com/melinkan"
              title="Melin Kan Github"
            >
              <FaGithub />
            </StyledSocialLink>
            <StyledSocialLink
              href="https://linkedin.com/in/melinkan"
              title="Melin Kan LinkedIn"
            >
              <FaLinkedin />
            </StyledSocialLink>
            <StyledSocialLink
              href="https://codepen.io/melinkan"
              title="Melin Kan CodePen"
            >
              <FaCodepen />
            </StyledSocialLink>
            <StyledSocialLink
              href="https://dribbble.com/melinkan"
              title="Melin Kan Dribbble"
            >
              <FaDribbble />
            </StyledSocialLink>
          </StyledSocialsWrapper>
        </motion.div>
      </StyledFooterWrapper>
    </StyledFooterContainer>
  );
}
