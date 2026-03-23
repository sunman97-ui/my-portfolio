import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { contact, contactIcons } from '../data/contact'

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
          <p className="badge" style={{ marginBottom: '8px', textTransform: 'uppercase' }}>
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
        <div style={{ display: 'flex', gap: '64px', flexWrap: 'wrap', alignItems: 'flex-start' }}>

          {/* Left — Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            style={{ flex: '1', minWidth: '240px', maxWidth: '340px' }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {contact.info.map((item, idx) => (
                <div key={idx} className={`info-card ${item.icon ? '' : (item.type === 'cv' ? 'info-card-accent' : 'info-card-secondary')}`}>
                  {item.icon ? (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                      <div className="info-icon-box">
                        <item.icon />
                      </div>
                      <div>
                        <p style={{ fontWeight: '600', color: 'var(--text-primary)', fontSize: '0.95rem', marginBottom: '4px' }}>
                          {item.title}
                        </p>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                          {item.description}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p style={{
                        fontSize: '0.88rem',
                        color: item.type === 'cv' ? 'var(--accent)' : 'var(--text-primary)',
                        fontWeight: '600',
                        marginBottom: '6px',
                      }}>
                        {item.title}
                      </p>
                      {item.description && (
                        <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.7' }}>
                          {item.description}
                        </p>
                      )}
                      {item.items && (
                        <ul style={{ paddingLeft: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                          {item.items.map(listItem => (
                            <li key={listItem} style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                              {listItem}
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
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
            style={{ flex: '2', minWidth: '280px' }}
          >
            {status === 'success' ? (
              <div className="status-msg status-msg-success">
                <div className="status-msg-icon-success">
                  <contactIcons.check />
                </div>
                <h3 style={{ color: '#15803D', fontSize: '1.1rem' }}>{contact.status.success.title}</h3>
                <p style={{ color: '#166534', fontSize: '0.9rem', maxWidth: '300px' }}>
                  {contact.status.success.message}
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => setStatus('idle')}
                  style={{ marginTop: '8px', fontSize: '0.88rem' }}
                >
                  {contact.status.success.button}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="form-container">
                {/* Name and Email Row */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
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
                    className="form-input"
                    style={{ resize: 'vertical', lineHeight: '1.7' }}
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
                  <div>
                    <p style={{ fontWeight: '600', fontSize: '0.9rem', color: 'var(--text-primary)', marginBottom: '2px' }}>
                      {contact.form.labels.cv}
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      {contact.form.placeholders.cvSub}
                    </p>
                  </div>
                </label>

                {/* Error Message */}
                {status === 'error' && (
                  <div className="status-msg-error">
                    <contactIcons.alert />
                    {contact.status.error}
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{ justifyContent: 'center', gap: '10px', opacity: status === 'sending' ? 0.7 : 1, cursor: status === 'sending' ? 'not-allowed' : 'pointer' }}
                >
                  {status === 'sending' ? contact.form.sending : (
                    <>
                      {contact.form.submit} <contactIcons.send />
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
