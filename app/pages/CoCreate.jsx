import React, { useState } from 'react'
import { projects, designModules, videoCarousel, realProjects } from '../../shared/data.js'
import { formatMoney } from '../../shared/utils.js'

function ModuleSelector({ module, selected, costs, onSelect }) {
  return (
    <div className="bg-white rounded-2xl p-4 card-shadow mb-3">
      <h4 className="font-bold text-gray-800 text-sm mb-3">{module.name}</h4>
      <div className="space-y-2">
        {module.options.map(opt => {
          const isSelected = selected === opt
          const cost = costs[opt] || 0
          return (
            <button
              key={opt}
              onClick={() => onSelect(module.id, opt)}
              className={`w-full text-left px-4 py-3 rounded-xl flex items-center justify-between transition-all ${
                isSelected
                  ? 'bg-brand-navy text-white'
                  : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <span className="text-sm font-medium">{opt}</span>
              <span className={`text-xs ${isSelected ? 'text-white/70' : 'text-gray-400'}`}>
                {cost > 0 ? `+¥${cost.toLocaleString()}` : cost < 0 ? `-¥${Math.abs(cost).toLocaleString()}` : '已含'}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ConfigTab({ activeProject, selections, handleSelect }) {
  const basePrice = activeProject.unitPrice * 120
  const totalExtraCost = Object.entries(selections).reduce((sum, [modId, opt]) => {
    return sum + (designModules.costs[modId]?.[opt] || 0)
  }, 0)
  const totalPrice = basePrice + totalExtraCost

  return (
    <>
      {/* VR Preview */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center mb-4 card-shadow">
        <div className="text-5xl mb-3">🏠</div>
        <h3 className="font-bold text-gray-800">3D 实时预览</h3>
        <p className="text-sm text-gray-500 mt-1">你的每一次选择，都会在3D模型中实时呈现</p>
        <div className="flex gap-2 mt-3 justify-center">
          <button className="bg-brand-navy text-white px-4 py-2 rounded-xl text-sm font-medium hover:bg-blue-800 transition-colors">
            🥽 进入VR体验
          </button>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded-xl text-sm font-medium hover:bg-gray-200 transition-colors">
            📸 360°全景
          </button>
        </div>
      </div>

      {/* Module Selectors */}
      <h3 className="font-bold text-gray-800 mb-3">选择你的配置方案</h3>
      {activeProject.modules.map(mod => (
        <ModuleSelector
          key={mod.id}
          module={mod}
          selected={selections[mod.id]}
          costs={designModules.costs[mod.id] || {}}
          onSelect={handleSelect}
        />
      ))}

      {/* Cost Summary */}
      <div className="bg-white rounded-2xl p-5 card-shadow sticky bottom-20">
        <h3 className="font-bold text-gray-800 mb-3">💳 费用概览</h3>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-500">基准价格 (120㎡)</span>
            <span className="font-medium">¥{basePrice.toLocaleString()}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">个性化增项</span>
            <span className={`font-medium ${totalExtraCost > 0 ? 'text-brand-orange' : 'text-brand-emerald'}`}>
              {totalExtraCost >= 0 ? '+' : ''}¥{totalExtraCost.toLocaleString()}
            </span>
          </div>
          <div className="border-t border-gray-100 pt-2 flex justify-between">
            <span className="font-bold text-gray-800">预计总价</span>
            <span className="font-bold text-brand-navy text-lg">¥{totalPrice.toLocaleString()}</span>
          </div>
          <div className="text-xs text-gray-400">
            * LP投资合伙人享受5%购房折扣：¥{(totalPrice * 0.95).toLocaleString()}
          </div>
        </div>
        <div className="flex gap-2 mt-4">
          <button className="flex-1 bg-brand-navy text-white py-3 rounded-xl font-bold text-sm hover:bg-blue-800 transition-colors">
            保存配置方案
          </button>
          <button className="flex-1 bg-gray-100 text-gray-600 py-3 rounded-xl font-bold text-sm hover:bg-gray-200 transition-colors">
            对比方案
          </button>
        </div>
      </div>
    </>
  )
}

function VoteTab() {
  const [votedItems, setVotedItems] = useState({})
  const votes = [
    {
      id: 'v1', title: '外立面方案比选', desc: '翡翠湾花园外立面设计方案二选一',
      options: [
        { name: '现代玻璃幕墙', desc: '通透现代，采光最大化', votes: 142, pct: 62, icon: '🏢' },
        { name: '石材+铝板', desc: '经典质感，耐久性强', votes: 87, pct: 38, icon: '🏛️' },
      ], deadline: '2026-07-25', totalVotes: 229
    },
    {
      id: 'v2', title: '景观设计方案', desc: '社区中心景观方案选择',
      options: [
        { name: '中央花园', desc: '集中式大花园，活动空间充裕', votes: 98, pct: 55, icon: '🌳' },
        { name: '分散式景观', desc: '多点散布，户户有景', votes: 81, pct: 45, icon: '🌿' },
      ], deadline: '2026-07-28', totalVotes: 179
    },
    {
      id: 'v3', title: '公区装修风格', desc: '入户大堂及公共区域装修风格',
      options: [
        { name: '简约现代', desc: '干净利落，时尚简约', votes: 156, pct: 71, icon: '✨' },
        { name: '新中式', desc: '东方韵味，沉稳大气', votes: 63, pct: 29, icon: '🏯' },
      ], deadline: '2026-07-30', totalVotes: 219
    },
  ]

  return (
    <div className="space-y-3">
      {votes.map(vote => (
        <div key={vote.id} className="bg-white rounded-2xl p-5 card-shadow">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h4 className="font-bold text-gray-800">{vote.title}</h4>
              <p className="text-xs text-gray-400 mt-0.5">{vote.desc}</p>
            </div>
            <span className="text-xs bg-orange-50 text-orange-600 px-2 py-0.5 rounded-full">
              ⏰ 截止 {vote.deadline}
            </span>
          </div>
          {vote.options.map((opt, j) => (
            <div key={j} className="mt-3">
              <div className="flex items-center gap-3">
                <span className="text-xl">{opt.icon}</span>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm font-medium text-gray-700">{opt.name}</span>
                    <span className="text-xs text-gray-400">{opt.votes}票 ({opt.pct}%)</span>
                  </div>
                  <div className="h-6 bg-gray-100 rounded-full overflow-hidden relative">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-navy to-blue-400 flex items-center px-2"
                         style={{width: `${opt.pct}%`}}>
                      <span className="text-xs text-white font-medium">{opt.desc}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-50">
            <span className="text-xs text-gray-400">共{vote.totalVotes}人参与</span>
            <button
              onClick={() => setVotedItems(prev => ({...prev, [vote.id]: !prev[vote.id]}))}
              className={`text-xs px-4 py-1.5 rounded-full font-medium transition-colors ${
                votedItems[vote.id]
                  ? 'bg-brand-emerald text-white'
                  : 'bg-brand-navy text-white hover:bg-blue-700'
              }`}
            >
              {votedItems[vote.id] ? '✓ 已投票' : '参与投票'}
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

function CommunityTab() {
  const [newMsg, setNewMsg] = useState('')
  const [posts, setPosts] = useState([
    { user: '李明', avatar: '👨', msg: '大家觉得升级收纳方案值得吗？', time: '10分钟前', replies: 8, likes: 12 },
    { user: '王芳', avatar: '👩', msg: '我刚体验了VR，全屋智能方案太赞了！强烈推荐舒适包以上', time: '25分钟前', replies: 12, likes: 23 },
    { user: '陈工', avatar: '👷', msg: '工地直播看起来进度不错，主体已经到15层了，预计下月封顶', time: '1小时前', replies: 5, likes: 8 },
    { user: '赵女士', avatar: '👩‍💼', msg: '有没有邻居也是三房两厅的配置？想交流一下装修想法', time: '2小时前', replies: 15, likes: 18 },
    { user: '周先生', avatar: '👨‍🦰', msg: '外立面投票我选了玻璃幕墙，大家觉得呢？', time: '3小时前', replies: 21, likes: 31 },
  ])

  return (
    <div className="space-y-3">
      <div className="bg-white rounded-2xl p-5 card-shadow">
        <h3 className="font-bold text-gray-800 mb-1">翡翠湾花园 · 业主社群</h3>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full">187位邻居</span>
          <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">23人在线</span>
          <span className="text-xs bg-purple-50 text-purple-600 px-2 py-0.5 rounded-full">今日46条</span>
        </div>

        {/* 发帖入口 */}
        <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl mb-4">
          <span className="text-2xl">👤</span>
          <input
            value={newMsg}
            onChange={e => setNewMsg(e.target.value)}
            placeholder="分享你的想法..."
            className="flex-1 bg-transparent text-sm text-gray-700 placeholder-gray-400 outline-none"
          />
          <button
            onClick={() => {
              if (newMsg.trim()) {
                setPosts([{
                  user: '我', avatar: '👤', msg: newMsg, time: '刚刚', replies: 0, likes: 0
                }, ...posts])
                setNewMsg('')
              }
            }}
            className="bg-brand-navy text-white px-4 py-1.5 rounded-lg text-xs font-medium"
          >
            发布
          </button>
        </div>

        {posts.map((post, i) => (
          <div key={i} className="border-b border-gray-50 py-3 last:border-0">
            <div className="flex items-center gap-2">
              <span className="text-lg">{post.avatar}</span>
              <span className="font-medium text-sm text-gray-700">{post.user}</span>
              <span className="text-xs text-gray-400">{post.time}</span>
            </div>
            <p className="text-sm text-gray-600 mt-1 ml-7">{post.msg}</p>
            <div className="ml-7 mt-2 flex items-center gap-4 text-xs text-gray-400">
              <span className="cursor-pointer hover:text-brand-orange">❤️ {post.likes}</span>
              <span className="cursor-pointer hover:text-brand-navy">💬 {post.replies}条回复</span>
              <span className="cursor-pointer hover:text-brand-navy">↗️ 分享</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function CoCreate() {
  const activeProject = projects[0]
  const [selections, setSelections] = useState(designModules.selected['p1'] || {})
  const [activeTab, setActiveTab] = useState('config')

  const handleSelect = (moduleId, option) => {
    setSelections(prev => ({ ...prev, [moduleId]: option }))
  }

  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-6 text-white">
        <h1 className="text-2xl font-bold">共创设计</h1>
        <p className="text-sm text-white/70 mt-1">你的家，你来设计</p>
        <div className="flex items-center gap-2 mt-3">
          <span className="bg-white/20 px-2 py-0.5 rounded text-xs">{activeProject.name}</span>
        </div>
      </div>

      {/* Sub-tabs */}
      <div className="bg-white px-5 py-2 border-b border-gray-100 flex gap-4 overflow-x-auto">
        {[
          { id: 'config', label: '🏗️ 模块配置' },
          { id: 'vote', label: '🗳️ 方案投票' },
          { id: 'community', label: '💬 社群讨论' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-2 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${
              activeTab === tab.id
                ? 'border-brand-navy text-brand-navy'
                : 'border-transparent text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="px-5 py-4">
        {activeTab === 'config' && <ConfigTab activeProject={activeProject} selections={selections} handleSelect={handleSelect} />}
        {activeTab === 'vote' && <VoteTab />}
        {activeTab === 'community' && <CommunityTab />}
      </div>
      <div className="h-4" />
    </div>
  )
}
