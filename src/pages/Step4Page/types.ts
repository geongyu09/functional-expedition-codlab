export type QuizState = 'idle' | 'correct' | 'incorrect'
export type QuizChoice = 'A' | 'B' | 'C' | 'D'

export interface TestResult {
  passed: boolean
  message: string
}

export interface OrderItem {
  name: string
  price: number
  kcal: number
}
