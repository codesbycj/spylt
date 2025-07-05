import React from "react";
import { Navbar, Nutrition } from "./components";
import { Flavour, Hero, Message } from "./sections";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {
  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    });
  });

  return (
    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Hero />
          <Message />
          <Flavour />
          <Nutrition />
          <div className="h-dvh border-4 border-red-500"></div>
        </div>
      </div>
    </main>
  );
};

export default App;
