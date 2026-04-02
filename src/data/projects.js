import { FiGithub, FiLock, FiClock, FiExternalLink } from 'react-icons/fi'

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
    category: 'Engineering & CAD',
    status: 'private',
    featured: true,
    images: {
      small: '/assets/projects/project1-small.webp',
      medium: '/assets/projects/project1-medium.webp',
      large: '/assets/projects/project1-large.webp',
      alt: 'Screenshot of Machinome ML platform dashboard showing parameter predictions'
    }
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
    category: 'Systems & Tools',
    status: 'public',
    github: 'https://github.com/sunman97-ui/disklens',
    featured: false,
    images: {
      small: '/assets/projects/project2-small.webp',
      medium: '/assets/projects/project2-medium.webp',
      large: '/assets/projects/project2-large.webp',
      alt: 'Screenshot of DiskLens application showing disk usage treemap visualization'
    }
  },
  {
    id: 3,
    title: 'LLM Template Workbench API',
    tagline: 'FastAPI Backend + React Frontend platform for AI interactions with multiple providers',
    description: 'This project is an "AI Workbench API" built with FastAPI, designed to facilitate interactions with multiple AI providers (e.g., OpenAI, Anthropic, Gemini, Perplexity, xAI, Groq) through a structured prompt template system. It supports user authentication, prompt execution, file processing, caching, and output generation (text, JSON, images). The core focus is on reusable prompt templates that define tasks, allowing users to input variables (e.g., text, files) and generate AI responses via a web API. The application emphasizes security (JWT-based auth), caching for performance, and extensibility across providers.',
    highlights: [
      'FastAPI backend with endpoints for user auth, prompt generation, history, and file handling',
      'Modular architecture with logic handler, provider strategies, and template management',
      'Supports multiple AI providers with strategy pattern for API-specific logic',
      'Prompt template system with variables, examples, and validation for flexible tasks',
      'Caching via SQLite for performance, database with PostgreSQL for history',
      'File processing for PDFs, DOCX, images; output in text, JSON, images',
    ],
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'JWT', 'SQLAlchemy', 'Pydantic', 'Caching', 'LLM', 'React'],
    category: 'LLM Software',
    status: 'private',
    featured: false,
    images: {
      small: '/assets/projects/project3-small.webp',
      medium: '/assets/projects/project3-medium.webp',
      large: '/assets/projects/project3-large.webp',
      alt: 'Screenshot of AI Workbench API interface showing prompt template configuration'
    }
  },
  {
    id: 4,
    title: 'CADM Version Control',
    tagline: 'Configuration Management (CM) system for CAD data',
    description: 'A simulation of high-stakes configuration management practices used in enterprise PLM systems. It integrates FreeCAD with a SQLAlchemy-backed audit engine to enforce product baselines, manage change requests, and perform physical configuration audits (PCA) for engineering data.',
    highlights: [
      'Physical Configuration Audit (PCA) engine with SQLAlchemy ORM to validate CAD metadata',
      'Custom FreeCAD integration via Python macros to extract mass, revision, and geometry snapshots',
      'Change Request (CR) workflow with role-stamping (created_by/approved_by) for authorized evolution',
      'CLI developed with Typer and Rich providing human-readable audit trails and lifecycle management',
      'Document register system linking drawings and specifications to ensure multi-layer compliance',
    ],
    tags: ['Python', 'SQLAlchemy', 'FreeCAD', 'Typer', 'Rich', 'SQLite', 'Configuration Management'],
    category: 'Engineering & CAD',
    status: 'public',
    github: 'https://github.com/sunman97-ui/CADM-Project',
    featured: true,
    images: {
      small: '/assets/projects/project4-small.webp',
      medium: '/assets/projects/project4-medium.webp',
      large: '/assets/projects/project4-large.webp',
      alt: 'CADM Version Control Interface and Audit Reports'
    }
  },
  // Prompt Library is an external marketplace hosted on Netlify, so it remains featured while the CTA points to the live site.
  {
    id: 5,
    title: 'Prompt Library',
    tagline: 'Precision-engineered marketplace for production-validated LLM prompt templates',
    description: 'A comprehensive React/Vite storefront integrated with Netlify serverless functions and a Supabase-backed catalog/storage pipeline. It facilitates the discovery, sale, and secure delivery of LLM prompt templates through a modular architecture supporting both free and paid downloads with Stripe integration and automated email delivery via Resend.',
    highlights: [
      'React + Vite frontend with custom hooks for fetching and caching Supabase template data via Netlify Functions',
      'Serverless backend architecture using Netlify Functions for checkout, webhooks, and secure file delivery',
      'Supabase integration for a canonical template catalog, storage buckets, and row-level security (RLS)',
      'Stripe API integration for secure payment processing and automated checkout sessions',
      'Secure download system using single-use tokens and automated email delivery via Resend',
      'Automated migration scripts to synchronize local metadata snapshots with the live Supabase database',
    ],
    tags: ['React', 'Vite', 'Netlify Functions', 'Supabase', 'Stripe', 'Resend', 'Node.js', 'LLM', 'Prompt Engineering'],
    category: 'LLM Software',
    status: 'private',
    url: 'https://prompts.johnspencer.dev',
    featured: true,
    images: {
      small: '/assets/projects/project5-small.webp',
      medium: '/assets/projects/project5-medium.webp',
      large: '/assets/projects/project5-large.webp',
      alt: 'Screenshot of the Prompt Library marketplace showing LLM template listings'
    }
  }
]

export const projectIcons = {
  github: FiGithub,
  lock: FiLock,
  clock: FiClock,
  external: FiExternalLink,
}

