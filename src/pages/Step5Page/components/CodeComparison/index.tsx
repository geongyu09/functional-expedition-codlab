import CodePanel from '../../../../components/CodePanel'
import { BEFORE_CODE, AFTER_CODE } from '../../data'
import './CodeComparison.css'

function CodeComparison() {
  return (
    <div className="code-comparison">
      <div className="code-comparison__panel">
        <h3 className="code-comparison__title">Before: 리팩터링 전</h3>
        <CodePanel filename="processOrder.js" code={BEFORE_CODE} />
      </div>
      <div className="code-comparison__panel">
        <h3 className="code-comparison__title">After: 리팩터링 후</h3>
        <CodePanel filename="processOrder.js" code={AFTER_CODE} />
      </div>
    </div>
  )
}

export default CodeComparison
