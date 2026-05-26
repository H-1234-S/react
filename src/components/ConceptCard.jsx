import React, { useState } from 'react'

function ConceptCard({ concept }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="concept-card"
      onClick={() => setExpanded(!expanded)}
      style={{
        borderLeft: `3px solid ${concept.color}`
      }}
    >
      <div className="concept-card-header">
        <div
          className="concept-card-icon"
          style={{ background: `${concept.color}20` }}
        >
          {concept.icon}
        </div>
        <div>
          <div className="concept-card-title">{concept.title}</div>
          <div className="concept-card-subtitle">{concept.subtitle}</div>
        </div>
      </div>
      <p className="concept-card-desc">{concept.description}</p>
      <span className="concept-card-expand">
        {expanded ? '收起代码 ▲' : '查看示例代码 ▼'}
      </span>
      {expanded && (
        <div className="concept-card-code">
          <pre><code>{concept.code}</code></pre>
        </div>
      )}
    </div>
  )
}

export default ConceptCard
