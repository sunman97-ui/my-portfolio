import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { projects, projectIcons } from '../data/projects'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' }
  })
}

function ProjectCard({ project, index, isInView }) {
  const Icon = project.status === 'private' ? projectIcons.lock : (project.status === 'coming-soon' ? projectIcons.clock : projectIcons.github)

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={index + 2}
      className="project-card"
    >
      <div className="project-image">
        <Icon style={{ fontSize: '3rem', color: 'var(--accent)', opacity: 0.2 }} />
      </div>

      <div className="project-content">
        <p className="project-tagline">{project.tagline}</p>
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div style={{ marginBottom: '20px' }}>
          <p style={{ fontSize: '0.85rem', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '8px' }}>Highlights</p>
          <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
            {project.highlights.map((item, idx) => (
              <li key={idx} style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="project-tags">
          {project.tags.map(tag => (
            <span key={tag} className="project-tag">{tag}</span>
          ))}
        </div>

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline"
            style={{ marginTop: '24px', padding: '10px', justifyContent: 'center', fontSize: '0.85rem' }}
          >
            View on GitHub <projectIcons.github />
          </a>
        )}
      </div>
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
          <p className="badge" style={{ marginBottom: '8px', textTransform: 'uppercase' }}>
            Projects
          </p>
          <h2 className="section-title">
            Featured <span>work</span>
          </h2>
          <p className="section-subtitle">
            A selection of software tools and applications built to solve technical and industrial challenges.
          </p>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} isInView={isInView} />
          ))}
        </div>

      </div>
    </section>
  )
}
