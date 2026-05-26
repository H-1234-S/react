import React from 'react'

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-links">
          <li><a href="https://zh-hans.react.dev" target="_blank" rel="noopener noreferrer">React 官方中文文档</a></li>
          <li><a href="https://github.com/facebook/react" target="_blank" rel="noopener noreferrer">GitHub 仓库</a></li>
          <li><a href="https://react.dev/blog" target="_blank" rel="noopener noreferrer">React 官方博客</a></li>
          <li><a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">Vite 构建工具</a></li>
        </ul>
        <p className="footer-copyright">
          本网站使用 React + Vite 构建 | 仅供学习参考 © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  )
}

export default Footer
