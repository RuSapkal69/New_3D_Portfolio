import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import './index.css'
import EarthModel from './components/EarthModel.jsx';

const App = () => {
  return (
    <div style={{ width: '100%', height: '100vh' }}>
      <Parallax pages={2.5} style={{ top: '0', left: '0' }}>
        {/* Landing Page with its own video background - slower parallax */}
        <ParallaxLayer
          offset={0}
          speed={0.3}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <LandingPage />
        </ParallaxLayer>

        {/* Earth Model with a slower parallax effect */}
        <ParallaxLayer
          sticky={{ start: 0.25, end: 1.5 }}
        >
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-32 h-32 ml-2">
            <EarthModel scale={0.8} />
          </div>
          </div>
        </ParallaxLayer>


        {/* Smooth transition overlay */}
        <ParallaxLayer
          offset={0.85}
          speed={0.4}
          style={{
            background: 'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.9) 80%, #000 100%)',
            pointerEvents: 'none',
          }}
        />

        {/* Home component with its own background image */}
        <ParallaxLayer
          offset={1}
          speed={0.6}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Home />
        </ParallaxLayer>


      </Parallax>

    </div>
  );
};

export default App;