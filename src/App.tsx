import { Routes, Route } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import Layout from './components/Layout'
import Home from './pages/Home'
import Components from './pages/Components'
import ComponentDetail from './pages/ComponentDetail'
import Documentation from './pages/Documentation'
import Releases from './pages/Releases'
import './App.css'

export default function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/:id" element={<ComponentDetail />} />
          <Route path="/documentation" element={<Documentation />} />
          <Route path="/releases" element={<Releases />} />
        </Route>
      </Routes>
    </ThemeProvider>
  )
}
