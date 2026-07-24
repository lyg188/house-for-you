import React, { useState } from 'react'
import { lpList, projects } from '../../shared/data.js'
import { formatMoney, formatDate } from '../../shared/utils.js'

export default function LPManage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? lpList : lpList.filter(l => l.status === filter)

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">👥 LP投资合伙人管理</h2>
        <p className="text-sm text-gray-400 mt-1">投资人审核 · 资金监管 · 份额管理 · 分红计算</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        {[
          { label: 'LP总数', value: lpList.length, icon: '👥', color: 'text-brand-navy' },
          { label: 'VIP投资人', value: lpList.filter(l => l.level === 'VIP').length, icon: '💎', color: 'text-brand-orange' },
          { label: '待审核', value: lpList.filter(l => l.status === 'pending').length, icon: '⏳', color: 'text-yellow-500' },
          { label: '累计投资', value: formatMoney(lpList.reduce((s, l) => s + l.investTotal, 0)), icon: '💰', color: 'text-brand-emerald' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs text-gray-400">{stat.label}</div>
                <div className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</div>
              </div>
              <span className="text-2xl">{stat.icon}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Filter */}
      <div className="flex items-center gap-2 mb-4">
        {[
          { id: 'all', label: '全部' },
          { id: 'active', label: '活跃' },
          { id: 'pending', label: '待审核' },
        ].map(f => (
          <button key={f.id} onClick={() => setFilter(f.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium ${
              filter === f.id ? 'bg-brand-navy text-white' : 'bg-gray-100 text-gray-600'
            }`}>{f.label}</button>
        ))}
      </div>

      {/* LP Table */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50 text-left">
              <th className="px-5 py-3 text-xs font-medium text-gray-500">LP</th>
              <th className="px-5 py-3 text-xs font-medium text-gray-500">等级</th>
              <th className="px-5 py-3 text-xs font-medium text-gray-500">累计投资</th>
              <th className="px-5 py-3 text-xs font-medium text-gray-500">参与项目</th>
              <th className="px-5 py-3 text-xs font-medium text-gray-500">加入日期</th>
              <th className="px-5 py-3 text-xs font-medium text-gray-500">状态</th>
              <th className="px-5 py-3 text-xs font-medium text-gray-500">操作</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map(lp => (
              <tr key={lp.id} className="border-t border-gray-50 hover:bg-gray-50">
                <td className="px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">{lp.avatar}</span>
                    <span className="text-sm font-medium text-gray-700">{lp.name}</span>
                  </div>
                </td>
                <td className="px-5 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    lp.level === 'VIP' ? 'bg-orange-50 text-orange-600' :
                    lp.level === '潜在' ? 'bg-gray-100 text-gray-500' : 'bg-blue-50 text-blue-600'
                  }`}>{lp.level}</span>
                </td>
                <td className="px-5 py-3 text-sm font-bold text-gray-700">{formatMoney(lp.investTotal)}</td>
                <td className="px-5 py-3 text-sm text-gray-600">{lp.projects}个</td>
                <td className="px-5 py-3 text-xs text-gray-400">{lp.joinDate}</td>
                <td className="px-5 py-3">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    lp.status === 'active' ? 'bg-green-50 text-green-600' : 'bg-yellow-50 text-yellow-600'
                  }`}>{lp.status === 'active' ? '活跃' : '待审核'}</span>
                </td>
                <td className="px-5 py-3">
                  <div className="flex gap-1">
                    <button className="text-xs text-brand-navy hover:underline">详情</button>
                    <button className="text-xs text-gray-400 hover:underline ml-2">编辑</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Fund Monitoring */}
      <div className="grid grid-cols-2 gap-4 mt-6">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">🏦 资金监管概览</h3>
          <div className="space-y-3">
            {projects.map(p => (
              <div key={p.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <span className="text-sm font-medium text-gray-700">{p.name}</span>
                  <div className="text-xs text-gray-400 mt-0.5">{p.lpCount}位LP</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-700">{formatMoney(p.totalInvestment)}</div>
                  <div className="text-xs text-gray-400">总资金</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-brand-emerald">
                    {Math.round((p.reservedUnits / p.totalUnits) * 100)}%
                  </div>
                  <div className="text-xs text-gray-400">募集进度</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">💎 分红计算器</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">项目利润池</span>
              <span className="font-bold">¥1.25亿</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">LP分配总额 (80%)</span>
              <span className="font-bold text-brand-emerald">¥1.00亿</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">GP业绩报酬 (20%)</span>
              <span className="font-bold text-brand-orange">¥2500万</span>
            </div>
            <div className="border-t pt-2 flex justify-between text-sm">
              <span className="text-gray-500">每万元LP份额分红</span>
              <span className="font-bold text-brand-navy">¥1,180</span>
            </div>
            <div className="text-xs text-gray-400">* 基于翡翠湾花园项目模拟测算，实际分红以项目清算为准</div>
          </div>
        </div>
      </div>
    </div>
  )
}
