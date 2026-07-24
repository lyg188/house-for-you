import React, { useState } from 'react'
import { csiHistory, touchpointEvaluations, improvementTickets, evaluations } from '../../shared/data.js'
import { formatDate } from '../../shared/utils.js'

function CSIGauge({ value, target }) {
  const percentage = (value / 5) * 100
  return (
    <div className="text-center">
      <div className="relative inline-flex items-center justify-center">
        <svg className="w-32 h-32 transform -rotate-90">
          <circle cx="64" cy="64" r="56" fill="none" stroke="#e2e8f0" strokeWidth="12" />
          <circle cx="64" cy="64" r="56" fill="none" stroke={value >= 4.5 ? '#38a169' : value >= 4 ? '#d69e2e' : '#e53e3e'}
                  strokeWidth="12" strokeLinecap="round"
                  strokeDasharray={`${percentage * 3.52} 352`} />
        </svg>
        <div className="absolute text-center">
          <div className="text-3xl font-bold text-gray-800">{value}</div>
          <div className="text-xs text-gray-400">/5.0</div>
        </div>
      </div>
      <div className="mt-2 text-xs text-gray-400">目标: {target}</div>
    </div>
  )
}

export default function Evaluation() {
  const [activeSection, setActiveSection] = useState('overview')

  const sections = [
    { id: 'overview', label: 'CSI总览' },
    { id: 'touchpoints', label: '触点分析' },
    { id: 'tickets', label: '改进工单' },
  ]

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">⭐ 客户评价</h2>
        <p className="text-sm text-gray-400 mt-1">CSI仪表盘 · 全触点分析 · 改进闭环</p>
      </div>

      {/* Sub-nav */}
      <div className="flex items-center gap-1 mb-6 bg-white rounded-lg p-1 shadow-sm border border-gray-100 w-fit">
        {sections.map(s => (
          <button
            key={s.id}
            onClick={() => setActiveSection(s.id)}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeSection === s.id
                ? 'bg-brand-navy text-white'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            {s.label}
          </button>
        ))}
      </div>

      {activeSection === 'overview' && (
        <>
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* CSI Gauge */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col items-center">
              <h3 className="font-bold text-gray-800 mb-4 self-start">🎯 综合CSI</h3>
              <CSIGauge value={4.5} target={4.5} />
            </div>

            {/* NPS Trend */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">📈 NPS趋势</h3>
              <div className="flex items-end gap-3 h-32">
                {csiHistory.map((item, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center gap-1">
                    <span className="text-xs font-bold text-gray-700">{item.nps}</span>
                    <div className="w-full bg-gradient-to-t from-brand-orange to-yellow-400 rounded-t"
                         style={{height: `${(item.nps / 60) * 100}%`}} />
                    <span className="text-[10px] text-gray-400">{item.month}</span>
                  </div>
                ))}
              </div>
              <div className="mt-2 text-xs text-center text-brand-emerald font-medium">↑ 行业平均NPS: 32</div>
            </div>

            {/* CSI vs NPS */}
            <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <h3 className="font-bold text-gray-800 mb-4">📊 关键指标</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>CSI</span><span className="font-bold text-brand-emerald">4.5</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-emerald rounded-full" style={{width: '90%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>NPS</span><span className="font-bold text-brand-orange">45</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-orange rounded-full" style={{width: '75%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>推荐率</span><span className="font-bold text-brand-navy">82%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-brand-navy rounded-full" style={{width: '82%'}} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>评价覆盖率</span><span className="font-bold text-gray-700">94%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gray-700 rounded-full" style={{width: '94%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {activeSection === 'touchpoints' && (
        <div className="grid grid-cols-2 gap-4">
          {/* Touchpoint Scores */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">🎯 全触点评价分析</h3>
            <div className="space-y-3">
              {touchpointEvaluations.map(tp => (
                <div key={tp.touchpoint} className="flex items-center gap-3">
                  <span className="text-sm text-gray-600 w-20">{tp.touchpoint}</span>
                  <div className="flex-1 h-5 bg-gray-100 rounded-full overflow-hidden relative">
                    <div className="h-full rounded-full bg-gradient-to-r from-brand-navy to-blue-400"
                         style={{width: `${(tp.score / 5) * 100}%`}} />
                    <span className="absolute inset-0 flex items-center px-2 text-xs text-white font-medium">
                      {tp.score}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 w-16 text-right">{tp.count}条</span>
                  <span className={`text-xs ${tp.trend === 'up' ? 'text-brand-emerald' : tp.trend === 'down' ? 'text-red-500' : 'text-gray-400'}`}>
                    {tp.trend === 'up' ? '↑' : tp.trend === 'down' ? '↓' : '→'}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Evaluations */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">💬 最新评价详情</h3>
            <div className="space-y-3">
              {evaluations.map(ev => (
                <div key={ev.id} className="border-b border-gray-50 pb-3 last:border-0">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-sm text-gray-700">{ev.projectName}</span>
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{ev.stage}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className={`text-sm font-bold ${
                        ev.score >= 4.5 ? 'text-brand-emerald' :
                        ev.score >= 4 ? 'text-brand-orange' : 'text-red-500'
                      }`}>{ev.score}</span>
                      <span className="text-yellow-400 text-xs">{'★'.repeat(Math.round(ev.score))}</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">"{ev.content}"</p>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs text-gray-400">{formatDate(ev.date)}</span>
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      ev.sentiment === 'positive' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                    }`}>
                      {ev.sentiment === 'positive' ? '😊 正向' : '😐 中性'}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {activeSection === 'tickets' && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="p-5 border-b border-gray-100">
            <h3 className="font-bold text-gray-800">🔧 评价驱动改进工单</h3>
            <p className="text-xs text-gray-400 mt-1">客户评价 → 自动派单 → 改进执行 → 客户确认闭环</p>
          </div>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 text-left">
                <th className="px-5 py-3 text-xs font-medium text-gray-500">工单ID</th>
                <th className="px-5 py-3 text-xs font-medium text-gray-500">项目</th>
                <th className="px-5 py-3 text-xs font-medium text-gray-500">问题描述</th>
                <th className="px-5 py-3 text-xs font-medium text-gray-500">来源</th>
                <th className="px-5 py-3 text-xs font-medium text-gray-500">严重度</th>
                <th className="px-5 py-3 text-xs font-medium text-gray-500">状态</th>
                <th className="px-5 py-3 text-xs font-medium text-gray-500">截止日期</th>
              </tr>
            </thead>
            <tbody>
              {improvementTickets.map(ticket => (
                <tr key={ticket.id} className="border-t border-gray-50 hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 text-sm font-mono text-gray-500">{ticket.id}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{ticket.project}</td>
                  <td className="px-5 py-3 text-sm text-gray-700">{ticket.issue}</td>
                  <td className="px-5 py-3">
                    <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{ticket.source}</span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full ${
                      ticket.severity === 'red' ? 'bg-red-50 text-red-600' :
                      ticket.severity === 'yellow' ? 'bg-yellow-50 text-yellow-600' :
                      'bg-green-50 text-green-600'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        ticket.severity === 'red' ? 'bg-red-500' :
                        ticket.severity === 'yellow' ? 'bg-yellow-500' : 'bg-green-500'
                      }`} />
                      {ticket.severity === 'red' ? '红灯' : ticket.severity === 'yellow' ? '黄灯' : '绿灯'}
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${
                      ticket.status === '已完成' ? 'bg-green-50 text-green-600' :
                      ticket.status === '处理中' ? 'bg-blue-50 text-blue-600' :
                      'bg-gray-100 text-gray-500'
                    }`}>{ticket.status}</span>
                  </td>
                  <td className="px-5 py-3 text-xs text-gray-400">{ticket.dueAt}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="px-5 py-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-400">
            <span>共 {improvementTickets.length} 条工单</span>
            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-red-500" /> 红灯 0</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-yellow-500" /> 黄灯 2</span>
              <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> 绿灯 1</span>
              <span>已完成 1</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
