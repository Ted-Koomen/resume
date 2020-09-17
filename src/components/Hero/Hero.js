import React from 'react';

const Hero = ({ height, background, children }) => (
  <div style={{height, background}}>
    {children}
  </div>
);

export default Hero;