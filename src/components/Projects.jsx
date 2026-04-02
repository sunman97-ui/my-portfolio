import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState, useMemo } from 'react'
import { FiStar } from 'react-icons/fi'
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
      layout
      whileHover={{ y: -8, boxShadow: 'var(--shadow-lg)' }}
      className="project-card"
    >
      <div className="project-image">
        {project.featured && (
          <div className="project-badge" title="Featured Project">
            <FiStar />
          </div>
        )}
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

        <AnimatePresence initial={false}>
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
  const [filter, setFilter] = useState('Featured')

  const categories = useMemo(() => {
    const cats = ['Featured', 'All', ...new Set(projects.map(p => p.category))]
    return cats
  }, [])

  const filteredProjects = useMemo(() => {
    if (filter === 'Featured') return projects.filter(p => p.featured)
    if (filter === 'All') return projects
    return projects.filter(p => p.category === filter)
  }, [filter])

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
            Creative <span>Engineering</span>
          </h2>
          <p className="section-subtitle">
            A selection of solo projects spanning machine learning, desktop tooling, and manufacturing software. More are in the works — stay tuned!
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          className="filter-bar"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={2}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`filter-btn ${filter === cat ? 'active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="projects-grid">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                index={index} 
                isInView={isInView} 
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  )
}
