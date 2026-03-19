import { useState } from 'react'
import { INITIAL_CODE, TEST_ITEMS, TEST_PRICE_EXPECTED, TEST_KCAL_EXPECTED } from '../data'
import type { TestResult, QuizState, QuizChoice } from '../types'

const CORRECT_Q2_ANSWER: QuizChoice = 'C'
const CORRECT_Q3_ANSWER: QuizChoice = 'B'

function runUserCode(userCode: string): TestResult {
  try {
    const priceResult: unknown = new Function(`
      ${userCode}
      return sum(${JSON.stringify(TEST_ITEMS)}, 'price');
    `)()

    if (priceResult !== TEST_PRICE_EXPECTED) {
      return {
        passed: false,
        message: `sum(items, 'price') 결과가 다릅니다. 기댓값: ${TEST_PRICE_EXPECTED}, 실제값: ${priceResult}`,
      }
    }

    const kcalResult: unknown = new Function(`
      ${userCode}
      return sum(${JSON.stringify(TEST_ITEMS)}, 'kcal');
    `)()

    if (kcalResult !== TEST_KCAL_EXPECTED) {
      return {
        passed: false,
        message: `sum(items, 'kcal') 결과가 다릅니다. 기댓값: ${TEST_KCAL_EXPECTED}, 실제값: ${kcalResult}`,
      }
    }

    return { passed: true, message: '테스트 통과! sum 함수가 올바르게 동작합니다.' }
  } catch (error) {
    const message =
      error instanceof Error ? error.message : '알 수 없는 오류가 발생했습니다.'
    return { passed: false, message: `오류 발생: ${message}` }
  }
}

interface UseStep4Return {
  code: string
  testResult: TestResult | null
  hintOpen: boolean
  q2Unlocked: boolean
  q2Selected: QuizChoice | null
  q2State: QuizState
  q3Unlocked: boolean
  q3Selected: QuizChoice | null
  q3State: QuizState
  allDone: boolean
  handleCodeChange: (code: string) => void
  handleRunTest: () => void
  handleHintToggle: () => void
  handleQ2Select: (choice: QuizChoice) => void
  handleQ3Select: (choice: QuizChoice) => void
}

function useStep4(): UseStep4Return {
  const [code, setCode] = useState(INITIAL_CODE)
  const [testResult, setTestResult] = useState<TestResult | null>(null)
  const [hintOpen, setHintOpen] = useState(false)
  const [q2Unlocked, setQ2Unlocked] = useState(false)
  const [q2Selected, setQ2Selected] = useState<QuizChoice | null>(null)
  const [q2State, setQ2State] = useState<QuizState>('idle')
  const [q3Unlocked, setQ3Unlocked] = useState(false)
  const [q3Selected, setQ3Selected] = useState<QuizChoice | null>(null)
  const [q3State, setQ3State] = useState<QuizState>('idle')

  const allDone = q3State === 'correct'

  const handleCodeChange = (newCode: string): void => {
    setCode(newCode)
    setTestResult(null)
  }

  const handleRunTest = (): void => {
    const result = runUserCode(code)
    setTestResult(result)
    if (result.passed) {
      setQ2Unlocked(true)
    }
  }

  const handleHintToggle = (): void => {
    setHintOpen((prev) => !prev)
  }

  const handleQ2Select = (choice: QuizChoice): void => {
    if (q2State === 'correct') return
    setQ2Selected(choice)
    if (choice === CORRECT_Q2_ANSWER) {
      setQ2State('correct')
      setQ3Unlocked(true)
    } else {
      setQ2State('incorrect')
    }
  }

  const handleQ3Select = (choice: QuizChoice): void => {
    if (q3State === 'correct') return
    setQ3Selected(choice)
    if (choice === CORRECT_Q3_ANSWER) {
      setQ3State('correct')
    } else {
      setQ3State('incorrect')
    }
  }

  return {
    code,
    testResult,
    hintOpen,
    q2Unlocked,
    q2Selected,
    q2State,
    q3Unlocked,
    q3Selected,
    q3State,
    allDone,
    handleCodeChange,
    handleRunTest,
    handleHintToggle,
    handleQ2Select,
    handleQ3Select,
  }
}

export default useStep4
