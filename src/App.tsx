import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Step1Page from './pages/Step1Page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/step1" element={<Step1Page />} />
    </Routes>
  )
}

export default App
