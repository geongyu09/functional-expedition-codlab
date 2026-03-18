import './StepHeader.css'

interface StepHeaderProps {
  step: number
  title: string
}

function StepHeader({ step, title }: StepHeaderProps) {
  return (
    <header className="step-header">
      <span className="step-header__badge">Step {step}</span>
      <h1 className="step-header__title">{title}</h1>
    </header>
  )
}

export default StepHeader
