import { FiGithub, FiLock, FiClock } from 'react-icons/fi'

export const projects = [
  {
    id: 1,
    title: 'Machinome',
    tagline: 'ML system for machining parameter prediction',
    description:
      'A production-grade machine learning platform that predicts optimal cutting speed and feed per tooth based on material, tooling, and machine context. Built to solve a real problem encountered repeatedly on the shop floor — inconsistent parameters that cost time, tooling, and quality.',
    highlights: [
      'XGBoost pipeline with MLflow experiment tracking and model versioning',
      'FastAPI backend with fail-fast model loading and structured prediction responses',
      'PostgreSQL schema with SQLAlchemy ORM and full infrastructure layer separation',
      'Docker and Docker Compose for reproducible local and production environments',
      'Domain-driven design with clean separation across API, core, domain, and infrastructure layers',
    ],
    tags: ['Python', 'FastAPI', 'XGBoost', 'PostgreSQL', 'Docker', 'MLflow', 'Scikit-learn'],
    status: 'private',
    featured: true,
  },
  {
    id: 2,
    title: 'DiskLens',
    tagline: 'High-performance disk analyser and cleanup utility',
    description:
      'A Windows desktop application that gives users a clear visual picture of what is consuming their disk space — and the tools to safely reclaim it. Built with Python and Tkinter, it features an interactive treemap, duplicate file detection, and safe deletion via the system Recycle Bin.',
    highlights: [
      'Interactive treemap visualisation powered by squarify for intuitive disk usage exploration',
      'Multi-threaded scanner using ThreadPoolExecutor for high-performance directory traversal',
      'Duplicate finder with smart filename normalisation to catch renamed copies',
      'Safety-first design with a hardcoded blocklist preventing accidental system file modification',
      'Full CI/CD pipeline via GitHub Actions with conventional commits driving automated versioning',
    ],
    tags: ['Python', 'Tkinter', 'Matplotlib', 'GitHub Actions', 'Ruff', 'Mypy'],
    status: 'public',
    github: 'https://github.com/sunman97-ui/disklens',
    featured: false,
  },
  {
    id: 3,
    title: 'Precision-Parser',
    tagline: 'Next-generation G-Code static analysis engine',
    description:
      'A robust tool for static analysis and validation of NC programs. It provides deep insights into program structure, tool path semantics, and compliance with shop floor standards before a single chip is cut.',
    highlights: [
      'Complex regex-based parsing engine for diverse NC dialects (Fanuc, Heidenhain, Hurco)',
      'Sub-program and macro expansion logic for accurate toolpath reconstruction',
      'Automated standardisation of feeds, speeds, and coolant commands',
      'Detailed JSON output for integration with downstream manufacturing execution systems',
    ],
    tags: ['Python', 'RegEx', 'Static Analysis', 'Manufacturing Tech'],
    status: 'coming-soon',
    featured: false,
  },
]

export const projectIcons = {
  github: FiGithub,
  lock: FiLock,
  clock: FiClock,
}
