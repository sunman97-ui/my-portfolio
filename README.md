# My Portfolio

A modern, professional portfolio built with React 19 and Vite 8, featuring smooth animations and a responsive design to showcase my technical skills and creative projects.
Feel free to use the project structure as a template which you can tailor to your own profile.

[![React Version](https://img.shields.io/badge/react-19.2.4-blue.svg)](https://react.dev/)
[![Vite Version](https://img.shields.io/badge/vite-8.0.1-646CFF.svg)](https://vitejs.dev/)
[![Animations](https://img.shields.io/badge/framer--motion-12.38.0-ff0055.svg)](https://www.framer.com/motion/)

## ✨ Key Features

- **🚀 Performance-Driven**: Built with Vite 8 for ultra-fast development and optimized production builds.
- **🎨 Modern UI/UX**: Interactive elements and fluid transitions powered by Framer Motion.
- **📱 Fully Responsive**: Seamless experience across mobile, tablet, and desktop devices.
- **🧭 Smooth Navigation**: Intuitive scrolling and section-based layout using `react-scroll`.
- **🛠️ Component-Based**: Modular and maintainable code structure for easy updates and scalability.

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18 or higher) and **npm** installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sunman97-ui/my-portfolio.git
   cd my-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

The contact form is powered by [Formspree](https://formspree.io/). To enable form submissions:

1. Create a new form on Formspree.
2. Create a `.env` file in the root directory (you can use `.env.example` as a template).
3. Add your Formspree endpoint URL:
   ```env
   VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```

### Development

To start the development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Once the server is running, open `http://localhost:5173` in your browser.

### Production

To build the project for production and preview the optimized build:
```bash
npm run build
npm run preview
```

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: Vanilla CSS (modular)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Navigation**: [React Scroll](https://www.npmjs.com/package/react-scroll)

## 📁 Project Structure

```text
src/
├── components/     # Reusable UI components (Hero, Navbar, About, etc.)
├── assets/         # Static assets like images and SVGs
├── App.jsx         # Main application component
└── main.jsx        # Entry point for the React application
```

## 🔗 Contact & Links

- **LinkedIn**: [Connect on LinkedIn](https://linkedin.com/in/john-s-30b2841b3)
- **Prompt Library**: Highlighted through the navbar CTA and a footer mention so the external marketplace (prompts.johnspencer.dev) stays discoverable without disrupting the scroll-driven narrative.

## ⚖️ License

This project is licensed under the [MIT License](LICENSE). Feel free to use it for your own portfolio!
