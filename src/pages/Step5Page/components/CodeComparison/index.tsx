import CodePanel from '../../../../components/CodePanel'
import './CodeComparison.css'

interface Props {
  beforeCode: string
  afterCode: string
  beforeTitle?: string
  afterTitle?: string
}

function CodeComparison({ beforeCode, afterCode, beforeTitle = 'Before: 리팩터링 전', afterTitle = 'After: 리팩터링 후' }: Props) {
  return (
    <div className="code-comparison">
      <div className="code-comparison__panel">
        <h3 className="code-comparison__title">{beforeTitle}</h3>
        <CodePanel filename="processOrder.js" code={beforeCode} />
      </div>
      <div className="code-comparison__panel">
        <h3 className="code-comparison__title">{afterTitle}</h3>
        <CodePanel filename="processOrder.js" code={afterCode} />
      </div>
    </div>
  )
}

export default CodeComparison
