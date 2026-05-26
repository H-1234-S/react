import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ConceptCard from './components/ConceptCard'
import Footer from './components/Footer'

const concepts = [
  {
    id: 1,
    icon: '🧩',
    title: '组件化',
    subtitle: 'Component-Based Architecture',
    description: 'React 将 UI 拆分为独立、可复用的组件。每个组件管理自己的状态和渲染逻辑，像搭积木一样构建复杂的用户界面。组件之间可以嵌套、组合，形成清晰的层次结构。',
    code: `// 一个简单的 React 组件
function Welcome({ name }) {
  return <h1>你好, {name}!</h1>;
}

// 组件可以嵌套使用
function App() {
  return (
    <div>
      <Welcome name="小明" />
      <Welcome name="小红" />
    </div>
  );
}`,
    color: '#61dafb'
  },
  {
    id: 2,
    icon: '📝',
    title: 'JSX 语法',
    subtitle: 'JavaScript XML',
    description: 'JSX 是 JavaScript 的语法扩展，让你能在 JS 代码中书写类似 HTML 的标记。它并非字符串，而是会被 Babel 编译为 React.createElement() 调用。JSX 让 UI 结构更加直观易读。',
    code: `// JSX 示例
const element = (
  <div className="container">
    <h2>{title}</h2>
    <p>{message}</p>
    {isVisible && <span>可见内容</span>}
  </div>
);

// 编译后相当于:
const element = React.createElement(
  'div',
  { className: 'container' },
  React.createElement('h2', null, title),
  React.createElement('p', null, message),
  isVisible && React.createElement('span', null, '可见内容')
);`,
    color: '#f7df1e'
  },
  {
    id: 3,
    icon: '🔄',
    title: '状态管理 (State)',
    subtitle: 'useState Hook',
    description: '状态是组件的"记忆"。当状态发生变化时，React 会自动重新渲染组件。useState 是最基础的状态管理 Hook，让你在函数组件中轻松管理局部状态。',
    code: `import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>点击了 {count} 次</p>
      <button onClick={() => setCount(count + 1)}>
        点我 +1
      </button>
    </div>
  );
}`,
    color: '#764abc'
  },
  {
    id: 4,
    icon: '📦',
    title: 'Props 数据流',
    subtitle: '单向数据流',
    description: 'Props（属性）是父组件向子组件传递数据的方式。React 遵循单向数据流原则——数据从父组件流向子组件。这种设计让数据流动可预测、易于调试。',
    code: `// 父组件传递 props
function Parent() {
  const user = { name: '张三', age: 25 };
  
  return <Child user={user} greeting="欢迎" />;
}

// 子组件接收 props
function Child({ user, greeting }) {
  return (
    <div>
      <h3>{greeting}, {user.name}!</h3>
      <p>年龄: {user.age} 岁</p>
    </div>
  );
}`,
    color: '#e44d26'
  },
  {
    id: 5,
    icon: '⚡',
    title: '副作用处理 (useEffect)',
    subtitle: 'Side Effects',
    description: 'useEffect 让你在组件中执行副作用操作，如数据请求、订阅、DOM 操作等。它会在渲染完成后执行，并支持清理机制，避免内存泄漏。',
    code: `import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // 获取用户数据
    fetch(\`/api/users/\${userId}\`)
      .then(res => res.json())
      .then(data => setUser(data));
    
    // 清理函数
    return () => {
      console.log('组件卸载，清理资源');
    };
  }, [userId]); // 依赖数组

  if (!user) return <div>加载中...</div>;
  
  return <div>{user.name}</div>;
}`,
    color: '#06bcee'
  },
  {
    id: 6,
    icon: '🌳',
    title: '虚拟 DOM',
    subtitle: 'Virtual DOM',
    description: 'React 在内存中维护一个轻量级的 DOM 副本——虚拟 DOM。当状态变化时，React 先对比新旧虚拟 DOM 的差异（Diff 算法），然后只更新变化的部分到真实 DOM，极大提升了性能。',
    code: `// React 的工作流程
// 1. 状态变化触发重新渲染
// 2. 生成新的虚拟 DOM 树
// 3. Diff 算法对比新旧树
// 4. 计算最小更新路径
// 5. 批量更新真实 DOM

// 简化示意:
function updateDOM() {
  // 旧虚拟 DOM
  const oldVNode = <div><span>A</span></div>;
  
  // 新虚拟 DOM  
  const newVNode = <div><span>B</span></div>;
  
  // React 发现只有文字变了
  // 所以只更新 span 的文本内容
  // 而不是重新创建整个 div!
}`,
    color: '#00d084'
  },
  {
    id: 7,
    icon: '🎣',
    title: 'Hooks 生态',
    subtitle: 'React Hooks',
    description: 'Hooks 是 React 16.8 引入的革命性特性，让函数组件也能拥有状态和生命周期能力。除了基础的 useState 和 useEffect，还有 useRef、useMemo、useCallback、useContext 等丰富的 Hook 供你选择。',
    code: `import { 
  useState,    // 状态管理
  useEffect,   // 副作用处理
  useRef,      // 引用值
  useMemo,     // 记忆化计算
  useCallback, // 记忆化函数
  useContext,  // 上下文消费
  useReducer   // 复杂状态管理
} from 'react';

// 自定义 Hook - 复用逻辑
function useWindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  useEffect(() => {
    const handler = () => setSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  return size;
}`,
    color: '#c2138b'
  },
  {
    id: 8,
    icon: '🚀',
    title: 'React 生态系统',
    subtitle: 'Ecosystem',
    description: 'React 拥有庞大而活跃的生态系统：Next.js 用于服务端渲染和静态生成；React Router 处理路由；Redux 和 Zustand 管理全局状态；React Query 处理异步数据；还有无数的 UI 组件库如 Ant Design、MUI 等。',
    code: `// React 生态常用工具
// 📦 路由 - React Router
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 📦 全局状态 - Zustand
import { create } from 'zustand';
const useStore = create((set) => ({
  count: 0,
  increment: () => set(s => ({ count: s.count + 1 }))
}));

// 📦 数据请求 - React Query
import { useQuery } from '@tanstack/react-query';

// 📦 UI 组件库 - Ant Design
import { Button, Table, Modal } from 'antd';

// 📦 服务端渲染 - Next.js
// npx create-next-app@latest my-app`,
    color: '#ff6b35'
  }
];

