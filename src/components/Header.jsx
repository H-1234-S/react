import React from 'react'

function Header() {
  return (
    <header className="header">
      <a href="#" className="header-logo">
        <span className="logo-icon">⚛️</span>
        <span>React 科普</span>
      </a>
      <nav>
        <ul className="header-nav">
          <li><a href="#concepts">核心概念</a></li>
          <li><a href="#timeline">发展历程</a></li>
          <li><a href="#why-react">为何选择</a></li>
          <li><a href="https://zh-hans.react.dev" target="_blank" rel="noopener noreferrer">官方文档 ↗</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
