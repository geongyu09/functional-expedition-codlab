import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Step1Page from './pages/Step1Page'
import Step2Page from './pages/Step2Page'
import Step3Page from './pages/Step3Page'
import Step4Page from './pages/Step4Page'
import Step5Page from './pages/Step5Page'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/step1" element={<Step1Page />} />
      <Route path="/step2" element={<Step2Page />} />
      <Route path="/step3" element={<Step3Page />} />
      <Route path="/step4" element={<Step4Page />} />
      <Route path="/step5" element={<Step5Page />} />
    </Routes>
  )
}

export default App
