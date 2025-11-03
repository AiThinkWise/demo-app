import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Workflow from './pages/Workflow'
import Scoring from './pages/Scoring'
import Dashboard from './pages/Dashboard'
import About from './pages/About'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/scoring" element={<Scoring />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Layout>
  )
}

export default App

