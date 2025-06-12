import React from 'react';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import LandingPage from './components/LandingPage.jsx';
import Home from './components/Home.jsx';
import './index.css'

const App = () => {
  return (
    <div style={{ width: '100%', height: '100vh', overflow: 'hidden' }}>
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

        {/* Floating elements for 3D depth effect */}
        <ParallaxLayer
          offset={0.2}
          speed={0.8}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            paddingRight: '10%',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.08)',
              backdropFilter: 'blur(15px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              animation: 'float 6s ease-in-out infinite',
            }}
          />
        </ParallaxLayer>

        <ParallaxLayer
          offset={0.1}
          speed={-0.2}
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-start',
            paddingLeft: '8%',
            paddingBottom: '20%',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              animation: 'float 8s ease-in-out infinite reverse',
            }}
          />
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

        {/* Additional floating elements for depth */}
        <ParallaxLayer
          offset={1.2}
          speed={0.9}
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-end',
            paddingTop: '15%',
            paddingRight: '12%',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.06)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              animation: 'float 10s ease-in-out infinite',
            }}
          />
        </ParallaxLayer>

        {/* Foreground fast-moving elements */}
        <ParallaxLayer
          offset={0.6}
          speed={1.5}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
          }}
        >
          <div
            style={{
              width: '30px',
              height: '30px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              animation: 'float 4s ease-in-out infinite reverse',
            }}
          />
        </ParallaxLayer>
      </Parallax>

    </div>
  );
};

export default App;