import React from 'react'
import { dashboardStats, projects, riskAlerts, csiHistory } from '../../shared/data.js'
import { theme } from '../../shared/theme.js'
import { formatMoney } from '../../shared/utils.js'

function StatCard({ icon, label, value, sub, color }) {
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs text-gray-400 font-medium">{label}</div>
          <div className={`text-2xl font-bold mt-1 ${color || 'text-gray-800'}`}>{value}</div>
          {sub && <div className="text-xs text-gray-400 mt-1">{sub}</div>}
        </div>
        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-gray-50">
          {icon}
        </div>
      </div>
    </div>
  )
}

function CSIChart() {
  const maxCSI = 5
  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-bold text-gray-800">CSI 趋势 (近7个月)</h3>
        <span className="text-xs text-gray-400">目标线: 4.5</span>
      </div>
      <div className="flex items-end gap-4 h-40">
        {csiHistory.map((item, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <span className="text-xs font-bold text-gray-700">{item.csi}</span>
            <div className="w-full bg-gradient-to-t from-brand-navy to-blue-400 rounded-t"
                 style={{height: `${(item.csi / maxCSI) * 100}%`}} />
            <span className="text-[10px] text-gray-400">{item.month}</span>
          </div>
        ))}
      </div>
      <div className="mt-3 pt-3 border-t border-gray-50 flex justify-between text-xs text-gray-400">
        <span>平均CSI: {(csiHistory.reduce((s,i) => s + i.csi, 0) / csiHistory.length).toFixed(1)}</span>
        <span className="text-brand-emerald font-medium">↑ 趋势向好</span>
      </div>
    </div>
  )
}

export default function Dashboard() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">📊 仪表盘</h2>
        <p className="text-sm text-gray-400 mt-1">项目概览与关键指标</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard icon="🏗️" label="在管项目" value={dashboardStats.activeProjects} sub={`共${dashboardStats.totalProjects}个项目`} color="text-brand-navy" />
        <StatCard icon="👥" label="LP投资合伙人" value={dashboardStats.totalLP} sub="活跃投资人" color="text-brand-emerald" />
        <StatCard icon="⭐" label="综合CSI" value={dashboardStats.avgCSI} sub={`NPS ${dashboardStats.avgNPS}`} color="text-brand-orange" />
        <StatCard icon="💰" label="管理资金总额" value={formatMoney(dashboardStats.totalCapital)} sub="轻资产委托管理" color="text-brand-navy" />
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <CSIChart />

        {/* Risk Alerts */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-gray-800">⚠️ 风险预警</h3>
            <span className="text-xs text-gray-400">{riskAlerts.length}条预警</span>
          </div>
          <div className="space-y-3">
            {riskAlerts.map(risk => (
              <div key={risk.id} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
                <span className={`w-2 h-2 rounded-full mt-1.5 flex-shrink-0 ${
                  risk.level === 'red' ? 'bg-red-500' : risk.level === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
                }`} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-medium text-gray-500">{risk.project}</span>
                    <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${
                      risk.level === 'red' ? 'bg-red-50 text-red-600' :
                      risk.level === 'yellow' ? 'bg-yellow-50 text-yellow-600' :
                      'bg-green-50 text-green-600'
                    }`}>{risk.type}</span>
                  </div>
                  <p className="text-sm text-gray-700 mt-0.5">{risk.content}</p>
                  <p className="text-xs text-gray-400 mt-1">{risk.createdAt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Project Status Overview */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">📋 项目状态概览</h3>
        <div className="space-y-4">
          {projects.map(project => (
            <div key={project.id} className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors">
              <span className="text-2xl">{project.coverImage}</span>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-gray-800">{project.name}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    project.currentStage <= 2 ? 'bg-blue-50 text-blue-600' :
                    project.currentStage <= 4 ? 'bg-yellow-50 text-yellow-600' :
                    'bg-green-50 text-green-600'
                  }`}>{theme.stages[project.currentStage - 1].name}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex-1 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-navy to-brand-emerald"
                         style={{width: `${(project.currentStage / 7) * 100}%`}} />
                  </div>
                  <span className="text-xs text-gray-400">{Math.round((project.currentStage / 7) * 100)}%</span>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-gray-700">{project.reservedUnits}/{project.totalUnits}</div>
                <div className="text-xs text-gray-400">预约/总套数</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold text-brand-emerald">{project.lpCount}</div>
                <div className="text-xs text-gray-400">LP数</div>
              </div>
              {project.currentCSI && (
                <div className="text-right">
                  <div className="text-sm font-bold text-brand-orange">{project.currentCSI}</div>
                  <div className="text-xs text-gray-400">CSI</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
