import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './pages/Home'
import Projects from './pages/Projects'
import CoCreate from './pages/CoCreate'
import Invest from './pages/Invest'
import Profile from './pages/Profile'

const tabs = [
  { id: 'home', label: '发现', icon: '🏠' },
  { id: 'projects', label: '我的项目', icon: '📋' },
  { id: 'cocreate', label: '共创', icon: '🎨' },
  { id: 'invest', label: '投资', icon: '💰' },
  { id: 'profile', label: '我的', icon: '👤' },
]

function App() {
  const [activeTab, setActiveTab] = useState('home')

  const renderPage = () => {
    switch (activeTab) {
      case 'home': return <Home />
      case 'projects': return <Projects />
      case 'cocreate': return <CoCreate />
      case 'invest': return <Invest />
      case 'profile': return <Profile />
      default: return <Home />
    }
  }

  return (
    <div className="phone-frame bg-gray-50 flex flex-col relative">
      <div className="flex-1 overflow-y-auto pb-16">
        {renderPage()}
      </div>
      <div className="fixed bottom-0 left-0 right-0 max-w-[430px] mx-auto bg-white border-t border-gray-200 flex justify-around items-center h-16 z-50">
        {tabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
              activeTab === tab.id ? 'text-brand-navy' : 'text-gray-400'
            }`}
          >
            <span className="text-xl">{tab.icon}</span>
            <span className="text-xs mt-0.5 font-medium">{tab.label}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
