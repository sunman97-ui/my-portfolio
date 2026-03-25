import { FiMail, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi'

export const contact = {
  badge: 'Contact',
  title: {
    prefix: 'Let\'s ' , 
    span: 'work together',
  },
  subtitle: 'Whether you have a project in mind, a role to discuss, or just want to connect — feel free to reach out. I will get back to you promptly.',
  info: [
    {
      icon: FiMail,
      title: 'Email',
      description: 'Use the form and I will respond directly from my professional address.',
    },
    {
      type: 'cv',
      title: 'Requesting my CV?',
      description: 'Tick the CV request box on the form. I will review your message and follow up directly with my full CV and any relevant details.',
    },
    {
      type: 'open-to',
      title: 'Open to',
      items: [
        'Full-time roles',
        'Contract and freelance work',
        'Industry 4.0 and manufacturing tech',
        'Interesting collaborations',
      ],
    },
  ],
  form: {
    labels: {
      name: 'Your Name',
      email: 'Email Address',
      message: 'Message',
      cv: 'I would like to request a copy of your CV',
    },
    placeholders: {
      name: 'Jane Smith',
      email: 'jane@company.com',
      message: 'Tell me about your project, role, or what you have in mind...',
      cvSub: 'I will follow up directly with my full CV and any relevant details.',
    },
    submit: 'Send Message',
    sending: 'Sending...',
  },
  status: {
    success: {
      title: 'Message sent',
      message: 'Thanks for reaching out. I will be in touch shortly.',
      button: 'Send another message',
    },
    error: 'Something went wrong. Please try again or check your connection.',
  },
}

export const contactIcons = {
  mail: FiMail,
  send: FiSend,
  check: FiCheck,
  alert: FiAlertCircle,
}
