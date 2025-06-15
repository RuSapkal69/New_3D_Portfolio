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
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 3]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.3], [1, 0]);

  return (
    <div className="w-full h-screen">
      <Parallax pages={3} ref={parallaxRef}>
        <ParallaxLayer offset={0} speed={0.1}>
          <LandingPage />
        </ParallaxLayer>

        <ParallaxLayer offset={0.5} sticky={{ start: 0.15, end: 1 }}>
          <div className="w-full h-full flex items-center justify-center parallax-container">
            <motion.div style={{ x, scale, opacity }} className="parallax-container ml-[34rem]">
              <EarthModel />
            </motion.div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer speed={1} offset={1}> 
          <Home />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default App;
