import { footer, footerIcons } from '../data/footer'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer style={{
      backgroundColor: 'var(--text-primary)',
      color: '#ffffff',
      padding: '48px 24px 32px',
    }}>
      <div className="container" style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
      }}>

        {/* Top Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}>

          {/* Brand */}
          <div className="footer-brand">
            <p style={{ fontSize: '1.1rem', fontWeight: '700', color: '#ffffff', marginBottom: '6px' }}>
              {footer.brand.first} <span style={{ color: 'var(--accent)' }}>{footer.brand.last}</span>
            </p>
            <p style={{ fontSize: '0.85rem', color: '#94A3B8', maxWidth: '280px', lineHeight: '1.6' }}>
              {footer.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            {footer.socials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
              >
                <social.icon />
              </a>
            ))}

            {/* Back to Top */}
            <button
              onClick={scrollToTop}
              className="btn btn-primary"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                padding: '0',
                justifyContent: 'center',
                fontSize: '1.1rem',
              }}
              title="Back to top"
            >
              <footerIcons.arrowUp />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: '1px', backgroundColor: 'rgba(255,255,255,0.08)' }} />

        {/* Bottom Row */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '0.82rem', color: '#64748B' }}>
            {footer.copyright.year} {footer.copyright.name}. {footer.copyright.tech}
          </p>
          <p style={{ fontSize: '0.82rem', color: '#64748B' }}>
            {footer.copyright.by}
          </p>
        </div>

      </div>
    </footer>
  )
}
