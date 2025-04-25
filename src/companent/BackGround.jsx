// MatrixBackground.jsx
import React from 'react';

function BackGround() {
  return (
    <div >
    <div className="animate-scroll whitespace-nowrap text-blue-500 opacity-10 text-[100px]">
      {Array(20).fill('0101010101 ').join('')}
    </div>
  </div>
  );
}

export default BackGround;
// className="fixed top-96 left-0 w-full h-full overflow-hidden -z-10"