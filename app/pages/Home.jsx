import React, { useState, useEffect } from 'react'
import { projects, realProjects, customerSegments, evaluations, videoCarousel } from '../../shared/data.js'
import { formatMoney, formatDate } from '../../shared/utils.js'
import { theme } from '../../shared/theme.js'

function VideoCarousel() {
  const [activeIdx, setActiveIdx] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx(prev => (prev + 1) % videoCarousel.length)
    }, 3500)
    return () => clearInterval(timer)
  }, [])

  const current = videoCarousel[activeIdx]

  return (
    <div className="relative overflow-hidden" style={{height: '220px'}}>
      {/* Video Placeholder - 真实场景替换为<video>标签 */}
      <div className={`absolute inset-0 bg-gradient-to-br ${current.posterColor} flex items-center justify-center`}>
        <div className="text-center text-white">
          <div className="text-6xl mb-3 animate-bounce">{current.icon}</div>
          <div className="text-xs text-white/60 mb-1">▶ 项目宣传片 3秒</div>
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto cursor-pointer hover:bg-white/30 transition-colors"
               onClick={() => window.open(current.link, '_blank')}>
            <span className="text-white text-2xl">▶</span>
          </div>
        </div>
      </div>
      {/* Overlay Info */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5">
        <h3 className="text-white font-bold text-lg">{current.title}</h3>
        <p className="text-white/70 text-xs mt-0.5">{current.subtitle}</p>
        <div className="flex items-center gap-2 mt-2">
          {current.tags.slice(0, 3).map(tag => (
            <span key={tag} className="text-[10px] bg-white/20 text-white px-2 py-0.5 rounded-full">{tag}</span>
          ))}
          <span className="text-[10px] text-white/50 ml-auto">{current.price}</span>
        </div>
      </div>
      {/* Dots */}
      <div className="absolute top-3 right-3 flex gap-1.5">
        {videoCarousel.map((_, i) => (
          <div key={i} className={`w-1.5 h-1.5 rounded-full transition-all ${i === activeIdx ? 'bg-white w-4' : 'bg-white/40'}`} />
        ))}
      </div>
      {/* 静音标签 */}
      <div className="absolute top-3 left-3 bg-black/40 text-white/80 text-[10px] px-2 py-0.5 rounded-full">
        🔇 静音
      </div>
    </div>
  )
}

function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl p-4 card-shadow mb-4 cursor-pointer hover:shadow-md transition-shadow">
      <div className="flex items-start gap-3">
        <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">
          {project.coverImage}
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-gray-800 text-base">{project.name}</h3>
          <p className="text-gray-500 text-xs mt-0.5">{project.location}</p>
          <div className="flex items-center gap-3 mt-2 text-xs text-gray-600">
            <span>{project.areaRange}</span>
            <span>¥{project.unitPrice.toLocaleString()}/㎡</span>
          </div>
        </div>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full rounded-full bg-gradient-to-r from-brand-navy to-brand-emerald" 
               style={{width: `${(project.currentStage / 7) * 100}%`}} />
        </div>
        <span className="text-xs text-gray-400">{theme.stages[project.currentStage - 1].name}</span>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex items-center gap-4 text-xs text-gray-500">
          <span>🏠 {project.reservedUnits}/{project.totalUnits}套</span>
          <span>👥 {project.lpCount}位LP</span>
        </div>
        <span className="text-xs text-brand-orange font-semibold">
          最低{formatMoney(project.minInvest)}起投
        </span>
      </div>
    </div>
  )
}

