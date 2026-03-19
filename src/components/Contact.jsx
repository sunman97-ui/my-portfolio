import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { FiMail, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'

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

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    fontSize: '0.95rem',
    fontFamily: 'Inter, sans-serif',
    color: 'var(--text-primary)',
    backgroundColor: 'var(--bg)',
    outline: 'none',
    transition: 'var(--transition)',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '0.88rem',
    fontWeight: '600',
    color: 'var(--text-primary)',
    marginBottom: '8px',
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
          <p style={{
            color: 'var(--accent)',
            fontWeight: '600',
            fontSize: '0.9rem',
            letterSpacing: '1px',
            textTransform: 'uppercase',
            marginBottom: '8px',
          }}>
            Contact
          </p>
          <h2 className="section-title">
            Let us <span>work together</span>
          </h2>
          <p className="section-subtitle">
            Whether you have a project in mind, a role to discuss, or just want
            to connect — feel free to reach out. I will get back to you promptly.
          </p>
        </motion.div>

        {/* Content Row */}
        <div style={{
          display: 'flex',
          gap: '64px',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
        }}>

          {/* Left — Info */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
            style={{ flex: '1', minWidth: '240px', maxWidth: '340px' }}
          >
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '24px',
            }}>

              <div style={{
                display: 'flex',
                alignItems: 'flex-start',
                gap: '16px',
              }}>
                <div style={{
                  width: '44px',
                  height: '44px',
                  minWidth: '44px',
                  borderRadius: '12px',
                  backgroundColor: '#EFF6FF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  fontSize: '1.1rem',
                }}>
                  <FiMail />
                </div>
                <div>
                  <p style={{
                    fontWeight: '600',
                    color: 'var(--text-primary)',
                    fontSize: '0.95rem',
                    marginBottom: '4px',
                  }}>
                    Email
                  </p>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>
                    Use the form and I will respond directly from my professional address.
                  </p>
                </div>
              </div>

              <div style={{
                padding: '20px',
                borderRadius: 'var(--radius)',
                backgroundColor: '#EFF6FF',
                border: '1px solid #BFDBFE',
              }}>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--accent)',
                  fontWeight: '600',
                  marginBottom: '6px',
                }}>
                  Requesting my CV?
                </p>
                <p style={{
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                  lineHeight: '1.7',
                }}>
                  Tick the CV request box on the form. I will review your message
                  and follow up directly with my full CV and any relevant details.
                </p>
              </div>

              <div style={{
                padding: '20px',
                borderRadius: 'var(--radius)',
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border)',
              }}>
                <p style={{
                  fontSize: '0.88rem',
                  color: 'var(--text-primary)',
                  fontWeight: '600',
                  marginBottom: '6px',
                }}>
                  Open to
                </p>
                <ul style={{
                  paddingLeft: '16px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '4px',
                }}>
                  {[
                    'Full-time roles',
                    'Contract and freelance work',
                    'Industry 4.0 and manufacturing tech',
                    'Interesting collaborations',
                  ].map(item => (
                    <li key={item} style={{
                      fontSize: '0.85rem',
                      color: 'var(--text-secondary)',
                      lineHeight: '1.6',
                    }}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

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
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '16px',
                padding: '60px 40px',
                borderRadius: 'var(--radius)',
                border: '1px solid #BBF7D0',
                backgroundColor: '#F0FDF4',
                textAlign: 'center',
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '50%',
                  backgroundColor: '#22C55E',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  fontSize: '1.5rem',
                }}>
                  <FiCheck />
                </div>
                <h3 style={{ color: '#15803D', fontSize: '1.1rem' }}>Message sent</h3>
                <p style={{ color: '#166534', fontSize: '0.9rem', maxWidth: '300px' }}>
                  Thanks for reaching out. I will be in touch shortly.
                </p>
                <button
                  className="btn btn-outline"
                  onClick={() => setStatus('idle')}
                  style={{ marginTop: '8px', fontSize: '0.88rem' }}
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                  backgroundColor: 'var(--bg)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius)',
                  padding: '36px',
                  boxShadow: 'var(--shadow)',
                }}
              >
                {/* Name and Email Row */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                  gap: '20px',
                }}>
                  <div>
                    <label style={labelStyle} htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="Jane Smith"
                      value={formData.name}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                      onBlur={e => e.target.style.borderColor = 'var(--border)'}
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={labelStyle} htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me about your project, role, or what you have in mind..."
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                      ...inputStyle,
                      resize: 'vertical',
                      lineHeight: '1.7',
                    }}
                    onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                    onBlur={e => e.target.style.borderColor = 'var(--border)'}
                  />
                </div>

                {/* CV Checkbox */}
                <label style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                  cursor: 'pointer',
                  padding: '16px',
                  borderRadius: '8px',
                  border: formData.requestCV ? '1px solid var(--accent)' : '1px solid var(--border)',
                  backgroundColor: formData.requestCV ? '#EFF6FF' : 'transparent',
                  transition: 'var(--transition)',
                }}>
                  <input
                    type="checkbox"
                    name="requestCV"
                    checked={formData.requestCV}
                    onChange={handleChange}
                    style={{
                      width: '18px',
                      height: '18px',
                      accentColor: 'var(--accent)',
                      marginTop: '2px',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  />
                  <div>
                    <p style={{
                      fontWeight: '600',
                      fontSize: '0.9rem',
                      color: 'var(--text-primary)',
                      marginBottom: '2px',
                    }}>
                      I would like to request a copy of your CV
                    </p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                      I will follow up directly with my full CV and any relevant details.
                    </p>
                  </div>
                </label>

                {/* Error Message */}
                {status === 'error' && (
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 16px',
                    borderRadius: '8px',
                    backgroundColor: '#FEF2F2',
                    border: '1px solid #FECACA',
                    color: '#DC2626',
                    fontSize: '0.88rem',
                  }}>
                    <FiAlertCircle />
                    Something went wrong. Please try again or check your connection.
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={status === 'sending'}
                  style={{
                    justifyContent: 'center',
                    gap: '10px',
                    opacity: status === 'sending' ? 0.7 : 1,
                    cursor: status === 'sending' ? 'not-allowed' : 'pointer',
                  }}
                >
                  {status === 'sending' ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FiSend />
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