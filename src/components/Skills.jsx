import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiTool, FiCode } from 'react-icons/fi'
import { manufacturingSkills, softwareSkills } from '../data/skills'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' }
  })
}

function SkillTag({ label, index }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.04, duration: 0.3, ease: 'easeOut' }}
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className="skill-tag"
    >
      {label}
    </motion.span>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
        >
          <p className="badge" style={{ marginBottom: '8px', textTransform: 'uppercase' }}>
            Skills
          </p>
          <h2 className="section-title">
          Two disciplines, <span>One mindset.</span>
          </h2>
          <p className="section-subtitle">
            A decade of precision manufacturing meets modern software engineering. Each side makes the other sharper.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
        }}>

          {/* Manufacturing */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            className="info-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div className="info-icon-box">
                <FiTool />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>Manufacturing & CNC</h3>  
            </div>
            <p style={{ marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Ten years across defence, oil and gas, and medical — programming and operating multi-axis machines where precision is non-negotiable.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {manufacturingSkills.map((skill, idx) => (
                <SkillTag key={skill} label={skill} index={idx} />
              ))}
            </div>
          </motion.div>

          {/* Software */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={3}
            className="info-card"
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '24px' }}>
              <div className="info-icon-box">
                <FiCode />
              </div>
              <h3 style={{ fontSize: '1.2rem' }}>Software & Development</h3>
            </div>
            <p style={{ marginBottom: '24px', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
              Building production-grade tooling, ML systems, and web applications — with manufacturing domain knowledge baked in from the start.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {softwareSkills.map((skill, idx) => (
                <SkillTag key={skill} label={skill} index={idx} />
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
