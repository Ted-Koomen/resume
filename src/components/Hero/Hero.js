import React from 'react';

const Hero = ({ height, background, children, style }) => (
  <div style={{height, background, ...style}}>
    {children}
  </div>
);

export default Hero;