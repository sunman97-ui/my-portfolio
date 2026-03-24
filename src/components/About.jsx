import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-scroll'
import { about } from '../data/about'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' }
  })
}

function StatCard({ icon, value, label }) {
  const renderIcon = () => {
    if (typeof icon === 'string') {
      if (icon === 'pulse') {
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
          </svg>
        )
      }
      if (icon === 'sun') {
        return (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
          </svg>
        )
      }
    }
    const IconComponent = icon
    return <IconComponent />
  }

  return (
    <div className="stat-card">
      <span className="stat-card-icon">{renderIcon()}</span>
      <span className="stat-card-value">{value}</span>
      <span className="stat-card-label">{label}</span>
    </div>
  )
}

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="about" className="section section-alt" ref={ref}>
      <div className="container">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
        >
          <p className="badge" style={{ marginBottom: '8px', textTransform: 'uppercase' }}>
            {about.badge}
          </p>
          <h2 className="section-title">
            {about.title.prefix}<span>{about.title.span}</span>
          </h2>
          <p className="section-subtitle">
            {about.subtitle}
          </p>
        </motion.div>

        {/* Main Content */}
        <div style={{ display: 'flex', gap: '64px', alignItems: 'flex-start', flexWrap: 'wrap' }}>

          {/* Left — Text Blocks */}
          <div style={{ flex: '1', minWidth: '280px' }}>
            {about.story.map((item, index) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                custom={index + 2}
                style={{ display: 'flex', gap: '16px', marginBottom: '32px', alignItems: 'flex-start' }}
              >
                <div className="info-icon-box" style={{ marginTop: '4px' }}>
                  <item.icon />
                </div>
                <div>
                  <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>{item.heading}</h3>
                  {item.paragraphs.map((p, pIndex) => (
                    <p key={pIndex} style={{ lineHeight: '1.85', marginTop: pIndex > 0 ? '12px' : '0' }}>
                      {p}
                    </p>
                  ))}
                  {item.highlight && (
                    <p style={{ lineHeight: '1.85', marginTop: '12px', fontWeight: '600', color: 'var(--text-primary)' }}>
                      {item.highlight}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={about.story.length + 2}
            >
              <p style={{ lineHeight: '1.85', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                {about.closing}
              </p>
              <Link to="contact" smooth={true} duration={500} offset={-68}>
                <button className="btn btn-primary" style={{ gap: '10px' }}>
                  {about.cta} <FiArrowRight />
                </button>
              </Link>
            </motion.div>
          </div>

          {/* Right — Stat Cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={3}
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', minWidth: '200px', width: '220px' }}
          >
            {about.stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
