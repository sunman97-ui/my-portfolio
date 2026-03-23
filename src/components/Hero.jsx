import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import AvatarSVG from '../assets/avatar.svg?react'
import { hero } from '../data/hero'

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
    <section id="hero" className="hero-section" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'var(--bg)',
      paddingTop: '68px',
    }}>
      <div className="container" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '60px',
        flexWrap: 'wrap',
      }}>

        {/* Left — Text */}
        <div className="hero-content" style={{ flex: '1', minWidth: '280px', maxWidth: '600px' }}>
          
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="badge"
            style={{ marginBottom: '24px' }}
          >
            <span className="badge-dot" />
            {hero.status}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            style={{ marginBottom: '8px' }}
          >
            {hero.greeting}{' '}
            <span style={{ color: 'var(--accent)' }}>{hero.name}</span>
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
            {hero.role}
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
            {hero.description}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '48px' }}
          >
            {hero.ctas.map((cta, index) => (
              <Link key={index} to={cta.to} smooth={true} duration={500} offset={-68}>
                <button className={`btn ${cta.primary ? 'btn-primary' : 'btn-outline'}`}>
                  {cta.label}
                </button>
              </Link>
            ))}
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            style={{ display: 'flex', alignItems: 'center', gap: '20px' }}
          >
            <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '500' }}>
              {hero.socials[0].label}
            </span>
            {hero.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: '1.4rem',
                  transition: 'var(--transition)',
                }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
                onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
              >
                <social.icon />
              </a>
            ))}
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
            border: '4px solid var(--accent-light)',
            boxShadow: '0 8px 40px rgba(37, 99, 235, 0.15)',
            backgroundColor: 'var(--accent-light)',
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
