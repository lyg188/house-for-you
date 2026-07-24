import React, { useState } from 'react'
import { myInvestments, investmentTransactions, projects } from '../../shared/data.js'
import { formatMoney, formatDate } from '../../shared/utils.js'

export default function Invest() {
  const [activeView, setActiveView] = useState('overview') // overview | projects | transactions

  const totalInvested = myInvestments.reduce((s, i) => s + i.amount, 0)
  const totalExpectedReturn = myInvestments.reduce((s, i) => s + i.estimatedReturn, 0)
  const totalCurrentValue = myInvestments.reduce((s, i) => s + i.currentValue, 0)

  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <h1 className="text-2xl font-bold">投资管理</h1>
        <p className="text-sm text-white/70 mt-1">投资合伙人 · LP</p>
      </div>

      {/* Sub-tabs */}
      <div className="bg-white px-5 py-2 border-b border-gray-100 flex gap-4">
        {[
          { id: 'overview', label: '📊 总览' },
          { id: 'projects', label: '🏗️ 项目' },
          { id: 'transactions', label: '💳 流水' },
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveView(tab.id)}
            className={`py-2 text-sm font-medium border-b-2 transition-colors ${
              activeView === tab.id
                ? 'border-brand-navy text-brand-navy'
                : 'border-transparent text-gray-400'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="px-5 py-4">
        {activeView === 'overview' && (
          <>
            {/* LP Status Card */}
            <div className="bg-gradient-to-br from-brand-navy to-blue-700 rounded-2xl p-5 text-white mb-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">LP身份</span>
                <span className="bg-white/20 px-3 py-0.5 rounded-full text-xs">活跃投资人</span>
              </div>
              <div className="mt-4 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-white/60">累计投资</div>
                  <div className="text-xl font-bold mt-1">{formatMoney(totalInvested)}</div>
                </div>
                <div>
                  <div className="text-xs text-white/60">当前估值</div>
                  <div className="text-xl font-bold mt-1 text-brand-emerald">{formatMoney(totalCurrentValue)}</div>
                </div>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-4">
                <div>
                  <div className="text-xs text-white/60">预期收益</div>
                  <div className="text-lg font-bold mt-1 text-brand-orange">{formatMoney(totalExpectedReturn)}</div>
                </div>
                <div>
                  <div className="text-xs text-white/60">投资回报率</div>
                  <div className="text-lg font-bold mt-1 text-green-300">
                    {((totalExpectedReturn / totalInvested) * 100).toFixed(1)}%
                  </div>
                </div>
              </div>
            </div>

            {/* GP Rating */}
            <div className="bg-white rounded-2xl p-5 card-shadow mb-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-gray-800">🏅 GP管理人评级</h3>
                <span className="text-xs text-gray-400">基于客户评价</span>
              </div>
              <div className="mt-3 flex items-center gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-brand-emerald">A+</div>
                  <div className="text-xs text-gray-400 mt-1">综合评级</div>
                </div>
                <div className="flex-1 space-y-2">
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                      <span>专业能力</span><span>4.8</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-navy rounded-full" style={{width: '96%'}} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                      <span>透明度</span><span>4.6</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-navy rounded-full" style={{width: '92%'}} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs text-gray-500 mb-0.5">
                      <span>回报能力</span><span>4.5</span>
                    </div>
                    <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div className="h-full bg-brand-navy rounded-full" style={{width: '90%'}} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Investment Portfolio */}
            <h3 className="font-bold text-gray-800 mb-3">📁 我的投资组合</h3>
            {myInvestments.map(inv => {
              const project = projects.find(p => p.id === inv.projectId)
              return (
                <div key={inv.id} className="bg-white rounded-2xl p-4 card-shadow mb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{project?.coverImage}</span>
                      <div>
                        <h4 className="font-bold text-gray-800 text-sm">{inv.projectName}</h4>
                        <span className="text-xs text-gray-400">份额 {inv.share.toFixed(4)}</span>
                      </div>
                    </div>
                    <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full">
                      {inv.status === 'active' ? '持有中' : '已退出'}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    <div>
                      <div className="text-xs text-gray-400">投入</div>
                      <div className="font-bold text-sm">{formatMoney(inv.amount)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">现值</div>
                      <div className="font-bold text-sm text-brand-emerald">{formatMoney(inv.currentValue)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400">预期回报</div>
                      <div className="font-bold text-sm text-brand-orange">{formatMoney(inv.estimatedReturn)}</div>
                    </div>
                  </div>
                </div>
              )
            })}

            {/* Available Projects */}
            <div className="bg-gradient-to-r from-brand-orange/10 to-orange-100 rounded-2xl p-5 mt-4">
              <h3 className="font-bold text-gray-800">🚀 新项目LP招募中</h3>
              <p className="text-sm text-gray-600 mt-1">星耀城项目正在招募投资合伙人，最低30万起投</p>
              <button className="mt-3 bg-brand-orange text-white px-5 py-2 rounded-xl text-sm font-bold hover:bg-orange-600 transition-colors">
                查看项目详情 →
              </button>
            </div>
          </>
        )}

        {activeView === 'projects' && (
          <div className="space-y-3">
            {myInvestments.map(inv => {
              const project = projects.find(p => p.id === inv.projectId)
              return (
                <div key={inv.id} className="bg-white rounded-2xl p-5 card-shadow">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{project?.coverImage}</span>
                    <div>
                      <h4 className="font-bold text-gray-800">{inv.projectName}</h4>
                      <p className="text-xs text-gray-400">{project?.location}</p>
                    </div>
                  </div>
                  <div className="mt-3 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-brand-navy to-brand-emerald rounded-full"
                         style={{width: `${((project?.currentStage || 1) / 7) * 100}%`}} />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-400">
                    <span>第{project?.currentStage}阶段</span>
                    <span>预期回报 {formatMoney(inv.estimatedReturn)}</span>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {activeView === 'transactions' && (
          <div className="space-y-2">
            <h3 className="font-bold text-gray-800 mb-3">💳 资金流水</h3>
            {investmentTransactions.map(tx => (
              <div key={tx.id} className="bg-white rounded-xl p-4 card-shadow flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg ${
                    tx.type === '分红' ? 'bg-green-50' : 'bg-blue-50'
                  }`}>
                    {tx.type === '分红' ? '💎' : '💵'}
                  </div>
                  <div>
                    <div className="font-medium text-sm text-gray-700">{tx.projectName}</div>
                    <div className="text-xs text-gray-400">{tx.type} · {formatDate(tx.date)}</div>
                  </div>
                </div>
                <div className="text-right">
                  <div className={`font-bold text-sm ${tx.type === '分红' ? 'text-brand-emerald' : 'text-gray-700'}`}>
                    {tx.type === '分红' ? '+' : '-'}¥{tx.amount.toLocaleString()}
                  </div>
                  <span className="text-xs text-gray-400">{tx.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="h-4" />
    </div>
  )
}