const timelineEvents = [
  { year: '2013', event: 'React 由 Facebook 开源发布', detail: 'Jordan Walke 创造了 React，首次在 Facebook 的信息流中使用' },
  { year: '2015', event: 'React Native 发布', detail: '使用 React 构建原生移动应用，"Learn once, write anywhere"' },
  { year: '2016', event: 'React 15 发布', detail: '带来了更好的错误处理和 SVG 支持' },
  { year: '2017', event: 'React 16 (Fiber) 发布', detail: '底层重写 Fiber 架构，支持异步渲染，性能大幅提升' },
  { year: '2019', event: 'React 16.8 - Hooks 正式发布', detail: '革命性的 Hooks API，函数组件从此拥有了完整的表达能力' },
  { year: '2020', event: 'React 17 发布', detail: '无新功能但为后续版本做铺垫，渐进式升级策略' },
  { year: '2022', event: 'React 18 发布', detail: '并发特性、自动批处理、Suspense 改进、Server Components' },
  { year: '2024', event: 'React 19 发布', detail: 'Server Components 稳定、Actions、新 Hooks、改进的 ref 处理' },
];

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      
      <section className="section concepts-section">
        <h2 className="section-title">React 核心概念</h2>
        <p className="section-desc">掌握这些核心概念，你就理解了 React 的精髓</p>
        <div className="concepts-grid">
          {concepts.map(concept => (
            <ConceptCard key={concept.id} concept={concept} />
          ))}
        </div>
      </section>

      <section className="section timeline-section">
        <h2 className="section-title">React 发展历程</h2>
        <p className="section-desc">从 Facebook 内部项目到全球最受欢迎的前端框架之一</p>
        <div className="timeline">
          {timelineEvents.map((event, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <span className="timeline-year">{event.year}</span>
                <h3 className="timeline-event">{event.event}</h3>
                <p className="timeline-detail">{event.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section why-react-section">
        <h2 className="section-title">为什么选择 React？</h2>
        <div className="why-grid">
          <div className="why-card">
            <span className="why-icon">🏢</span>
            <h3>企业级信赖</h3>
            <p>Facebook、Instagram、Netflix、Airbnb、Uber 等全球顶级公司都在使用 React</p>
          </div>
          <div className="why-card">
            <span className="why-icon">👥</span>
            <h3>庞大的社区</h3>
            <p>GitHub 上超过 220k Stars，数百万开发者，丰富的教程和第三方库</p>
          </div>
          <div className="why-card">
            <span className="why-icon">💼</span>
            <h3>就业前景广阔</h3>
            <p>前端开发岗位中 React 需求量最大，掌握 React 意味着更多职业机会</p>
          </div>
          <div className="why-card">
            <span className="why-icon">📱</span>
            <h3>跨平台能力</h3>
            <p>学一次 React，可以开发 Web、iOS、Android 甚至桌面应用</p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App
