import { useEffect, useRef } from 'react'
import * as d3 from 'd3'
import type { Link } from '../../types'
import { CALL_TREE_NODES, CALL_TREE_LINKS, LAYERS } from '../../data'
import './CallTree.css'

function CallTree() {
  const svgRef = useRef<SVGSVGElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!svgRef.current || !containerRef.current) return

    const svg = d3.select(svgRef.current)
    svg.selectAll('*').remove() // Clear previous content

    const width = containerRef.current.clientWidth

    const nodeWidth = 155
    const nodeHeight = 36
    const layerHeight = 120

    const nodes = CALL_TREE_NODES.map(n => ({ ...n, y: n.layer * layerHeight }))
    const nodeMap: Record<string, (typeof nodes)[0]> = {}
    nodes.forEach(n => (nodeMap[n.id] = n))

    const zoom = d3.zoom<SVGSVGElement, unknown>().on('zoom', (event) => {
      g.attr('transform', event.transform)
    })

    svg.call(zoom)

    // Arrow marker definition
    svg.append('defs').append('marker')
      .attr('id', 'arrow')
      .attr('viewBox', '0 -5 10 10')
      .attr('refX', 8)
      .attr('refY', 0)
      .attr('markerWidth', 6)
      .attr('markerHeight', 6)
      .attr('orient', 'auto')
      .append('path')
      .attr('d', 'M0,-5L10,0L0,5')
      .attr('fill', '#ffffff')

    const g = svg.append('g')

    // Layer background and labels
    const minX = d3.min(nodes, (d) => d.x)! - nodeWidth
    const maxX = d3.max(nodes, (d) => d.x)! + nodeWidth
    const bgWidth = maxX - minX + 400
    const startX = minX - 200

    const layerGroup = g.append('g').attr('class', 'layer-group')

    LAYERS.forEach((layerName, index) => {
      const yPos = index * layerHeight - layerHeight / 2

      layerGroup.append('rect')
        .attr('class', 'layer-bg')
        .attr('x', startX)
        .attr('y', yPos)
        .attr('width', bgWidth)
        .attr('height', layerHeight)
        .attr('fill', index % 2 === 0 ? 'rgba(255, 255, 255, 0.02)' : 'rgba(255, 255, 255, 0.05)')

      layerGroup.append('text')
        .attr('class', 'layer-label')
        .attr('x', startX + 20)
        .attr('y', yPos + 24)
        .text(`Level ${index}: ${layerName}`)
    })

    // Links (lines)
    g.selectAll('.link')
      .data(CALL_TREE_LINKS)
      .enter().append('path')
      .attr('class', 'link')
      .attr('d', (d: Link) => {
        const s = nodeMap[d.source]
        const t = nodeMap[d.target]
        const sx = s.x
        const sy = s.y + nodeHeight / 2
        const tx = t.x
        const ty = t.y - nodeHeight / 2 - 2

        return `M ${sx} ${sy}
                C ${sx} ${(sy + ty) / 2},
                  ${tx} ${(sy + ty) / 2},
                  ${tx} ${ty}`
      })
      .attr('marker-end', 'url(#arrow)')

    // Nodes
    const node = g.selectAll('.node')
      .data(nodes)
      .enter().append('g')
      .attr('class', 'node')
      .attr('transform', (d) => `translate(${d.x},${d.y})`)

    node.append('rect')
      .attr('x', -nodeWidth / 2)
      .attr('y', -nodeHeight / 2)
      .attr('width', nodeWidth)
      .attr('height', nodeHeight)

    node.append('text')
      .text((d) => d.name)

    // Initial transform
    const initialTransform = d3.zoomIdentity
      .translate(width / 2, 100)
      .scale(0.7)
    svg.call(zoom.transform, initialTransform)

  }, [])

  return (
    <div id="tree-container" ref={containerRef}>
      <svg ref={svgRef} width="100%" height="100%"></svg>
    </div>
  )
}

export default CallTree
