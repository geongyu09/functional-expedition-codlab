import { FileCodeIcon } from '../icons'
import type { CodeLine } from '../../types'
import './CodePanel.css'

interface CodePanelProps {
  filename: string
  lines: CodeLine[]
}

function CodePanel({ filename, lines }: CodePanelProps) {
  return (
    <div className="code-panel">
      <div className="code-panel__header">
        <FileCodeIcon color="#8B949E" />
        <span className="code-panel__filename">{filename}</span>
      </div>
      <div className="code-panel__body">
        {lines.map((line, index) => (
          <div key={index} className="code-panel__line">
            <span className="code-panel__line-number">{index + 1}</span>
            <span className={`code-panel__line-text code-panel__line-text--${line.color}`}>
              {line.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CodePanel
