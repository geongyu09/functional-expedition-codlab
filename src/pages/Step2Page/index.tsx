import { useNavigate } from 'react-router-dom'
import StepHeader from '../Step1Page/components/StepHeader'
import FullCodeView from './components/FullCodeView'
import FunctionDropZone from './components/FunctionDropZone'
import useDragAndDrop from './hooks/useDragAndDrop'
import { CODE_BLOCKS, FUNCTION_SIGNATURES } from './data'
import type { DropZoneState } from './types'
import './Step2Page.css'

function Step2Page() {
  const navigate = useNavigate()
  const {
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
  } = useDragAndDrop()

  const getDropZoneState = (signatureId: number): DropZoneState => {
    if (matchedMap[signatureId] !== undefined) return 'matched'
    if (hoveredZoneId === signatureId) return 'hover'
    return 'idle'
  }

  return (
    <main className="step2-page">
      <StepHeader step={2} title="코드 블록을 함수로 추출하기" />
      <div className="step2-page__body">
        <div className="step2-page__left-panel">
          <p className="step2-page__left-panel-title">processOrder 함수</p>
          <FullCodeView
            matchedMap={matchedMap}
            draggedBlockId={draggedBlockId}
            isAllMatched={isAllMatched}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
          />
        </div>
        <div className="step2-page__divider" />
        <div className="step2-page__right-panel">
          <p className="step2-page__right-panel-title">함수 시그니처</p>
          {isAllMatched && (
            <div className="step2-page__complete-banner">
              <p>모든 함수를 완성했습니다! 액션에서 계산을 성공적으로 추출했어요.</p>
              <button className="step2-page__next-button" onClick={() => navigate('/step3')}>
                다음 단계 →
              </button>
            </div>
          )}
          {FUNCTION_SIGNATURES.map((signature) => {
            const matchedBlockId = matchedMap[signature.id]
            const matchedBlock = matchedBlockId !== undefined
              ? CODE_BLOCKS.find((b) => b.id === matchedBlockId) ?? null
              : null

            return (
              <FunctionDropZone
                key={signature.id}
                signature={signature}
                matchedBlock={matchedBlock}
                state={getDropZoneState(signature.id)}
                isFailed={failedZoneId === signature.id}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}

export default Step2Page
