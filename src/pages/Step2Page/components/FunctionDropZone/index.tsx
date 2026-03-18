import type { FunctionSignature, CodeBlock, DropZoneState } from '../../types'
import CompletedFunction from '../CompletedFunction'
import './FunctionDropZone.css'

interface FunctionDropZoneProps {
  signature: FunctionSignature
  matchedBlock: CodeBlock | null
  state: DropZoneState
  isFailed: boolean
  onDrop: (signatureId: number, e: React.DragEvent) => void
  onDragOver: (signatureId: number, e: React.DragEvent) => void
  onDragLeave: (signatureId: number, e: React.DragEvent) => void
}

function FunctionDropZone({
  signature,
  matchedBlock,
  state,
  isFailed,
  onDrop,
  onDragOver,
  onDragLeave,
}: FunctionDropZoneProps) {
  const classNames = [
    'function-drop-zone',
    `function-drop-zone--${state}`,
    isFailed ? 'function-drop-zone--failed' : '',
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      className={classNames}
      onDrop={(e) => onDrop(signature.id, e)}
      onDragOver={(e) => onDragOver(signature.id, e)}
      onDragLeave={(e) => onDragLeave(signature.id, e)}
    >
      <div className="function-drop-zone__signature">
        <span className="function-drop-zone__keyword">function</span>{' '}
        <span className="function-drop-zone__name">{signature.signature}</span>
        {' {'}
      </div>
      {state === 'matched' && matchedBlock ? (
        <CompletedFunction signature={signature} block={matchedBlock} />
      ) : (
        <div className="function-drop-zone__placeholder">
          {state === 'hover' ? '여기에 놓으세요' : '코드 블록을 드래그하여 놓으세요'}
        </div>
      )}
      <div className="function-drop-zone__closing">{'}'}</div>
    </div>
  )
}

export default FunctionDropZone
