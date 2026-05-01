import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton'
import Badge from './components/atoms/Badge'
import Avatar from './components/atoms/Avatar'
import Alert from './components/atoms/Alert'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1>Emotion Design System — Demo</h1>
        <p style={{ marginBottom: 20 }}>A minimal demo page showing the atom components.</p>
        
        <section style={{ marginBottom: 40, textAlign: 'center' }}>
          <h2>Badge Component</h2>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <Badge label="Default" />
            <Badge label="Success" variant="success" />
            <Badge label="Warning" variant="warning" />
            <Badge label="Error" variant="error" />
          </div>
        </section>

        <section style={{ marginBottom: 40, textAlign: 'center' }}>
          <h2>Avatar Component</h2>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <Avatar initials="JD" size="sm" />
            <Avatar initials="AB" size="md" />
            <Avatar initials="XY" size="lg" />
          </div>
        </section>

        <section style={{ marginBottom: 40, textAlign: 'center' }}>
          <h2>Alert Component</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <Alert message="This is an info alert" type="info" />
            <Alert message="This is a success alert" type="success" />
            <Alert message="This is an error alert" type="error" />
          </div>
        </section>

        <section style={{ marginBottom: 40, textAlign: 'center' }}>
          <h2>Download Button</h2>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <DownloadButton href="/" download="sample.txt">Download sample</DownloadButton>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
