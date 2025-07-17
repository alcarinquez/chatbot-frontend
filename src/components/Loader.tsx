import React from 'react';
import { Box } from '@mui/material';

const Loader: React.FC = () => {
  return (
    <Box className="fixed inset-0 z-[9999] bg-white bg-opacity-90 flex items-center justify-center">
      <img
        src="/assets/images/object-animation.png" // <-- Replace with your actual loader image path
        alt="Loading..."
        className="w-24 h-24 animate-bounce" // You can change size or remove animation
      />
    </Box>
  );
};

export default Loader;
