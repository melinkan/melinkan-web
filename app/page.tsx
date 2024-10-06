import { Navbar } from "@/app/components/Navbar/Navbar";
import { HeroHome } from "@/app/components/Hero/HeroHome";
import { WhatIDo } from "@/app/components/WhatIDo/WhatIDo";
import { TechStack } from "@/app/components/TechStack/TechStack";
import { Experiences } from "@/app/components/Experiences/Experiences";
import { Footer } from "@/app/components/Footer/Footer";
import {
  getAllHeaderHome,
  getAllWhatIDo,
  getAllWorkExperiences,
} from "@/lib/api";

export default async function Home() {
  const workExperiences = await getAllWorkExperiences();
  const whatIDo = await getAllWhatIDo();
  const heroHome = await getAllHeaderHome();

  return (
    <>
      <Navbar />
      <HeroHome heroHome={heroHome} />
      <WhatIDo whatIDo={whatIDo} />
      <TechStack />
      <Experiences experiences={workExperiences} />
      <Footer />
    </>
  );
}
