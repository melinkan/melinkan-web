"use client";

import SectionTitle from "../SectionTitles";
import { useRef } from "react";
import { useInView } from "framer-motion";

import {
  StyledExperienceCard,
  StyledExperienceContainer,
  StyledExperienceDate,
  StyledExperienceDescription,
  StyledExperienceTitle,
  StyledExperiencesContainer,
  StyledExperiencesWrapper,
} from "./StyledExperiences";

export function Experiences() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    offscreen: { x: -100, opacity: 0 },
    onscreen: {
      x: isInView ? 0 : -100,
      opacity: isInView ? 1 : 0,
      transition: {
        type: "spring",
        duration: 0.8,
        delay: 0.5,
      },
    },
  };

  return (
    <StyledExperiencesContainer id="experiences">
      <StyledExperiencesWrapper>
        <SectionTitle title="Work Experiences" />
        <StyledExperienceContainer
          initial="offscreen"
          animate="onscreen"
          exit="offscreen"
          variants={cardVariants}
          ref={ref}
        >
          <StyledExperienceCard>
            <StyledExperienceDate>Oct 2022 - Current</StyledExperienceDate>
            <StyledExperienceTitle>
              Marketing Web Developer, <i>Commencis</i>
            </StyledExperienceTitle>
            <StyledExperienceDescription>
              As a marketing web developer, I design, develop, and maintain
              websites using WordPress, JavaScript, and CSS, while also
              supporting our Web Frontend Team with ReactJS and TypeScript. My
              role includes integrating analytics with tools like Google Tag
              Manager and Google Analytics, and optimizing website performance
              through technical SEO. Additionally, I create visually appealing
              emails using ActiveCampaign, HTML, and CSS.
            </StyledExperienceDescription>
          </StyledExperienceCard>
          <StyledExperienceCard>
            <StyledExperienceDate>Jul 2022 - Sep 2022</StyledExperienceDate>
            <StyledExperienceTitle>
              Software Intern, <i>Hubtic</i>
            </StyledExperienceTitle>
            <StyledExperienceDescription>
              During my tenure as an intern at Hubtic, I gained valuable
              experience working on web projects utilizing React. Additionally,
              I worked on a marketing website that utilized WordPress. This
              experience allowed me to develop my skills in front-end
              development.
            </StyledExperienceDescription>
          </StyledExperienceCard>
        </StyledExperienceContainer>
      </StyledExperiencesWrapper>
    </StyledExperiencesContainer>
  );
}
