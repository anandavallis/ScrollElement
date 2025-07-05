// src/components/ScrollToSection.jsx
import React, { useRef } from 'react';

const ScrollToSection = () => {
  const sectionRef = useRef(null);

  const handleScroll = () => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div>
      <button onClick={handleScroll}>Scroll to Section</button>

      <div style={{ height: '100vh' }}></div> {/* Spacer for scroll */}
      <div style={{ height: '100vh' }}></div>

      <div
        ref={sectionRef}
        style={{
          height: '300px',
          backgroundColor: 'lightblue',
          textAlign: 'center',
          paddingTop: '100px',
        }}
      >
        <h2>This is the section you scrolled to</h2>
      </div>

      <div style={{ height: '100vh' }}></div>
    </div>
  );
};

export default ScrollToSection;
