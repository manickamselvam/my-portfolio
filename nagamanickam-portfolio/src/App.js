import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Technologies from "./components/Technologies";
import HomeUp from "./components/HomeUp";

import { useRef } from "react";
function App() {
  const contactSection = useRef(null);
  const homeUp = useRef(null);
  return (
    <>
      <Navbar contactSection={contactSection} />
      <div className="overflow-x-hidden text-neutral-300 antiaaliased selection:bg-cyan-300 selection:text-cyaan-900">
        <div className="fixed top-0 -z-10 h-full w-full">
          <div class="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
        </div>
        <div className="container mx-auto px-8">
          {/* <Navbar /> */}
          <Hero homeUp={homeUp} />
          <About />
          <Technologies />
          <Experience />
          <Projects />
          <Contact contactSection={contactSection} />
          <HomeUp homeUp={homeUp} />
        </div>
      </div>
    </>
  );
}

export default App;
