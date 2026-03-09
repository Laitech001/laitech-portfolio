import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Project from "./components/Project";
import Service from "./components/Service";
import TechStack from "./components/TechStack";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <TechStack />
      <Service />
      <Project /> 
      <Contact />
    </>
  );
}
