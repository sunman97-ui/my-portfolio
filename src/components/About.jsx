import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCode, FiTool, FiArrowRight } from 'react-icons/fi'
import { Link } from 'react-scroll'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' }
  })
}

function StatCard({ icon, value, label }) {
  return (
    <div style={{
      backgroundColor: 'var(--bg)',
      border: '1px solid var(--border)',
      borderRadius: 'var(--radius)',
      padding: '24px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      boxShadow: 'var(--shadow)',
      flex: '1',
      minWidth: '120px',
    }}>
      <span style={{ color: 'var(--accent)', fontSize: '1.4rem' }}>{icon}</span>
      <span style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--text-primary)' }}>{value}</span>
      <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textAlign: 'center', fontWeight: '500' }}>{label}</span>
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
          <p style={{
            color: 'var(--accent)',
            fontWeight: '600',
            fontSize: '0.9rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            About Me
          </p>
          <h2 className="section-title">
            Manufacturer who learned to <span>build software</span>
          </h2>
          <p className="section-subtitle">
            Ten years of shop floor instinct, combined with modern software engineering.
          </p>
        </motion.div>

        {/* Main Content */}
        <div style={{
          display: 'flex',
          gap: '64px',
          alignItems: 'flex-start',
          flexWrap: 'wrap',
        }}>

          {/* Left — Text Blocks */}
          <div style={{ flex: '1', minWidth: '280px' }}>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={2}
              style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '32px',
                alignItems: 'flex-start',
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                minWidth: '40px',
                borderRadius: '10px',
                backgroundColor: '#EFF6FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontSize: '1.1rem',
                marginTop: '4px',
              }}>
                <FiTool />
              </div>
              <div>
                <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>The Story</h3>
                <p style={{ lineHeight: '1.85' }}>
                  I have spent ten years on real shop floors — defence, oil and gas, medical —
                  programming and operating multi-axis CNC machines in environments where getting
                  it wrong simply is not an option. That background gives you a particular way of
                  thinking about problems: precise, systematic, and always asking why something
                  takes longer than it should.
                </p>
                <p style={{ lineHeight: '1.85', marginTop: '12px' }}>
                  About a year ago I started writing code as a hobby, building tools to scratch
                  my own itches. I quickly realised that software logic and CNC logic are not
                  that different — both are about breaking a complex problem into clean, reliable
                  steps. I turned out to have a knack for it.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={3}
              style={{
                display: 'flex',
                gap: '16px',
                marginBottom: '32px',
                alignItems: 'flex-start',
              }}
            >
              <div style={{
                width: '40px',
                height: '40px',
                minWidth: '40px',
                borderRadius: '10px',
                backgroundColor: '#EFF6FF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--accent)',
                fontSize: '1.1rem',
                marginTop: '4px',
              }}>
                <FiCode />
              </div>
              <div>
                <h3 style={{ marginBottom: '10px', color: 'var(--text-primary)' }}>What I Build</h3>
                <p style={{ lineHeight: '1.85' }}>
                  Today I work at the intersection of manufacturing and software. My flagship
                  project, Machinome, is an ML system that predicts optimal machining parameters
                  using XGBoost, FastAPI, and PostgreSQL — built because inconsistent cutting
                  data costs real money on real machines. Alongside that I build Python tooling,
                  automation scripts, G-code utilities, LLM integrations, and web applications.
                </p>
                <p style={{ lineHeight: '1.85', marginTop: '12px', fontWeight: '600', color: 'var(--text-primary)' }}>
                  I am not a developer who learned about manufacturing. I am a manufacturer
                  who learned to build software — and that difference matters.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              custom={4}
            >
              <p style={{ lineHeight: '1.85', color: 'var(--text-secondary)', marginBottom: '24px' }}>
                I am currently open to opportunities in forward-thinking manufacturing companies,
                Industry 4.0 focused startups, or any team that wants someone who genuinely
                understands both sides of the problem.
              </p>
              <Link to="contact" smooth={true} duration={500} offset={-68}>
                <button className="btn btn-primary" style={{ gap: '10px' }}>
                  Get In Touch <FiArrowRight />
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
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              minWidth: '200px',
              width: '220px',
            }}
          >
            <StatCard icon={<FiTool />} value="10+" label="Years in CNC & Manufacturing" />
            <StatCard icon={<FiCode />} value="1+" label="Years Building Software" />
            <StatCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                </svg>
              }
              value="3"
              label="Industries — Defence, Oil and Gas, Medical"
            />
            <StatCard
              icon={
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
                </svg>
              }
              value="ML"
              label="XGBoost, FastAPI, LLM Integration"
            />
          </motion.div>

        </div>
      </div>
    </section>
  )
}