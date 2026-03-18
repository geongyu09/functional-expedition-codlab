import { useState, useMemo, useEffect } from 'react'
import { CODE_BLOCKS, FUNCTION_SIGNATURES } from '../data'

interface UseDragAndDropReturn {
  draggedBlockId: number | null
  matchedMap: Record<number, number>
  hoveredZoneId: number | null
  failedZoneId: number | null
  isAllMatched: boolean
  handleDragStart: (blockId: number, e: React.DragEvent) => void
  handleDragEnd: () => void
  handleDrop: (signatureId: number, e: React.DragEvent) => void
  handleDragOver: (signatureId: number, e: React.DragEvent) => void
  handleDragLeave: (signatureId: number, e: React.DragEvent) => void
}

function useDragAndDrop(): UseDragAndDropReturn {
  const [draggedBlockId, setDraggedBlockId] = useState<number | null>(null)
  const [matchedMap, setMatchedMap] = useState<Record<number, number>>({})
  const [hoveredZoneId, setHoveredZoneId] = useState<number | null>(null)
  const [failedZoneId, setFailedZoneId] = useState<number | null>(null)

  useEffect(() => {
    if (failedZoneId === null) return
    const timer = setTimeout(() => setFailedZoneId(null), 600)
    return () => clearTimeout(timer)
  }, [failedZoneId])

  const isAllMatched = useMemo(
    () => Object.keys(matchedMap).length === FUNCTION_SIGNATURES.length,
    [matchedMap],
  )

  const handleDragStart = (blockId: number, e: React.DragEvent) => {
    setDraggedBlockId(blockId)
    e.dataTransfer.setData('blockId', String(blockId))
  }

  const handleDragEnd = () => {
    setDraggedBlockId(null)
  }

  const handleDrop = (signatureId: number, e: React.DragEvent) => {
    e.preventDefault()
    const blockId = Number(e.dataTransfer.getData('blockId'))
    const block = CODE_BLOCKS.find((b) => b.id === blockId)

    if (!block) return

    if (block.matchesSignatureId === signatureId) {
      setMatchedMap((prev) => {
        if (prev[signatureId] !== undefined) return prev
        return { ...prev, [signatureId]: blockId }
      })
    } else {
      setFailedZoneId(signatureId)
    }

    setHoveredZoneId(null)
    setDraggedBlockId(null)
  }

  const handleDragOver = (signatureId: number, e: React.DragEvent) => {
    e.preventDefault()
    if (hoveredZoneId !== signatureId) {
      setHoveredZoneId(signatureId)
    }
  }

  const handleDragLeave = (signatureId: number, e: React.DragEvent) => {
    const relatedTarget = e.relatedTarget as Node | null
    const currentTarget = e.currentTarget as Node
    if (relatedTarget && currentTarget.contains(relatedTarget)) return
    if (hoveredZoneId === signatureId) {
      setHoveredZoneId(null)
    }
  }

  return {
    draggedBlockId,
    matchedMap,
    hoveredZoneId,
    failedZoneId,
    isAllMatched,
    handleDragStart,
    handleDragEnd,
    handleDrop,
    handleDragOver,
    handleDragLeave,
  }
}

export default useDragAndDrop
