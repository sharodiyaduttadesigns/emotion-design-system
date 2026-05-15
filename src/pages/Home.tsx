import { Link } from 'react-router-dom'
import { COMPONENTS } from '../data/components'

export default function Home() {
  return (
    <main className="main-content">
      <section className="home-hero">
        <p className="home-eyebrow">Open-source · React · TypeScript</p>
        <h1 className="home-title">Emotion<br />Design System</h1>
        <p className="home-description">
          A curated set of reusable, accessible atoms built with React — each with live prop controls so you can explore and customize in real time.
        </p>
        <div className="home-cta-row">
          <Link to="/components" className="home-cta-btn">Browse Components</Link>
          <span className="home-cta-count">{COMPONENTS.length} components available</span>
        </div>
      </section>

      <section className="home-stats">
        <div className="stat-card">
          <span className="stat-value">{COMPONENTS.length}</span>
          <span className="stat-label">Components</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">Atoms</span>
          <span className="stat-label">Category</span>
        </div>
        <div className="stat-card">
          <span className="stat-value">100%</span>
          <span className="stat-label">TypeScript</span>
        </div>
      </section>

      <section className="home-component-list-section">
        <h2 className="home-section-title">Components</h2>
        <div className="home-component-list">
          {COMPONENTS.map((comp) => (
            <Link key={comp.id} to={`/components/${comp.id}`} className="home-component-item">
              <div className="home-component-info">
                <span className="home-component-name">{comp.name}</span>
                <span className="home-component-desc">{comp.description}</span>
              </div>
              <span className="home-component-arrow">→</span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
