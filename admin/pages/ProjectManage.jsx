import React, { useState } from 'react'
import { projects } from '../../shared/data.js'
import { theme } from '../../shared/theme.js'
import { formatMoney } from '../../shared/utils.js'

function StageTracker({ project }) {
  return (
    <div className="flex items-center gap-1">
      {theme.stages.map((stage, idx) => (
        <React.Fragment key={stage.id}>
          <div className="relative group">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
              project.currentStage > stage.id
                ? 'bg-green-500 text-white'
                : project.currentStage === stage.id
                ? 'bg-brand-navy text-white stage-active'
                : 'bg-gray-100 text-gray-400'
            }`} title={`${stage.name}${project.stageProgress[stage.id]?.completedAt ? `\n完成于: ${project.stageProgress[stage.id].completedAt}` : ''}`}>
              {project.currentStage > stage.id ? '✓' : stage.icon}
            </div>
          </div>
          {idx < 6 && (
            <div className={`h-0.5 w-4 ${project.currentStage > stage.id + 1 ? 'bg-green-300' : 'bg-gray-200'}`} />
          )}
        </React.Fragment>
      ))}
    </div>
  )
}

export default function ProjectManage() {
  const [filter, setFilter] = useState('all') // all | stage1-7

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.currentStage === parseInt(filter.replace('stage', '')))

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">🏗️ 项目管理</h2>
        <p className="text-sm text-gray-400 mt-1">项目列表与七阶段追踪</p>
      </div>

      {/* Stage Filter */}
      <div className="flex items-center gap-2 mb-6 flex-wrap">
        <button
          onClick={() => setFilter('all')}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
            filter === 'all' ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          全部
        </button>
        {theme.stages.map(stage => (
          <button
            key={stage.id}
            onClick={() => setFilter(`stage${stage.id}`)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
              filter === `stage${stage.id}` ? 'text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            style={filter === `stage${stage.id}` ? {backgroundColor: stage.color} : {}}
          >
            {stage.icon} {stage.name}
          </button>
        ))}
      </div>

      {/* Project Cards */}
      <div className="space-y-4">
        {filteredProjects.map(project => (
          <div key={project.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-xl flex items-center justify-center text-3xl flex-shrink-0">
                  {project.coverImage}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-gray-800 text-lg">{project.name}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      project.currentStage <= 2 ? 'bg-blue-50 text-blue-600' :
                      project.currentStage <= 4 ? 'bg-yellow-50 text-yellow-600' :
                      'bg-green-50 text-green-600'
                    }`}>
                      {theme.stages[project.currentStage - 1].icon} {theme.stages[project.currentStage - 1].name}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{project.location}</p>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">{project.description}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-brand-navy">{project.currentCSI || '—'}</div>
                <div className="text-xs text-gray-400">CSI评分</div>
              </div>
            </div>

            {/* Stage Tracker */}
            <div className="mt-4 p-3 bg-gray-50 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400 font-medium">七阶段进度</span>
                <span className="text-xs text-gray-400">{Math.round((project.currentStage / 7) * 100)}%</span>
              </div>
              <StageTracker project={project} />
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-6 gap-4 mt-4">
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">{project.totalUnits}</div>
                <div className="text-xs text-gray-400">总套数</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-brand-emerald">{project.reservedUnits}</div>
                <div className="text-xs text-gray-400">已预约</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-brand-orange">{project.lpCount}</div>
                <div className="text-xs text-gray-400">LP数</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">{formatMoney(project.totalInvestment)}</div>
                <div className="text-xs text-gray-400">总投资</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">{project.areaRange}</div>
                <div className="text-xs text-gray-400">面积段</div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-gray-800">¥{project.unitPrice.toLocaleString()}</div>
                <div className="text-xs text-gray-400">单价/㎡</div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-50">
              <button className="px-4 py-2 bg-brand-navy text-white rounded-lg text-sm font-medium hover:bg-blue-800 transition-colors">
                查看详情
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                📊 数据分析
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                👥 LP管理
              </button>
              <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                📝 阶段推进
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
