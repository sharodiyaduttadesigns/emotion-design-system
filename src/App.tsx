import { useState } from 'react'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton'
import Badge from './components/atoms/badge'
import Avatar from './components/atoms/Avatar'
import Alert from './components/atoms/Alert'

function App() {
  const [searchQuery, setSearchQuery] = useState('')

  const components = [
    {
      id: 'badge',
      name: 'Badge',
      description: 'Small, interactive labels to highlight status or category information with multiple variants.',
      preview: (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
          <Badge label="Default" />
          <Badge label="Success" variant="success" />
          <Badge label="Warning" variant="warning" />
          <Badge label="Error" variant="error" />
        </div>
      ),
    },
    {
      id: 'avatar',
      name: 'Avatar',
      description: 'Display user profile pictures or initials in various sizes.',
      preview: (
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          <Avatar initials="JD" size="sm" />
          <Avatar initials="AB" size="md" />
          <Avatar initials="XY" size="lg" />
        </div>
      ),
    },
    {
      id: 'alert',
      name: 'Alert',
      description: 'Communicate important messages, warnings, errors, or success states to users.',
      preview: (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
          <Alert message="This is an info alert" type="info" />
          <Alert message="This is a success alert" type="success" />
          <Alert message="This is an error alert" type="error" />
        </div>
      ),
    },
    {
      id: 'button',
      name: 'Download Button',
      description: 'Action button for downloads and primary user interactions with icon support.',
      preview: (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DownloadButton href="/" download="sample.txt">Download sample</DownloadButton>
        </div>
      ),
    },
  ]

  const filteredComponents = components.filter((comp) => {
    const query = searchQuery.toLowerCase()
    return comp.name.toLowerCase().includes(query) || comp.description.toLowerCase().includes(query)
  })

  const handleNavClick = (id: string) => {
    setSearchQuery('')
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-container">
      {/* Header */}
      <header className="app-header">
        <div className="header-content">
          <h1 className="header-title">Emotion Design System</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search components..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
              aria-label="Search components"
            />
            <svg className="search-icon" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </header>

      <div className="main-layout">
        {/* Sidebar Navigation */}
        <aside className="sidebar">
          <nav className="nav-menu">
            <div className="nav-section">
              <p className="nav-label">Components</p>
              <ul className="nav-list">
                {components.map((comp) => (
                  <li key={comp.id}>
                    <button
                      className={`nav-link ${searchQuery === '' ? '' : 'filtered'}`}
                      onClick={() => handleNavClick(comp.id)}
                    >
                      {comp.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="main-content">
          {/* Hero Section */}
          <section className="hero-section">
            <h2 className="hero-title">Components</h2>
            <p className="hero-subtitle">
              {filteredComponents.length} {filteredComponents.length === 1 ? 'component' : 'components'} available
            </p>
            <p className="hero-description">
              A comprehensive set of reusable, accessible components built with React and styled with CSS variables.
            </p>
          </section>

          {/* Component Cards */}
          <section className="components-grid">
            {filteredComponents.length > 0 ? (
              filteredComponents.map((comp) => (
                <article key={comp.id} id={comp.id} className="component-card">
                  <div className="card-header">
                    <h3 className="card-title">{comp.name}</h3>
                  </div>
                  <p className="card-description">{comp.description}</p>
                  <div className="card-preview">{comp.preview}</div>
                </article>
              ))
            ) : (
              <div className="no-results">
                <p>No components found matching "{searchQuery}"</p>
              </div>
            )}
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
