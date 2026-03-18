import { Highlight, themes } from 'prism-react-renderer'
import type { FunctionSignature, CodeBlock } from '../../types'
import './CompletedFunction.css'

interface CompletedFunctionProps {
  signature: FunctionSignature
  block: CodeBlock
}

function CompletedFunction({ signature, block }: CompletedFunctionProps) {
  const completedCode = block.isExpression
    ? `function ${signature.signature} {\n  return ${block.code};\n}`
    : `function ${signature.signature} {\n  ${block.code.split('\n').join('\n  ')}\n}`

  return (
    <div className="completed-function">
      <Highlight theme={themes.vsDark} code={completedCode} language="javascript">
        {({ tokens, getLineProps, getTokenProps }) => (
          <pre className="completed-function__pre">
            {tokens.map((line, lineIndex) => (
              <div key={lineIndex} {...getLineProps({ line })}>
                {line.map((token, tokenIndex) => (
                  <span key={tokenIndex} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  )
}

export default CompletedFunction
