import React, { useState } from 'react'
import { projects, currentUser, videoCarousel, realProjects } from '../../shared/data.js'
import { theme } from '../../shared/theme.js'
import { formatMoney, getStageStatus, formatDate } from '../../shared/utils.js'

function StageProgress({ project }) {
  return (
    <div className="bg-white rounded-2xl p-5 card-shadow">
      <h3 className="font-bold text-gray-800 mb-4">📊 项目进度（七阶段）</h3>
      <div className="space-y-3">
        {theme.stages.map((stage, idx) => {
          const status = getStageStatus(project, stage.id)
          return (
            <div key={stage.id} className="flex items-center gap-3">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm flex-shrink-0 ${
                status === 'completed' ? 'bg-green-100 text-green-600' :
                status === 'active' ? 'bg-brand-navy text-white stage-active' :
                'bg-gray-100 text-gray-400'
              }`}>
                {status === 'completed' ? '✓' : stage.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${
                    status === 'completed' ? 'text-green-600' :
                    status === 'active' ? 'text-brand-navy' : 'text-gray-400'
                  }`}>{stage.name}</span>
                  {status === 'active' && <span className="text-xs text-brand-orange font-medium">进行中</span>}
                  {status === 'completed' && project.stageProgress[stage.id]?.completedAt && (
                    <span className="text-xs text-gray-400">{project.stageProgress[stage.id].completedAt}</span>
                  )}
                </div>
                {idx < 6 && (
                  <div className={`h-0.5 mt-1 rounded ${status === 'completed' ? 'bg-green-300' : 'bg-gray-100'}`} />
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

function ProjectDetail({ project, onBack }) {
  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <button onClick={onBack} className="text-white/70 text-sm mb-3">← 返回</button>
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center text-2xl">
            {project.coverImage}
          </div>
          <div>
            <h2 className="text-xl font-bold">{project.name}</h2>
            <p className="text-xs text-white/70">{project.location}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-4 text-sm">
          <span className="bg-white/20 px-3 py-1 rounded-full">{project.areaRange}</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">¥{project.unitPrice.toLocaleString()}/㎡</span>
          <span className="bg-white/20 px-3 py-1 rounded-full">第{project.currentStage}阶段</span>
        </div>
      </div>

      <div className="px-5 -mt-3 space-y-4">
        <StageProgress project={project} />

        {/* Project Info */}
        <div className="bg-white rounded-2xl p-5 card-shadow">
          <h3 className="font-bold text-gray-800 mb-3">📝 项目概况</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
          <div className="grid grid-cols-3 gap-3 mt-4">
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-brand-navy">{project.totalUnits}</div>
              <div className="text-xs text-gray-400">总套数</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-brand-emerald">{project.reservedUnits}</div>
              <div className="text-xs text-gray-400">已预约</div>
            </div>
            <div className="bg-gray-50 rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-brand-orange">{project.lpCount}</div>
              <div className="text-xs text-gray-400">LP数量</div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div className="bg-white rounded-2xl p-5 card-shadow">
          <h3 className="font-bold text-gray-800 mb-3">🎬 项目视频</h3>
          <div className="bg-gradient-to-br from-blue-900 to-purple-900 rounded-xl h-40 flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity">
            <div className="text-center text-white">
              <div className="text-4xl mb-2">{project.coverImage}</div>
              <div className="text-sm font-medium">{project.name}</div>
              <div className="text-xs text-white/60 mt-1">▶ 播放项目宣传片</div>
            </div>
          </div>
          <div className="flex gap-2 mt-3">
            <button className="flex-1 py-2 bg-brand-navy text-white rounded-lg text-xs font-medium">▶ 播放视频</button>
            <button className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">📸 查看图集</button>
            <button className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">🥽 VR看房</button>
          </div>
        </div>

        {/* CSI Score */}
        {project.currentCSI && (
          <div className="bg-white rounded-2xl p-5 card-shadow">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-800">⭐ 客户满意度 (CSI)</h3>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-brand-emerald">{project.currentCSI}</span>
                <span className="text-xs text-gray-400">/5.0</span>
              </div>
            </div>
            <div className="mt-2 h-2 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full bg-gradient-to-r from-red-400 via-yellow-400 to-green-500"
                   style={{width: `${(project.currentCSI / 5) * 100}%`}} />
            </div>
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>0</span><span>目标 {project.targetCSI}</span><span>5</span>
            </div>
          </div>
        )}

        {/* Similar Real Projects */}
        <div className="bg-white rounded-2xl p-5 card-shadow">
          <h3 className="font-bold text-gray-800 mb-3">🏠 周边热门在售</h3>
          <div className="flex gap-3 overflow-x-auto pb-1">
            {realProjects.slice(0, 3).map(rp => (
              <div key={rp.id} className="bg-gray-50 rounded-xl p-3 min-w-[160px] cursor-pointer"
                   onClick={() => window.open(rp.link, '_blank')}>
                <div className="text-2xl mb-1">{rp.icon}</div>
                <div className="text-sm font-bold text-gray-700">{rp.name}</div>
                <div className="text-xs text-gray-400">{rp.location}</div>
                <div className="text-xs text-brand-orange font-bold mt-1">{rp.price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Investment CTA */}
        {project.currentStage <= 3 && (
          <div className="bg-gradient-to-r from-brand-navy to-blue-700 rounded-2xl p-5 text-white">
            <h3 className="font-bold text-lg">💰 成为项目投资合伙人</h3>
            <p className="text-sm text-white/70 mt-1">最低{formatMoney(project.minInvest)}起投，享受购房折扣+利润分红</p>
            <button className="mt-3 bg-white text-brand-navy font-bold px-6 py-2.5 rounded-xl text-sm hover:bg-gray-100 transition-colors">
              立即了解投资方案
            </button>
          </div>
        )}
      </div>
      <div className="h-4" />
    </div>
  )
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const myProjectIds = currentUser.joinedProjects
  const myProjects = projects.filter(p => myProjectIds.includes(p.id))
  const otherProjects = projects.filter(p => !myProjectIds.includes(p.id))

  if (selectedProject) {
    return <ProjectDetail project={selectedProject} onBack={() => setSelectedProject(null)} />
  }

  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <h1 className="text-2xl font-bold">我的项目</h1>
        <p className="text-sm text-white/70 mt-1">追踪你参与的每一个项目</p>
      </div>

      <div className="px-5 -mt-3">
        {myProjects.length > 0 && (
          <div className="mb-4">
            <h3 className="font-bold text-gray-800 mb-3 mt-4">🔗 我参与的项目</h3>
            {myProjects.map(p => (
              <div key={p.id} onClick={() => setSelectedProject(p)}
                   className="bg-white rounded-2xl p-4 card-shadow mb-3 cursor-pointer hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                    {p.coverImage}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-gray-800">{p.name}</h4>
                    <p className="text-xs text-gray-400">{p.location}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-600">
                        {theme.stages[p.currentStage - 1].name}
                      </span>
                      {p.currentCSI && (
                        <span className="text-xs text-yellow-500">★ {p.currentCSI}</span>
                      )}
                    </div>
                  </div>
                  <span className="text-gray-300">›</span>
                </div>
              </div>
            ))}
          </div>
        )}

        <h3 className="font-bold text-gray-800 mb-3">🔍 发现更多项目</h3>
        {otherProjects.map(p => (
          <div key={p.id} onClick={() => setSelectedProject(p)}
               className="bg-white rounded-2xl p-4 card-shadow mb-3 cursor-pointer hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-gray-200 to-gray-300 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                {p.coverImage}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="font-bold text-gray-800">{p.name}</h4>
                <p className="text-xs text-gray-400">{p.location}</p>
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-xs px-2 py-0.5 rounded-full bg-orange-50 text-orange-600">
                    LP招募中
                  </span>
                  <span className="text-xs text-gray-400">最低{formatMoney(p.minInvest)}</span>
                </div>
              </div>
              <span className="text-gray-300">›</span>
            </div>
          </div>
        ))}
      </div>
      <div className="h-4" />
    </div>
  )
}
