import { Highlight, themes } from 'prism-react-renderer'
import { FileCodeIcon } from '../icons'
import './CodePanel.css'

export interface HighlightGroup {
  start: number
  end: number
  color: string
}

interface CodePanelProps {
  filename: string
  code: string
  language?: string
  highlights?: HighlightGroup[]
}

function CodePanel({ filename, code, language = 'javascript', highlights = [] }: CodePanelProps) {
  return (
    <div className="code-panel">
      <div className="code-panel__header">
        <FileCodeIcon color="#8B949E" />
        <span className="code-panel__filename">{filename}</span>
      </div>
      <div className="code-panel__body">
        <Highlight theme={themes.vsDark} code={code} language={language}>
          {({ tokens, getLineProps, getTokenProps }) =>
            tokens.map((line, lineIndex) => {
              const lineNumber = lineIndex + 1;
              const activeHighlight = highlights.find(
                (h) => lineNumber >= h.start && lineNumber <= h.end
              );
              
              const lineProps = getLineProps({ line });
              const mergedStyle = activeHighlight
                ? { ...lineProps.style, backgroundColor: activeHighlight.color }
                : lineProps.style;

              return (
                <div 
                  key={lineIndex} 
                  {...lineProps} 
                  className={`code-panel__line ${lineProps.className || ''}`}
                  style={mergedStyle}
                >
                  <span className="code-panel__line-number">{lineNumber}</span>
                  <span className="code-panel__line-text">
                    {line.map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              );
            })
          }
        </Highlight>
      </div>
    </div>
  )
}

export default CodePanel
