import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Dashboard from './pages/Dashboard'
import DemandInsight from './pages/DemandInsight'
import ProjectManage from './pages/ProjectManage'
import Evaluation from './pages/Evaluation'
import LPManage from './pages/LPManage'
import DesignEngineering from './pages/DesignEngineering'
import AIEngine from './pages/AIEngine'
import Settings from './pages/Settings'

const menuItems = [
  { id: 'dashboard', label: '仪表盘', icon: '📊' },
  { id: 'demand', label: '需求洞察', icon: '🔍' },
  { id: 'projects', label: '项目管理', icon: '🏗️' },
  { id: 'evaluation', label: '客户评价', icon: '⭐' },
  { id: 'lp', label: 'LP管理', icon: '👥' },
  { id: 'design', label: '设计与工程', icon: '📐' },
  { id: 'ai', label: 'AI引擎', icon: '🤖' },
  { id: 'settings', label: '设置', icon: '⚙️' },
]

function Sidebar({ activeMenu, onMenuChange }) {
  return (
    <div className="w-56 bg-brand-navy text-white h-screen flex flex-col fixed left-0 top-0 overflow-y-auto z-50">
      <div className="px-5 py-6 border-b border-white/10">
        <h1 className="text-lg font-bold">🏠 房找人</h1>
        <p className="text-xs text-white/50 mt-1">GP管理后台</p>
      </div>
      <nav className="flex-1 py-4">
        {menuItems.map(item => (
          <button
            key={item.id}
            onClick={() => onMenuChange(item.id)}
            className={`w-full text-left px-5 py-2.5 flex items-center gap-3 transition-colors ${
              activeMenu === item.id
                ? 'bg-white/15 text-white border-r-2 border-brand-orange'
                : 'text-white/60 hover:text-white hover:bg-white/5'
            } cursor-pointer`}
          >
            <span className="text-base">{item.icon}</span>
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
      <div className="px-5 py-4 border-t border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-orange rounded-full flex items-center justify-center text-sm">👤</div>
          <div>
            <div className="text-sm font-medium">张管理</div>
            <div className="text-xs text-white/50">GP · 委托管理人</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard')

  const renderPage = () => {
    switch (activeMenu) {
      case 'dashboard': return <Dashboard />
      case 'demand': return <DemandInsight />
      case 'projects': return <ProjectManage />
      case 'evaluation': return <Evaluation />
      case 'lp': return <LPManage />
      case 'design': return <DesignEngineering />
      case 'ai': return <AIEngine />
      case 'settings': return <Settings />
      default: return <Dashboard />
    }
  }

  return (
    <div className="desktop-frame flex">
      <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />
      <div className="ml-56 flex-1 min-h-screen">
        <div className="p-6">
          {renderPage()}
        </div>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
