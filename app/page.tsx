import { HeaderHome } from "./components/Header/HeaderHome";
import { WhatIDo } from "./components/WhatIDo/WhatIDo";
import { TechStack } from "./components/TechStack/TechStack";
import { Experiences } from "./components/Experiences/Experiences";
import { Footer } from "./components/Footer/Footer";
import { getAllWorkExperiences } from "@/lib/api";

export default async function Home() {
  const workExperiences = await getAllWorkExperiences();

  return (
    <>
      <HeaderHome />
      <WhatIDo />
      <TechStack />
      <Experiences experiences={workExperiences} />
      <Footer />
    </>
  );
}
