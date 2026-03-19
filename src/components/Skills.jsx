import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiTool, FiCode } from 'react-icons/fi'

const manufacturingSkills = [
  'G-Code', 'Multi-Axis CNC (3-6 Axis)', 'Mastercam', 'FeatureCAM',
  'PowerMill', 'Fusion 360', 'Heidenhain', 'Hurco', 'Mazak',
  'Fixturing Design', 'GD&T', 'Lean Principles', 'SPC', 'Metrology',
]

const softwareSkills = [
  'Python', 'FastAPI', 'PostgreSQL', 'SQLite', 'React', 'XGBoost',
  'Scikit-learn', 'Docker', 'MLflow', 'Supabase', 'Git / GitHub',
  'LLM Integration (RAG)', 'G-Code Parsing', 'REST APIs', 'Tkinter',
  'CLI Tools', 'Prompt Engineering', 'Pandas',
]

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
      style={{
        display: 'inline-block',
        padding: '7px 16px',
        borderRadius: '999px',
        fontSize: '0.85rem',
        fontWeight: '500',
        backgroundColor: '#EFF6FF',
        color: 'var(--accent)',
        border: '1px solid #BFDBFE',
        transition: 'var(--transition)',
        cursor: 'default',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.backgroundColor = 'var(--accent)'
        e.currentTarget.style.color = '#ffffff'
        e.currentTarget.style.borderColor = 'var(--accent)'
      }}
      onMouseLeave={e => {
        e.currentTarget.style.backgroundColor = '#EFF6FF'
        e.currentTarget.style.color = 'var(--accent)'
        e.currentTarget.style.borderColor = '#BFDBFE'
      }}
    >
      {label}
    </motion.span>
  )
}

function SkillGroup({ icon, title, subtitle, skills, animationDelay, isInView }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={animationDelay}
      style={{
        flex: '1',
        minWidth: '280px',
        backgroundColor: 'var(--bg)',
        borderRadius: 'var(--radius)',
        border: '1px solid var(--border)',
        padding: '36px',
        boxShadow: 'var(--shadow)',
      }}
    >
      {/* Card Header */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '14px',
        marginBottom: '10px',
      }}>
        <div style={{
          width: '44px',
          height: '44px',
          borderRadius: '12px',
          backgroundColor: '#EFF6FF',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--accent)',
          fontSize: '1.2rem',
        }}>
          {icon}
        </div>
        <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)' }}>{title}</h3>
      </div>

      <p style={{
        fontSize: '0.88rem',
        color: 'var(--text-secondary)',
        marginBottom: '24px',
        lineHeight: '1.6',
      }}>
        {subtitle}
      </p>

      {/* Skill Tags */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
      }}>
        {skills.map((skill, i) => (
          <SkillTag key={skill} label={skill} index={i} />
        ))}
      </div>
    </motion.div>
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
          <p style={{
            color: 'var(--accent)',
            fontWeight: '600',
            fontSize: '0.9rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            Skills
          </p>
          <h2 className="section-title">
            Two disciplines, <span>one mindset</span>
          </h2>
          <p className="section-subtitle">
            A decade of precision manufacturing meets modern software engineering.
            Each side makes the other sharper.
          </p>
        </motion.div>

        {/* Skill Groups */}
        <div style={{
          display: 'flex',
          gap: '28px',
          flexWrap: 'wrap',
        }}>
          <SkillGroup
            icon={<FiTool />}
            title="Manufacturing and CNC"
            subtitle="Ten years across defence, oil and gas, and medical — programming and operating multi-axis machines where precision is non-negotiable."
            skills={manufacturingSkills}
            animationDelay={2}
            isInView={isInView}
          />
          <SkillGroup
            icon={<FiCode />}
            title="Software and Development"
            subtitle="Building production-grade tooling, ML systems, and web applications — with manufacturing domain knowledge baked in from the start."
            skills={softwareSkills}
            animationDelay={3}
            isInView={isInView}
          />
        </div>

      </div>
    </section>
  )
}