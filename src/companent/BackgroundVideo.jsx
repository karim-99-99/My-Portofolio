import React, { useRef, useEffect } from "react";

const BackgroundVideo = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Ensure video loops and plays
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        // Autoplay was prevented, handle gracefully
        console.log("Video autoplay prevented:", error);
      });
    }
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-10"
      >
        <source src="/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-800/40 to-slate-900/60 dark:from-gray-900/80 dark:via-gray-900/60 dark:to-gray-900/80"></div>
      
      {/* Animated particles/effects overlay */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-teal-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default BackgroundVideo;




