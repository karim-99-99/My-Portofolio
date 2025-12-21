import { motion } from 'framer-motion';
import { Brain, Network, Cpu } from 'lucide-react';

const AnimatedSpadeBackground = () => {
  // Neural network nodes positions
  const nodes = [
    { x: 15, y: 20, size: 12 },
    { x: 35, y: 15, size: 10 },
    { x: 55, y: 25, size: 14 },
    { x: 75, y: 20, size: 11 },
    { x: 20, y: 45, size: 13 },
    { x: 45, y: 50, size: 9 },
    { x: 70, y: 45, size: 12 },
    { x: 30, y: 70, size: 10 },
    { x: 60, y: 75, size: 11 },
    { x: 80, y: 70, size: 13 },
  ];

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Neural Network Connections */}
      <svg className="absolute inset-0 w-full h-full opacity-30">
        {nodes.map((node, i) => {
          // Connect each node to nearby nodes
          const connections = nodes
            .map((other, j) => ({ node: other, index: j }))
            .filter((_, j) => j !== i && Math.random() > 0.6)
            .slice(0, 2);
          
          return connections.map((conn, idx) => (
            <motion.line
              key={`line-${i}-${conn.index}-${idx}`}
              x1={`${node.x}%`}
              y1={`${node.y}%`}
              x2={`${conn.node.x}%`}
              y2={`${conn.node.y}%`}
              stroke="rgba(59, 130, 246, 0.4)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.6, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ));
        })}
      </svg>

      {/* Neural Network Nodes */}
      {nodes.map((node, index) => (
        <motion.div
          key={`node-${index}`}
          className="absolute"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)',
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 2 + index * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.2,
          }}
        >
          <div
            className="rounded-full bg-cyan-400"
            style={{
              width: `${node.size}px`,
              height: `${node.size}px`,
              boxShadow: '0 0 20px rgba(59, 130, 246, 0.8), 0 0 40px rgba(59, 130, 246, 0.4)',
            }}
          />
        </motion.div>
      ))}

      {/* AI Brain Icons */}
      {[...Array(3)].map((_, index) => (
        <motion.div
          key={`brain-${index}`}
          className="absolute"
          style={{
            left: `${20 + index * 30}%`,
            top: `${30 + (index % 2) * 40}%`,
          }}
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5,
          }}
        >
          <Brain 
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 text-cyan-400" 
            fill="currentColor" 
            stroke="currentColor" 
            strokeWidth={0.5}
            style={{
              filter: 'drop-shadow(0 0 20px rgba(59, 130, 246, 0.8))',
            }}
          />
        </motion.div>
      ))}

      {/* Network Icons */}
      {[...Array(2)].map((_, index) => (
        <motion.div
          key={`network-${index}`}
          className="absolute"
          style={{
            left: `${60 + index * 20}%`,
            top: `${60 + index * 15}%`,
          }}
          animate={{
            rotate: 360,
            opacity: [0.2, 0.35, 0.2],
          }}
          transition={{
            rotate: {
              duration: 20 + index * 5,
              repeat: Infinity,
              ease: "linear",
            },
            opacity: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            },
          }}
        >
          <Network 
            className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 text-blue-400" 
            stroke="currentColor" 
            strokeWidth={1.5}
            style={{
              filter: 'drop-shadow(0 0 15px rgba(96, 165, 250, 0.6))',
            }}
          />
        </motion.div>
      ))}

      {/* CPU/Processor Icons */}
      {[...Array(2)].map((_, index) => (
        <motion.div
          key={`cpu-${index}`}
          className="absolute"
          style={{
            left: `${15 + index * 70}%`,
            top: `${50 + index * 20}%`,
          }}
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 3 + index,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.7,
          }}
        >
          <Cpu 
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 text-sky-400" 
            fill="currentColor" 
            stroke="currentColor" 
            strokeWidth={1}
            style={{
              filter: 'drop-shadow(0 0 12px rgba(56, 189, 248, 0.7))',
            }}
          />
        </motion.div>
      ))}

      {/* Rotating Glow Orbs - Blue/Cyan Theme */}
      {[...Array(4)].map((_, index) => (
        <motion.div
          key={`glow-${index}`}
          className="absolute rounded-full"
          style={{
            left: `${15 + index * 25}%`,
            top: `${20 + (index % 2) * 40}%`,
            width: '300px',
            height: '300px',
            background: `conic-gradient(from ${index * 90}deg, 
              transparent 0deg,
              transparent 20deg,
              rgba(59, 130, 246, 0.4) 50deg,
              rgba(96, 165, 250, 0.6) 80deg, 
              rgba(56, 189, 248, 0.5) 110deg,
              rgba(96, 165, 250, 0.6) 140deg,
              rgba(59, 130, 246, 0.4) 170deg,
              transparent 200deg,
              transparent 360deg
            )`,
            filter: 'blur(50px)',
            opacity: 0.4,
          }}
          animate={{
            rotate: 360,
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 15 + index * 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}

      {/* Hexagonal Grid Pattern */}
      <svg className="absolute inset-0 w-full h-full opacity-10">
        {[...Array(20)].map((_, i) => {
          const x = (i % 5) * 20 + 10;
          const y = Math.floor(i / 5) * 25 + 15;
          const size = 30;
          const points = Array.from({ length: 6 }, (_, j) => {
            const angle = (Math.PI / 3) * j;
            return `${x + size * Math.cos(angle)},${y + size * Math.sin(angle)}`;
          }).join(' ');
          
          return (
            <motion.polygon
              key={`hex-${i}`}
              points={points}
              fill="none"
              stroke="rgba(59, 130, 246, 0.3)"
              strokeWidth="1"
              animate={{
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 4 + i * 0.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

export default AnimatedSpadeBackground;

