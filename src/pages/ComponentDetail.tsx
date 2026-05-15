import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { COMPONENTS } from '../data/components'

export default function ComponentDetail() {
  const { id } = useParams<{ id: string }>()
  const comp = COMPONENTS.find((c) => c.id === id)
  const [tab, setTab] = useState<'preview' | 'props'>('preview')

  if (!comp) return <Navigate to="/components" replace />

  const currentIndex = COMPONENTS.findIndex((c) => c.id === id)
  const prev = COMPONENTS[currentIndex - 1]
  const next = COMPONENTS[currentIndex + 1]

  return (
    <main className="main-content">
      <div className="detail-breadcrumb">
        <Link to="/components" className="breadcrumb-link">← Components</Link>
      </div>

      <section className="hero-section" style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
          <h2 className="hero-title" style={{ margin: 0 }}>{comp.name}</h2>
          <span className="card-type-pill">atom</span>
        </div>
        <p className="hero-description" style={{ margin: 0 }}>{comp.description}</p>
      </section>

      <article className="component-card" style={{ maxWidth: '100%' }}>
        <div className="card-accent-bar" />
        <div className="card-header">
          <div className="card-title-row">
            <h3 className="card-title">{comp.name}</h3>
          </div>
          <div className="card-tabs">
            <button className={`card-tab ${tab === 'preview' ? 'active' : ''}`} onClick={() => setTab('preview')}>Preview</button>
            <button className={`card-tab ${tab === 'props' ? 'active' : ''}`} onClick={() => setTab('props')}>Props</button>
          </div>
        </div>
        <div className="card-preview">
          {tab === 'preview' ? comp.preview : <comp.Playground />}
        </div>
      </article>

      <div className="detail-nav">
        {prev ? (
          <Link to={`/components/${prev.id}`} className="detail-nav-btn">← {prev.name}</Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/components/${next.id}`} className="detail-nav-btn">
            {next.name} →
          </Link>
        ) : (
          <span />
        )}
      </div>
    </main>
  )
}
