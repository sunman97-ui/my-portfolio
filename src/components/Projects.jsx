import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
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
  const [isExpanded, setIsExpanded] = useState(false)
  const Icon = project.status === 'private' ? projectIcons.lock : (project.status === 'coming-soon' ? projectIcons.clock : projectIcons.github)

  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      custom={index + 2}
      whileHover={{ rotateY: 5, scale: 1.1, y: -8, boxShadow: 'var(--shadow-lg)' }}
      whileFocus={{ rotateY: 5, scale: 1.1, y: -8, boxShadow: 'var(--shadow-lg)' }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="project-card"
    >
      <div className="project-image">
        {project.images ? (
          <picture>
            <source media="(max-width: 640px)" srcSet={project.images.small} />
            <source media="(max-width: 1024px)" srcSet={project.images.medium} />
            <img
              src={project.images.large}
              alt={project.images.alt}
              loading="lazy"
              onLoad={(e) => e.target.setAttribute('data-loaded', 'true')}
            />
          </picture>
        ) : (
          <Icon className="project-placeholder-icon" />
        )}
      </div>

      <div className="project-content">
        <p className="project-tagline">{project.tagline}</p>
        <h3 className="project-title">{project.title}</h3>

        <button onClick={() => setIsExpanded(!isExpanded)} className="project-toggle-btn">
          {isExpanded ? 'Show Less' : 'Read More'}
        </button>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="project-description-wrapper"
              >
                <p className="project-description">{project.description}</p>

                <div className="project-highlights">
                  <p className="project-highlights-title">Highlights</p>
                  <ul className="project-highlights-list">
                    {project.highlights.map((item, idx) => (
                      <li key={idx} className="project-highlight-item">{item}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

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
            className="btn btn-outline project-link"
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
          <p className="badge">
            Projects
          </p>
          <h2 className="section-title">
            Things I have <span>built</span>
          </h2>
          <p className="section-subtitle">
            A selection of projects spanning machine learning, desktop tooling, and manufacturing software. More in progress.
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
