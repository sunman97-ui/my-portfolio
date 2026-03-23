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
            My <span>technical toolkit</span>
          </h2>
          <p className="section-subtitle">
            A diverse range of skills spanning the physical workshop and the digital workspace.
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
              <h3 style={{ fontSize: '1.2rem' }}>Software & Systems</h3>
            </div>
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