function RealProjectCard({ project }) {
  return (
    <div className="bg-white rounded-xl p-3 card-shadow min-w-[200px] flex-shrink-0 cursor-pointer hover:shadow-md transition-shadow"
         onClick={() => window.open(project.link, '_blank')}>
      <div className="w-full h-20 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-3xl mb-2">
        {project.icon}
      </div>
      <h4 className="font-bold text-gray-800 text-sm truncate">{project.name}</h4>
      <p className="text-xs text-gray-400 truncate">{project.location}</p>
      <div className="flex items-center justify-between mt-1">
        <span className="text-xs font-bold text-brand-orange">{project.price}</span>
        <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
          project.status === '在售' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
        }`}>{project.status}</span>
      </div>
      <div className="flex flex-wrap gap-1 mt-1.5">
        {project.tags.slice(0, 2).map(tag => (
          <span key={tag} className="text-[10px] bg-gray-100 text-gray-500 px-1.5 py-0.5 rounded">{tag}</span>
        ))}
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      {/* Video Carousel */}
      <VideoCarousel />

      {/* Hero Section */}
      <div className="gradient-hero px-5 pt-6 pb-6 text-white -mt-1">
        <h1 className="text-xl font-bold">🏠 房找人</h1>
        <p className="text-xs text-white/70 mt-0.5">你参与创造的理想家 · 客户即投资人</p>
        <div className="mt-4 bg-white/15 backdrop-blur rounded-xl p-3.5 cursor-pointer hover:bg-white/20 transition-colors">
          <div className="flex items-center gap-2">
            <span className="text-base">💬</span>
            <span className="text-sm">我想住在这样的房子里...</span>
          </div>
          <p className="text-xs text-white/60 mt-0.5">描述你的理想居住需求，AI将为你匹配最佳方案</p>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white -mt-2 rounded-t-2xl px-5 py-3.5">
        <div className="flex justify-around text-center">
          <div>
            <div className="text-lg font-bold text-brand-navy">3</div>
            <div className="text-xs text-gray-400">在募项目</div>
          </div>
          <div>
            <div className="text-lg font-bold text-brand-emerald">259</div>
            <div className="text-xs text-gray-400">投资合伙人</div>
          </div>
          <div>
            <div className="text-lg font-bold text-brand-orange">4.5</div>
            <div className="text-xs text-gray-400">综合CSI</div>
          </div>
          <div>
            <div className="text-lg font-bold text-brand-navy">25.7亿</div>
            <div className="text-xs text-gray-400">管理资金</div>
          </div>
        </div>
      </div>

      {/* Hot Demand Tags */}
      <div className="px-5 py-4">
        <h3 className="font-bold text-gray-800 mb-3">🔥 热门需求群体</h3>
        <div className="flex flex-wrap gap-2">
          {customerSegments.map(seg => (
            <div key={seg.name} className="bg-white rounded-full px-3 py-1.5 flex items-center gap-1.5 card-shadow">
              <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: seg.color}} />
              <span className="text-xs font-medium text-gray-700">{seg.name}</span>
              <span className="text-xs text-gray-400">{seg.percentage}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* 热门在售项目 - 横向滚动 */}
      <div className="px-5 mb-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-800">🏠 杭州热门在售楼盘</h3>
          <span className="text-xs text-brand-orange font-medium">查看全部 →</span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-2 -mx-5 px-5" style={{scrollSnapType: 'x mandatory'}}>
          {realProjects.map(p => (
            <div key={p.id} style={{scrollSnapAlign: 'start'}}>
              <RealProjectCard project={p} />
            </div>
          ))}
        </div>
      </div>

      {/* LP Project List */}
      <div className="px-5">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-800">💰 正在招募LP的项目</h3>
          <span className="text-xs text-brand-orange font-medium">查看全部 →</span>
        </div>
        {projects.map(p => <ProjectCard key={p.id} project={p} />)}
      </div>

      {/* Reviews */}
      <div className="px-5 py-4">
        <h3 className="font-bold text-gray-800 mb-3">⭐ 客户真实评价</h3>
        {evaluations.slice(0, 3).map(ev => (
          <div key={ev.id} className="bg-white rounded-xl p-4 card-shadow mb-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-gray-700">{ev.user}</span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{ev.stage}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-brand-orange font-bold text-sm">{ev.score}</span>
                <span className="text-yellow-400 text-xs">{'★'.repeat(Math.round(ev.score))}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-1.5">"{ev.content}"</p>
            <p className="text-xs text-gray-400 mt-0.5">{ev.projectName} · {formatDate(ev.date)}</p>
          </div>
        ))}
      </div>

      <div className="h-4" />
    </div>
  )
}
