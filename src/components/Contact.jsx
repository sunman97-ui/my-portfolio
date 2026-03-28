import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { contact, contactIcons as ContactIcons } from '../data/contact'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: 'easeOut' }
  })
}

const ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    requestCV: false,
  })

  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          cv_requested: formData.requestCV ? 'Yes' : 'No',
        }),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '', requestCV: false })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section" ref={ref}>
      <div className="container">

        {/* Section Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          custom={1}
        >
          <p className="badge">
            {contact.badge}
          </p>
          <h2 className="section-title">
            {contact.title.prefix}<span>{contact.title.span}</span>
          </h2>
          <p className="section-subtitle">
            {contact.subtitle}
          </p>
        </motion.div>

        {/* Content Row */}
        <div className="contact-layout">

          {/* Left — Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            className="contact-side contact-info"
          >
            <div className="contact-info-stack">
              {contact.info.map((item, idx) => (
                <div key={idx} className={`info-card ${item.icon ? '' : (item.type === 'cv' ? 'info-card-accent' : 'info-card-secondary')}`}>
                  {item.icon ? (
                    <div className="info-card-row">
                      <div className="info-icon-box">
                        <item.icon />
                      </div>
                      <div>
                        <p className="info-card-title">{item.title}</p>
                        <p className="info-card-text">{item.description}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="info-card-body">
                      <p className={`info-card-title ${item.type === 'cv' ? 'info-card-title-accent' : ''}`}>
                        {item.title}
                      </p>
                      {item.description && (
                        <p className="info-card-text info-card-text-secondary">
                          {item.description}
                        </p>
                      )}
                      {item.items && (
                        <ul className="info-card-list">
                          {item.items.map(listItem => (
                            <li key={listItem}>{listItem}</li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={3}
            className="contact-side contact-form"
          >
            {status === 'success' ? (
              <div className="status-msg status-msg-success">
                <div className="status-msg-icon-success">
                  <ContactIcons.check />
                </div>
                <h3 className="status-msg-title">{contact.status.success.title}</h3>
                <p className="status-msg-copy">
                  {contact.status.success.message}
                </p>
                <button
                  className="btn btn-outline form-reset"
                  onClick={() => setStatus('idle')}
                >
                  {contact.status.success.button}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-container">
                {/* Name and Email Row */}
                <div className="form-grid">
                  <div className="form-group">
                    <label className="form-label" htmlFor="name">{contact.form.labels.name}</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder={contact.form.placeholders.name}
                      value={formData.name}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="email">{contact.form.labels.email}</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder={contact.form.placeholders.email}
                      value={formData.email}
                      onChange={handleChange}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="form-group">
                  <label className="form-label" htmlFor="message">{contact.form.labels.message}</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder={contact.form.placeholders.message}
                    value={formData.message}
                    onChange={handleChange}
                    className="form-input form-textarea"
                  />
                </div>

                {/* CV Checkbox */}
                <label className={`form-checkbox-container ${formData.requestCV ? 'active' : ''}`}>
                  <input
                    type="checkbox"
                    name="requestCV"
                    checked={formData.requestCV}
                    onChange={handleChange}
                    className="form-checkbox"
                  />
                  <div className="form-checkbox-content">
                    <p className="form-checkbox-title">{contact.form.labels.cv}</p>
                    <p className="form-checkbox-sub">{contact.form.placeholders.cvSub}</p>
                  </div>
                </label>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="status-msg-error">
                    <ContactIcons.alert />
                    {contact.status.error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary form-submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? contact.form.sending : (
                    <>
                      {contact.form.submit} <ContactIcons.send />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
