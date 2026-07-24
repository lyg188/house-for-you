import React from 'react'
import { designLibrary, engineeringData, projects } from '../../shared/data.js'

export default function DesignEngineering() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">📐 设计与工程</h2>
        <p className="text-sm text-gray-400 mt-1">设计协同看板 · 模块化产品库 · 工程进度 · 质量检查</p>
      </div>

      {/* Design Library */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-4">🎨 模块化产品库</h3>
        <div className="grid grid-cols-3 gap-4">
          {designLibrary.map(d => (
            <div key={d.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
              <div className="flex items-center justify-between mb-3">
                <span className="text-3xl">{d.preview}</span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{d.type}</span>
              </div>
              <h4 className="font-bold text-gray-800 text-sm">{d.name}</h4>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-400">
                <span>使用 {d.usage}次</span>
                <span className="text-yellow-500">★ {d.rating}</span>
              </div>
              <div className="flex gap-1 mt-3">
                <button className="flex-1 py-1.5 bg-brand-navy text-white rounded text-xs">编辑</button>
                <button className="flex-1 py-1.5 bg-gray-100 text-gray-600 rounded text-xs">预览</button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 flex gap-2">
          <button className="px-4 py-2 bg-brand-navy text-white rounded-lg text-sm font-medium">+ 新增模块</button>
          <button className="px-4 py-2 bg-gray-100 text-gray-600 rounded-lg text-sm font-medium">📥 导入模板</button>
        </div>
      </div>

      {/* Engineering Progress */}
      <div className="mb-6">
        <h3 className="font-bold text-gray-800 mb-4">🏗️ 工程进度管理</h3>
        <div className="space-y-4">
          {engineeringData.map(eng => (
            <div key={eng.project} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between mb-3">
                <h4 className="font-bold text-gray-800">{eng.project}</h4>
                <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">
                  下个节点: {eng.nextMilestone}
                </span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-gradient-to-r from-brand-navy to-brand-emerald"
                       style={{width: `${eng.progress}%`}} />
                </div>
                <span className="text-sm font-bold text-gray-700">{eng.progress}%</span>
              </div>
              <div className="grid grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">{eng.qualityScore || '—'}</div>
                  <div className="text-xs text-gray-400">质量评分</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-brand-emerald">{eng.safetyDays}</div>
                  <div className="text-xs text-gray-400">安全天数</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-800">{eng.workers}</div>
                  <div className="text-xs text-gray-400">在岗工人</div>
                </div>
                <div className="text-center">
                  <button className="text-xs text-brand-navy font-medium hover:underline">查看详情 →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quality Check */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">✅ 质量检查记录（最近）</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-4 py-2 text-xs font-medium text-gray-500">项目</th>
              <th className="px-4 py-2 text-xs font-medium text-gray-500">检查项</th>
              <th className="px-4 py-2 text-xs font-medium text-gray-500">结果</th>
              <th className="px-4 py-2 text-xs font-medium text-gray-500">检查人</th>
              <th className="px-4 py-2 text-xs font-medium text-gray-500">日期</th>
            </tr>
          </thead>
          <tbody>
            {[
              { project: '翡翠湾花园', item: '主体结构15层验收', result: '合格', inspector: '陈监理', date: '2026-07-15' },
              { project: '翡翠湾花园', item: '水电预埋验收', result: '合格', inspector: '王工', date: '2026-07-12' },
              { project: '云栖山居', item: '基础钢筋验收', result: '合格', inspector: '李监理', date: '2026-07-14' },
              { project: '云栖山居', item: '防水层检查', result: '整改中', inspector: '赵工', date: '2026-07-10' },
            ].map((qc, i) => (
              <tr key={i} className="border-t border-gray-50">
                <td className="px-4 py-2 text-sm text-gray-700">{qc.project}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{qc.item}</td>
                <td className="px-4 py-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    qc.result === '合格' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                  }`}>{qc.result}</span>
                </td>
                <td className="px-4 py-2 text-sm text-gray-500">{qc.inspector}</td>
                <td className="px-4 py-2 text-xs text-gray-400">{qc.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
