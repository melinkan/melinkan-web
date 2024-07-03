import { HeaderHome } from "./components/Header/HeaderHome";
import { WhatIDo } from "./components/WhatIDo/WhatIDo";
import { TechStack } from "./components/TechStack/TechStack";
import { Experiences } from "./components/Experiences/Experiences";
import { Footer } from "./components/Footer/Footer";
import { getAllWhatIDo, getAllWorkExperiences } from "@/lib/api";

export default async function Home() {
  const workExperiences = await getAllWorkExperiences();
  const whatIDo = await getAllWhatIDo();

  return (
    <>
      <HeaderHome />
      <WhatIDo whatIDo={whatIDo} />
      <TechStack />
      <Experiences experiences={workExperiences} />
      <Footer />
    </>
  );
}
