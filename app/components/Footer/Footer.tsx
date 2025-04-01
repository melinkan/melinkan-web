"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FaCodepen,
  FaDribbble,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaXTwitter,
} from "react-icons/fa6";

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
              href="https://instagram.com/melin.creative"
              title="Melin Kan Instagram"
              rel="nofollow"
              target="_blank"
            >
              <FaInstagram />
            </StyledSocialLink>
            <StyledSocialLink
              href="https://twitter.com/melin_kan"
              title="Melin Kan Twitter"
              rel="nofollow"
              target="_blank"
            >
              <FaXTwitter />
            </StyledSocialLink>
            <StyledSocialLink
              href="https://github.com/melinkan"
              title="Melin Kan Github"
              rel="nofollow"
              target="_blank"
            >
              <FaGithub />
            </StyledSocialLink>
            <StyledSocialLink
              href="https://linkedin.com/in/melinkan"
              title="Melin Kan LinkedIn"
              rel="nofollow"
              target="_blank"
            >
              <FaLinkedin />
            </StyledSocialLink>
            <StyledSocialLink
              href="https://codepen.io/melinkan"
              title="Melin Kan CodePen"
              rel="nofollow"
              target="_blank"
            >
              <FaCodepen />
            </StyledSocialLink>
            <StyledSocialLink
              href="https://dribbble.com/melinkan"
              title="Melin Kan Dribbble"
              rel="nofollow"
              target="_blank"
            >
              <FaDribbble />
            </StyledSocialLink>
          </StyledSocialsWrapper>
        </motion.div>
      </StyledFooterWrapper>
    </StyledFooterContainer>
  );
}
