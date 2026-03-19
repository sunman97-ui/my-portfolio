import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FiGithub, FiLinkedin } from 'react-icons/fi'
import AvatarSVG from '../assets/avatar.svg?react'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' }
  })
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'var(--bg)',
        paddingTop: '68px',
      }}
    >
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        flexWrap: 'wrap',
      }}>

        {/* Left — Text */}
        <div style={{ flex: '1', minWidth: '280px', maxWidth: '600px' }}>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              backgroundColor: '#EFF6FF',
              color: 'var(--accent)',
              padding: '6px 14px',
              borderRadius: '999px',
              fontSize: '0.85rem',
              fontWeight: '600',
              marginBottom: '24px',
              letterSpacing: '0.3px',
            }}
          >
            <span style={{
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent)',
              display: 'inline-block'
            }} />
            Open to opportunities
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{ marginBottom: '8px' }}
          >
            Hi, I am{' '}
            <span style={{ color: 'var(--accent)' }}>John Spencer</span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            style={{
              fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)',
              fontWeight: '500',
              color: 'var(--text-secondary)',
              marginBottom: '24px',
            }}
          >
            CNC Programmer and Software Developer
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            style={{
              fontSize: '1.05rem',
              color: 'var(--text-secondary)',
              marginBottom: '40px',
              maxWidth: '480px',
              lineHeight: '1.8',
            }}
          >
            I bridge the gap between precision manufacturing and modern software,
            building tools, automations, and applications that solve real-world
            problems in both worlds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '48px'
            }}
          >
            <Link to="projects" smooth={true} duration={500} offset={-68}>
              <button className="btn btn-primary">View My Work</button>
            </Link>
            <Link to="contact" smooth={true} duration={500} offset={-68}>
              <button className="btn btn-outline">Get In Touch</button>
            </Link>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px'
            }}
          >
            <span style={{
              fontSize: '0.85rem',
              color: 'var(--text-secondary)',
              fontWeight: '500'
            }}>
              Find me on
            </span>
            <a
              href="https://github.com/sunman97-ui"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.4rem',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <FiGithub />
            </a>
            <a
              href="https://linkedin.com/in/john-s-30b2841b3"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--text-secondary)',
                fontSize: '1.4rem',
                transition: 'var(--transition)',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
            >
              <FiLinkedin />
            </a>
          </motion.div>
        </div>

        {/* Right — Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7, ease: 'easeOut' }}
          style={{
            flex: '0 0 auto',
            width: 'clamp(220px, 30vw, 320px)',
            height: 'clamp(220px, 30vw, 320px)',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '4px solid #EFF6FF',
            boxShadow: '0 8px 40px rgba(37, 99, 235, 0.15)',
            backgroundColor: '#EFF6FF',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <AvatarSVG style={{ width: '85%', height: '85%' }} />
        </motion.div>

      </div>
    </section>
  )
}