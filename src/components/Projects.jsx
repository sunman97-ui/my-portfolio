import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiLock, FiClock } from 'react-icons/fi'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' }
  })
}

const projects = [
  {
    id: 1,
    title: 'Machinome',
    tagline: 'ML system for machining parameter prediction',
    description:
      'A production-grade machine learning platform that predicts optimal cutting speed and feed per tooth based on material, tooling, and machine context. Built to solve a real problem encountered repeatedly on the shop floor — inconsistent parameters that cost time, tooling, and quality.',
    highlights: [
      'XGBoost pipeline with MLflow experiment tracking and model versioning',
      'FastAPI backend with fail-fast model loading and structured prediction responses',
      'PostgreSQL schema with SQLAlchemy ORM and full infrastructure layer separation',
      'Docker and Docker Compose for reproducible local and production environments',
      'Domain-driven design with clean separation across API, core, domain, and infrastructure layers',
    ],
    tags: ['Python', 'FastAPI', 'XGBoost', 'PostgreSQL', 'Docker', 'MLflow', 'Scikit-learn'],
    status: 'private',
    featured: true,
  },
  {
    id: 2,
    title: 'DiskLens',
    tagline: 'High-performance disk analyser and cleanup utility',
    description:
      'A Windows desktop application that gives users a clear visual picture of what is consuming their disk space — and the tools to safely reclaim it. Built with Python and Tkinter, it features an interactive treemap, duplicate file detection, and safe deletion via the system Recycle Bin.',
    highlights: [
      'Interactive treemap visualisation powered by squarify for intuitive disk usage exploration',
      'Multi-threaded scanner using ThreadPoolExecutor for high-performance directory traversal',
      'Duplicate finder with smart filename normalisation to catch renamed copies',
      'Safety-first design with a hardcoded blocklist preventing accidental system file modification',
      'Full CI/CD pipeline via GitHub Actions with conventional commits driving automated versioning',
    ],
    tags: ['Python', 'Tkinter', 'Matplotlib', 'GitHub Actions', 'Ruff', 'Mypy'],
    status: 'public',
    github: 'https://github.com/sunman97-ui/disklens',
    featured: false,
  },
  {
    id: 3,
    title: 'Coming Soon',
    tagline: 'Next project in progress',
    description: 'Another project is currently being prepared for showcase. Check back soon or follow the GitHub profile for updates.',
    tags: [],
    status: 'soon',
    featured: false,
  },
  {
    id: 4,
    title: 'Coming Soon',
    tagline: 'Next project in progress',
    description: 'Another project is currently being prepared for showcase. Check back soon or follow the GitHub profile for updates.',
    tags: [],
    status: 'soon',
    featured: false,
  },
]

function TagPill({ label }) {
  return (
    <span style={{
      display: 'inline-block',
      padding: '4px 12px',
      borderRadius: '999px',
      fontSize: '0.78rem',
      fontWeight: '500',
      backgroundColor: '#EFF6FF',
      color: 'var(--accent)',
      border: '1px solid #BFDBFE',
    }}>
      {label}
    </span>
  )
}

function ProjectCard({ project, index, isInView }) {
  const isSoon = project.status === 'soon'
  const isPrivate = project.status === 'private'
  const isFeatured = project.featured

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={index + 2}
      style={{
        backgroundColor: 'var(--bg)',
        border: isFeatured ? '2px solid var(--accent)' : '1px solid var(--border)',
        borderRadius: 'var(--radius)',
        padding: '32px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        boxShadow: isFeatured ? '0 8px 32px rgba(37,99,235,0.12)' : 'var(--shadow)',
        opacity: isSoon ? 0.55 : 1,
        position: 'relative',
        transition: 'var(--transition)',
      }}
      onMouseEnter={e => {
        if (!isSoon) {
          e.currentTarget.style.transform = 'translateY(-4px)'
          e.currentTarget.style.boxShadow = '0 12px 40px rgba(37,99,235,0.15)'
        }
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0)'
        e.currentTarget.style.boxShadow = isFeatured
          ? '0 8px 32px rgba(37,99,235,0.12)'
          : 'var(--shadow)'
      }}
    >
      {/* Featured Badge */}
      {isFeatured && (
        <div style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          backgroundColor: 'var(--accent)',
          color: '#ffffff',
          fontSize: '0.72rem',
          fontWeight: '700',
          padding: '4px 10px',
          borderRadius: '999px',
          letterSpacing: '0.5px',
          textTransform: 'uppercase',
        }}>
          Featured
        </div>
      )}

      {/* Status Icon */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        color: isSoon ? 'var(--text-secondary)' : isPrivate ? 'var(--text-secondary)' : 'var(--accent)',
        fontSize: '0.82rem',
        fontWeight: '600',
      }}>
        {isSoon && <FiClock />}
        {isPrivate && <FiLock />}
        {!isSoon && !isPrivate && <FiGithub />}
        <span>
          {isSoon ? 'Coming Soon' : isPrivate ? 'Private Repository' : 'Open Source'}
        </span>
      </div>

      {/* Title and Tagline */}
      <div>
        <h3 style={{
          fontSize: '1.15rem',
          fontWeight: '700',
          color: isSoon ? 'var(--text-secondary)' : 'var(--text-primary)',
          marginBottom: '6px',
        }}>
          {project.title}
        </h3>
        <p style={{
          fontSize: '0.9rem',
          color: 'var(--accent)',
          fontWeight: '500',
        }}>
          {project.tagline}
        </p>
      </div>

      {/* Description */}
      <p style={{
        fontSize: '0.92rem',
        color: 'var(--text-secondary)',
        lineHeight: '1.75',
      }}>
        {project.description}
      </p>

      {/* Highlights */}
      {project.highlights && (
        <ul style={{
          paddingLeft: '18px',
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
          margin: '0',
        }}>
          {project.highlights.map((point, i) => (
            <li key={i} style={{
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              lineHeight: '1.65',
            }}>
              {point}
            </li>
          ))}
        </ul>
      )}

      {/* Tags */}
      {project.tags.length > 0 && (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '4px',
        }}>
          {project.tags.map(tag => (
            <TagPill key={tag} label={tag} />
          ))}
        </div>
      )}

      {/* Footer — GitHub Link or Private Notice */}
      {!isSoon && (
        <div style={{ marginTop: 'auto', paddingTop: '8px' }}>
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
              style={{ fontSize: '0.88rem', padding: '9px 20px' }}
            >
              <FiGithub /> View on GitHub
            </a>
          ) : (
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '9px 20px',
              borderRadius: '8px',
              border: '1px solid var(--border)',
              fontSize: '0.88rem',
              color: 'var(--text-secondary)',
              fontWeight: '500',
            }}>
              <FiLock />
              Available on request
            </div>
          )}
        </div>
      )}
    </motion.div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section id="projects" className="section section-alt" ref={ref}>
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
            Projects
          </p>
          <h2 className="section-title">
            Things I have <span>built</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects spanning machine learning, desktop tooling,
            and manufacturing software. More in progress.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
        }}>
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              isInView={isInView}
            />
          ))}
        </div>

      </div>
    </section>
  )
}