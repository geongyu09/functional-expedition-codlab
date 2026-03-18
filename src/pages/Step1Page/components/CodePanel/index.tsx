import { Highlight, themes } from 'prism-react-renderer'
import { FileCodeIcon } from '../icons'
import './CodePanel.css'

interface CodePanelProps {
  filename: string
  code: string
  language?: string
}

function CodePanel({ filename, code, language = 'javascript' }: CodePanelProps) {
  return (
    <div className="code-panel">
      <div className="code-panel__header">
        <FileCodeIcon color="#8B949E" />
        <span className="code-panel__filename">{filename}</span>
      </div>
      <div className="code-panel__body">
        <Highlight theme={themes.vsDark} code={code} language={language}>
          {({ tokens, getLineProps, getTokenProps }) =>
            tokens.map((line, lineIndex) => (
              <div key={lineIndex} {...getLineProps({ line })} className="code-panel__line">
                <span className="code-panel__line-number">{lineIndex + 1}</span>
                <span className="code-panel__line-text">
                  {line.map((token, tokenIndex) => (
                    <span key={tokenIndex} {...getTokenProps({ token })} />
                  ))}
                </span>
              </div>
            ))
          }
        </Highlight>
      </div>
    </div>
  )
}

export default CodePanel
