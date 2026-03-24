import { FiTool, FiCode } from 'react-icons/fi'

export const about = {
  badge: 'About Me',
  title: {
    prefix: 'Manufacturer who learned to ',
    span: 'build software',
  },
  subtitle: 'Ten years of shop floor instinct, combined with modern software engineering.',
  story: [
    {
      id: 'story',
      icon: FiTool,
      heading: 'The Story',
      paragraphs: [
        'I have spent ten years on real shop floors — defence, oil and gas, medical — programming and operating multi-axis CNC machines in environments where getting it wrong simply is not an option. That background gives you a particular way of thinking about problems: precise, systematic, and always asking why something takes longer than it should.',
        'About a year ago I started writing code as a hobby, building tools to scratch my own itches. I quickly realised that software logic and CNC logic are not that different — both are about breaking a complex problem into clean, reliable steps. I turned out to have a knack for it.',
      ],
    },
    {
      id: 'build',
      icon: FiCode,
      heading: 'What I Build',
      paragraphs: [
        'Today I work at the intersection of manufacturing and software. My flagship project, Machinome, is an ML system that predicts optimal machining parameters using XGBoost, FastAPI, and PostgreSQL — built because inconsistent cutting data costs real money on real machines. Alongside that I build Python tooling, automation scripts, G-code utilities, LLM integrations, and web applications.',
      ],
      highlight: 'I am not a developer who learned about manufacturing. I am a manufacturer who learned to build software — and that difference matters.',
    },
  ],
  closing: 'I am currently open to opportunities in forward-thinking manufacturing companies, Industry 4.0 focused startups, or any team that wants someone who genuinely understands both sides of the problem.',
  cta: 'Get In Touch',
  stats: [
    { icon: FiTool, value: '10+', label: 'Years in CNC & Manufacturing' },
    { icon: FiCode, value: '1+', label: 'Years Building Software' },
    {
      icon: 'pulse', // Custom SVG in About.jsx
      value: '3',
      label: 'Industries — Defence, Oil and Gas, Medical',
    },
    {
      icon: 'sun', // Custom SVG in About.jsx
      value: 'ML',
      label: 'XGBoost, FastAPI, LLM Integration',
    },
  ],
}
