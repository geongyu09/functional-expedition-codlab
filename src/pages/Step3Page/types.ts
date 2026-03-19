export type Q1State = 'idle' | 'correct' | 'incorrect'
export type TestState = 'idle' | 'passed' | 'failed'

export interface TestResult {
  passed: boolean
  message: string
}

export interface FullCodeLine {
  lineNumber: number
  content: string
  type: 'normal' | 'highlight' | 'removed' | 'added'
}
