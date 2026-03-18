export type QuizState = 'idle' | 'correct' | 'incorrect'

export interface QuizOption {
  id: string
  text: string
}

export interface HintItem {
  emoji: string
  text: string
}

export interface ExplanationItem {
  emoji: string
  text: string
}

