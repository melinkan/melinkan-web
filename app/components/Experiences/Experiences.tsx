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

interface Experience {
  sys: {
    id: string;
  };
  title: string;
  description: string;
  date: string;
  company: string;
}
interface ExperiencesProps {
  experiences: Array<Experience>;
}

export function Experiences({ experiences }: ExperiencesProps) {
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
          {experiences.map((experience) => {
            return (
              <StyledExperienceCard key={experience.sys.id}>
                <StyledExperienceDate>{experience.date}</StyledExperienceDate>
                <StyledExperienceTitle>
                  {experience.title}, <i>{experience.company}</i>
                </StyledExperienceTitle>
                <StyledExperienceDescription>
                  {experience.description}
                </StyledExperienceDescription>
              </StyledExperienceCard>
            );
          })}
        </StyledExperienceContainer>
      </StyledExperiencesWrapper>
    </StyledExperiencesContainer>
  );
}
function getAllArticles() {
  throw new Error("Function not implemented.");
}
