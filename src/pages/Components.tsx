import { useState } from 'react'
import { Link } from 'react-router-dom'
import { COMPONENTS } from '../data/components'

export default function Components() {
  const [activeTabs, setActiveTabs] = useState<Record<string, 'preview' | 'props'>>({})

  const getTab = (id: string) => activeTabs[id] ?? 'preview'
  const setTab = (id: string, tab: 'preview' | 'props') =>
    setActiveTabs((prev) => ({ ...prev, [id]: tab }))

  return (
    <main className="main-content">
      <section className="hero-section">
        <h2 className="hero-title">Components</h2>
        <p className="hero-subtitle">{COMPONENTS.length} components available</p>
        <p className="hero-description">
          A set of reusable, accessible atoms built with React — each with live prop controls you can play with below.
        </p>
      </section>

      <section className="components-grid">
        {COMPONENTS.map((comp) => {
          const tab = getTab(comp.id)
          return (
            <article key={comp.id} id={comp.id} className="component-card">
              <div className="card-accent-bar" />
              <div className="card-header">
                <div className="card-title-row">
                  <Link to={`/components/${comp.id}`} className="card-title-link">
                    <h3 className="card-title">{comp.name}</h3>
                  </Link>
                  <span className="card-type-pill">atom</span>
                </div>
                <div className="card-tabs">
                  <button className={`card-tab ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab(comp.id, 'preview')}>Preview</button>
                  <button className={`card-tab ${tab === 'props' ? 'active' : ''}`} onClick={() => setTab(comp.id, 'props')}>Props</button>
                </div>
              </div>
              <p className="card-description">{comp.description}</p>
              <div className="card-preview">
                {tab === 'preview' ? comp.preview : <comp.Playground />}
              </div>
            </article>
          )
        })}
      </section>
    </main>
  )
}
