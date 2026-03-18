import { CODE_BLOCKS, FULL_FUNCTION_SEGMENTS } from '../../data'
import './FullCodeView.css'

interface FullCodeViewProps {
  matchedMap: Record<number, number>
  draggedBlockId: number | null
  onDragStart: (blockId: number, e: React.DragEvent) => void
  onDragEnd: () => void
}

function FullCodeView({ matchedMap, draggedBlockId, onDragStart, onDragEnd }: FullCodeViewProps) {
  const matchedBlockIds = new Set(Object.values(matchedMap))

  const renderSegment = (segment: (typeof FULL_FUNCTION_SEGMENTS)[number]) => {
    if (segment.type === 'static') {
      return (
        <span key={segment.id} className="full-code-view__static">
          {segment.code}
        </span>
      )
    }

    const block = CODE_BLOCKS.find((b) => b.id === segment.blockId)
    if (block === undefined) return null

    const isUsed = matchedBlockIds.has(block.id)
    const isDragging = draggedBlockId === block.id

    const classNames = [
      'full-code-view__block',
      isDragging ? 'full-code-view__block--dragging' : '',
      isUsed ? 'full-code-view__block--used' : '',
    ]
      .filter(Boolean)
      .join(' ')

    return (
      <span
        key={segment.id}
        className={classNames}
        draggable={!isUsed}
        onDragStart={isUsed ? undefined : (e) => onDragStart(block.id, e)}
        onDragEnd={isUsed ? undefined : onDragEnd}
      >
        {block.code}
      </span>
    )
  }

  return (
    <div className="full-code-view">
      <pre className="full-code-view__pre">
        {FULL_FUNCTION_SEGMENTS.map((segment) => renderSegment(segment))}
      </pre>
    </div>
  )
}

export default FullCodeView
