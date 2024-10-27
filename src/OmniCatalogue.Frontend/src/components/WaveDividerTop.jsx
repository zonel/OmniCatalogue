import React from 'react';

const WaveDividerTop = () => {
  return (
    <div style={{ overflow: 'hidden', lineHeight: 0, padding: 0, margin: 0 }}>
      <svg
        viewBox="0 0 1440 320"
        style={{ display: 'block', width: '100%', height: 'auto' }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill="#654236" // Dark accent color for wave
          d="M0,160 C180,260 360,60 540,160 C720,260 900,60 1080,160 C1260,260 1440,160 1440,160 L1440,320 L0,320 Z"
        />
      </svg>
    </div>
  );
};

export default WaveDividerTop;
