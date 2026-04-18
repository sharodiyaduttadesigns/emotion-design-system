import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import DownloadButton from './components/atoms/DownloadButton'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <h1>Emotion Design System — Demo</h1>
        <p style={{ marginBottom: 20 }}>A minimal demo page showing the `DownloadButton` atom.</p>
        <DownloadButton href="/" download="sample.txt">Download sample</DownloadButton>
      </main>
    </>
  )
}

export default App
