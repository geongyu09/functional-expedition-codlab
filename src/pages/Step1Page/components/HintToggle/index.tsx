import { useState } from 'react'
import { ChevronDownIcon } from '../../../../components/Icons'
import { HINTS } from '../../data'
import './HintToggle.css'

function HintToggle() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="hint-toggle">
      <button className="hint-toggle__header" onClick={() => setIsOpen((prev) => !prev)}>
        <span className="hint-toggle__label">힌트 보기</span>
        <span className={`hint-toggle__chevron${isOpen ? ' hint-toggle__chevron--open' : ''}`}>
          <ChevronDownIcon color="#8B949E" />
        </span>
      </button>
      {isOpen && (
        <div className="hint-toggle__content">
          {HINTS.map((hint, index) => (
            <div key={index} className="hint-toggle__item">
              <span className="hint-toggle__item-emoji">{hint.emoji}</span>
              <span className="hint-toggle__item-text">{hint.text}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HintToggle
