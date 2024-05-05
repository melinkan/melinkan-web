import { HeaderHome } from "./components/Header/HeaderHome";
import { WhatIDo } from "./components/WhatIDo/WhatIDo";
import { TechStack } from "./components/TechStack/TechStack";
import { Experiences } from "./components/Experiences/Experiences";
import { Footer } from "./components/Footer/Footer";

export default function Home() {
  return (
    <>
      <HeaderHome />
      <WhatIDo />
      <TechStack />
      <Experiences />
      <Footer />
    </>
  );
}
