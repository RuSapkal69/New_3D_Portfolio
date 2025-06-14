import React, { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { motion, useScroll, useTransform } from "framer-motion";
import LandingPage from "./components/LandingPage";
import Home from "./components/Home";
import EarthModel from "./components/EarthModel";
import "./index.css";

const App = () => {
  const parallaxRef = useRef();
  const scrollContainerRef = useRef();

  useEffect(() => {
    const scrollContainer = parallaxRef.current.container.current;
    scrollContainerRef.current = scrollContainer;
  }, []);

  const { scrollYProgress } = useScroll({
    container: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  const x = useTransform(scrollYProgress, [0, 1], [0, -1000]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 2]);

  return (
    <div className="w-full h-screen">
      <Parallax pages={2.5} ref={parallaxRef}>
        <ParallaxLayer offset={0} speed={0.3}>
          <LandingPage />
        </ParallaxLayer>

        <ParallaxLayer sticky={{ start: 0.15, end: 0.3 }}>
          <div className="w-full h-full flex items-center justify-center parallax-container">
            <motion.div style={{ x, scale }} className="parallax-container">
              <EarthModel />
            </motion.div>
          </div>
        </ParallaxLayer>

        <ParallaxLayer speed={0.5} offset={1}>
          <Home />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
