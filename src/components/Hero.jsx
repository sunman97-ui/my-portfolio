import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll'
import { TypeAnimation } from 'react-type-animation'
import AvatarCartoon from '../assets/avatar-cartoon.webp'
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
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, -50])

  return (
    <section id="hero" className="hero-section">
      <div className="hero-inner">

        {/* Left — Text */}
        <div className="hero-content">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="badge hero-status"
          >
            <span className="badge-dot" />
            {hero.status}
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="hero-title"
          >
            {hero.greeting}{' '}
            <span className="hero-title--accent">
              <TypeAnimation
                sequence={[hero.name, 2000]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                speed={50}
              />
            </span>
          </motion.h1>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="hero-role"
          >
            {hero.role}
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="hero-description"
          >
            {hero.description}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={5}
            className="hero-cta-group"
          >
            {hero.ctas.map((cta, index) => (
              <Link key={index} to={cta.to} smooth={true} duration={500} offset={-68}>
                <button className={`btn ${cta.primary ? 'btn-primary' : 'btn-outline'}`}>
                  {cta.label}
                </button>
              </Link>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={6}
            className="hero-socials"
          >
            <span>{hero.socials[0].label}</span>
            {hero.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
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
          style={{ y }}
          className="hero-avatar"
        >
          <img src={AvatarCartoon} alt="Cartoon avatar" className="hero-avatar-img" />
        </motion.div>

      </div>
    </section>
  )
}
