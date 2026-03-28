import { footer, footerIcons as FooterIcons } from '../data/footer'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        {/* Top Row */}
        <div className="footer-top">

          {/* Brand */}
          <div className="footer-brand">
            <p className="footer-brand-name">
              {footer.brand.first} <span>{footer.brand.last}</span>
            </p>
            <p className="footer-brand-tagline">
              {footer.tagline}
            </p>
          </div>

          {/* Social Links */}
          <div className="footer-socials">
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
              className="btn btn-primary footer-back-to-top"
              title="Back to top"
            >
              <FooterIcons.arrowUp />
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="footer-divider" />

        {/* Bottom Row */}
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            {footer.copyright.year} {footer.copyright.name}. {footer.copyright.tech}
          </p>
          <p className="footer-bottom-text">
            {footer.copyright.by}
          </p>
        </div>

      </div>
    </footer>
  )
}
