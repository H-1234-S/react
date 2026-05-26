import React from 'react'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-icon">⚛️</div>
      <h1>探索 React 的世界</h1>
      <p className="hero-subtitle">
        React 是一个用于构建用户界面的 JavaScript 库。
        它以组件化、声明式编程为核心，让前端开发更加高效和愉悦。
        无论你是初学者还是有经验的开发者，这里都将带你深入了解 React 的方方面面。
      </p>
      <div className="hero-stats">
        <div className="hero-stat">
          <div className="hero-stat-number">220k+</div>
          <div className="hero-stat-label">GitHub Stars</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-number">11年+</div>
          <div className="hero-stat-label">持续发展</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-number">数百万</div>
          <div className="hero-stat-label">开发者使用</div>
        </div>
        <div className="hero-stat">
          <div className="hero-stat-number">React 19</div>
          <div className="hero-stat-label">最新版本</div>
        </div>
      </div>
    </section>
  )
}

export default Hero
