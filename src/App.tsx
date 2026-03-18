import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Step1Page from './pages/Step1Page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/step1" element={<Step1Page />} />
      <Route path="/step2" element={<div style={{ color: '#E6EDF3', padding: '40px', background: '#0D1117', minHeight: '100vh' }}>Step 2 - 준비 중</div>} />
    </Routes>
  )
}

export default App
