import { FiGithub, FiLinkedin } from 'react-icons/fi'

export const hero = {
  status: 'Open to opportunities',
  greeting: 'Hi, I am',
  name: 'John Spencer',
  role: 'CNC Programmer and Software Developer',
  description: 'I bridge the gap between precision manufacturing and modern software, building tools, automations, and applications that solve real-world problems in both worlds.',
  ctas: [
    { label: 'View My Work', to: 'projects', primary: true },
    { label: 'Get In Touch', to: 'contact', primary: false },
  ],
  socials: [
    { label: 'Find me on', platform: 'GitHub', url: 'https://github.com/sunman97-ui', icon: FiGithub },
    { label: 'Find me on', platform: 'LinkedIn', url: 'https://linkedin.com/in/john-s-30b2841b3', icon: FiLinkedin },
  ],
}
