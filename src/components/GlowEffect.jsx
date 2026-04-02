import { motion } from 'framer-motion'

const BLOBS = [
  { id: 1, duration: 20, delay: 0, x: [0, 100, -50, 0], y: [0, 50, 100, 0] },
  { id: 2, duration: 25, delay: 2, x: [0, -80, 60, 0], y: [0, 120, -40, 0] },
  { id: 3, duration: 18, delay: 5, x: [0, 40, -60, 0], y: [0, -70, 50, 0] },
]

export default function GlowEffect() {
  return (
    <div className="glow-container">
      {BLOBS.map((blob) => (
        <motion.div
          key={blob.id}
          animate={{
            x: blob.x,
            y: blob.y,
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay: blob.delay,
          }}
          className={`glow-blob glow-blob--${blob.id}`}
        />
      ))}
    </div>
  )
}
