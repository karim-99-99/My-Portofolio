// import { useState, useEffect } from "react";

// const ThemeToggle = () => {
//   const [isDark, setIsDark] = useState(() => {
//     // Check if user has a theme preference in localStorage
//     const savedTheme = localStorage.getItem("theme");
//     return (
//       savedTheme === "dark" ||
//       (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
//     );
//   });

//   useEffect(() => {
//     // Update the document class and localStorage when theme changes
//     if (isDark) {
//       document.documentElement.classList.add("dark");
//       localStorage.setItem("theme", "dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//       localStorage.setItem("theme", "light");
//     }
//   }, [isDark]);

//   return (
//     <button
//       onClick={() => setIsDark(!isDark)}
//       className="fixed top-4 right-4 p-2 rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors duration-200 hover:bg-gray-300 dark:hover:bg-gray-600"
//       aria-label="Toggle theme"
//     >
//       {isDark ? (
//         // Sun icon for dark mode
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
//           />
//         </svg>
//       ) : (
//         // Moon icon for light mode
//         <svg
//           className="w-6 h-6"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth={2}
//             d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//           />
//         </svg>
//       )}
//     </button>
//   );
// };

// export default ThemeToggle;


import { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(() => {
    // Check if user has a theme preference in localStorage
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // Prevent transition flicker on initial load
    if (!document.documentElement.style.getPropertyValue('--theme-transition')) {
      document.documentElement.style.setProperty('--theme-transition', 'none');
      setTimeout(() => {
        document.documentElement.style.setProperty('--theme-transition', 'all 0.3s ease');
      }, 100);
    }

    // Update the document class and localStorage when theme changes
    if (isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsTransitioning(true);
    
    // Use requestAnimationFrame for smoother transition
    requestAnimationFrame(() => {
      setIsDark(!isDark);
      
      // Reset transitioning state after animation
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    });
  };

  return (
    <>
      {/* Add global CSS for smooth transitions */}
      <style jsx global>{`
        * {
          transition: var(--theme-transition, none) !important;
        }
        
        html {
          transition: background-color 0.3s ease, color 0.3s ease !important;
        }
        
        body {
          transition: background-color 0.3s ease, color 0.3s ease !important;
        }
        
        /* Prevent layout shift during transition */
        .theme-transitioning * {
          transition-property: background-color, border-color, color, fill, stroke !important;
          transition-duration: 0.15s !important;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
      `}</style>

      <button
        onClick={toggleTheme}
        disabled={isTransitioning}
        className={`
          fixed bottom-4 left-4 p-2 rounded-lg shadow-lg z-50
          bg-white dark:bg-gray-800 
          text-gray-700 dark:text-gray-200
          border border-gray-200 dark:border-gray-600
          hover:bg-gray-50 dark:hover:bg-gray-700
          hover:shadow-xl hover:scale-105
          active:scale-95
          transition-all duration-200 ease-out
          ${isTransitioning ? 'pointer-events-none opacity-75' : ''}
        `}
        aria-label="Toggle theme"
      >
        <div className="relative w-4 h-4">
          {/* Sun icon */}
          <svg
            className={`
              absolute inset-0 w-4 h-4 transition-all duration-300 ease-in-out
              ${isDark 
                ? 'rotate-90 scale-0 opacity-0' 
                : 'rotate-0 scale-100 opacity-100'
              }
            `}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>

          {/* Moon icon */}
          <svg
            className={`
              absolute inset-0 w-4 h-4 transition-all duration-300 ease-in-out
              ${isDark 
                ? 'rotate-0 scale-100 opacity-100' 
                : '-rotate-90 scale-0 opacity-0'
              }
            `}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
          </svg>
        </div>
      </button>
    </>
  );
};

export default ThemeToggle;