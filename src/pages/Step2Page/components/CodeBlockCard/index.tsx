import { Highlight, themes } from 'prism-react-renderer'
import type { CodeBlock } from '../../types'
import './CodeBlockCard.css'

interface CodeBlockCardProps {
  block: CodeBlock
  isDragging: boolean
  onDragStart: (blockId: number, e: React.DragEvent) => void
  onDragEnd: () => void
}

function CodeBlockCard({ block, isDragging, onDragStart, onDragEnd }: CodeBlockCardProps) {
  return (
    <div
      className={`code-block-card${isDragging ? ' code-block-card--dragging' : ''}`}
      draggable
      onDragStart={(e) => onDragStart(block.id, e)}
      onDragEnd={onDragEnd}
    >
      <Highlight theme={themes.vsDark} code={block.code} language="javascript">
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="code-block-card__pre">
            {tokens.map((line, lineIndex) => (
              <div key={lineIndex} {...getLineProps({ line })}>
                {line.map((token, tokenIndex) => (
                  <span key={tokenIndex} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default CodeBlockCard
