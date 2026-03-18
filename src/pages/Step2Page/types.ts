export interface CodeBlock {
  id: number
  code: string
  matchesSignatureId: number
  isExpression: boolean
}

export interface FunctionSignature {
  id: number
  signature: string
  functionName: string
}

export type DropZoneState = 'idle' | 'hover' | 'matched'

export type CodeSegment =
  | { id: string; type: 'static'; code: string }
  | { id: string; type: 'block'; blockId: number }
