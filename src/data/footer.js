import { FiGithub, FiLinkedin, FiArrowUp } from 'react-icons/fi'

export const footer = {
  brand: {
    first: 'John',
    last: 'Spencer',
  },
  tagline: 'CNC Programmer and Software Developer bridging manufacturing and modern software.',
  socials: [
    { platform: 'GitHub', url: 'https://github.com/sunman97-ui', icon: FiGithub },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/john-s-30b2841b3', icon: FiLinkedin },
  ],
  copyright: {
    year: new Date().getFullYear(),
    name: 'John Spencer',
    tech: 'Built with React and Vite.',
    by: 'Designed and built by John Spencer',
  },
}

export const footerIcons = {
  arrowUp: FiArrowUp,
}
