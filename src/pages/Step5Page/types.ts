export interface Node {
  id: string
  name: string
  layer: number
  x: number
  y?: number
}

export interface Link {
  source: string
  target: string
}
