import React, { useState } from 'react';

const projects = [
  {
    title: 'To-Do List App',
    desc: 'A full-featured task manager with add, delete, complete features. Built with React useState and localStorage.',
    tech: ['React', 'CSS', 'localStorage'],
    emoji: '✅',
    color: '#6366f1',
    github: '#',
    live: '#',
  },
  {
    title: 'Weather Forecasting App',
    desc: 'Real-time weather app using OpenWeatherMap API. Shows temperature, humidity, and 5-day forecast.',
    tech: ['React', 'API', 'CSS'],
    emoji: '🌤️',
    color: '#06b6d4',
    github: '#',
    live: '#',
  },
  {
    title: 'Calculator App',
    desc: 'A clean scientific calculator with all basic and advanced operations built with vanilla JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    emoji: '🧮',
    color: '#10b981',
    github: '#',
    live: '#',
  },
  {
    title: 'Product Cart',
    desc: 'E-commerce cart with add/remove items, quantity control, and dynamic total price calculation.',
    tech: ['React', 'Context API', 'CSS'],
    emoji: '🛒',
    color: '#f59e0b',
    github: '#',
    live: '#',
  },
  {
    title: 'Image Slider',
    desc: 'Auto-playing image carousel with manual controls, smooth transitions, and dot navigation.',
    tech: ['React', 'CSS Animations'],
    emoji: '🖼️',
    color: '#ec4899',
    github: '#',
    live: '#',
  },
  {
    title: 'Portfolio Website',
    desc: 'This responsive portfolio website built with React and React Router for seamless navigation.',
    tech: ['React', 'React Router', 'CSS'],
    emoji: '💼',
    color: '#8b5cf6',
    github: '#',
    live: '#',
  },
];

function Projects() {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="page-section projects-section">
      <div className="section-header">
        <h2 className="section-title">My <span>Projects</span></h2>
        <div className="title-line"></div>
        <p className="section-subtitle">Things I've built</p>
      </div>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div
            className={`project-card ${hovered === i ? 'hovered' : ''}`}
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{ '--accent': proj.color }}
          >
            <div className="project-emoji">{proj.emoji}</div>
            <h3 className="project-title">{proj.title}</h3>
            <p className="project-desc">{proj.desc}</p>
            <div className="project-techs">
              {proj.tech.map((t, j) => (
                <span className="tech-badge" key={j}>{t}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={proj.github} className="proj-link">GitHub →</a>
              <a href={proj.live} className="proj-link live">Live Demo ↗</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;