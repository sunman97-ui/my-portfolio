import { motion } from 'framer-motion'

export default function GlowEffect() {
  return (
    <div className="glow-container">
      {/* Blob 1 */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, 50, 100, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="glow-blob glow-blob--1"
      />
      
      {/* Blob 2 */}
      <motion.div
        animate={{
          x: [0, -80, 60, 0],
          y: [0, 120, -40, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        className="glow-blob glow-blob--2"
      />
      
      {/* Blob 3 */}
      <motion.div
        animate={{
          x: [0, 40, -60, 0],
          y: [0, -70, 50, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5
        }}
        className="glow-blob glow-blob--3"
      />
    </div>
  )
}
