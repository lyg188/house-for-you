import React from 'react'
import { demandHeatmapData, customerSegments } from '../../shared/data.js'

function HeatmapRow({ region, score, demand, priceRange, maxScore }) {
  return (
    <div className="flex items-center gap-3 py-2.5">
      <div className="w-28 text-sm font-medium text-gray-700">{region}</div>
      <div className="flex-1">
        <div className="h-5 bg-gray-100 rounded-full overflow-hidden relative">
          <div className="h-full rounded-full bg-gradient-to-r from-brand-navy to-blue-400"
               style={{width: `${(score / maxScore) * 100}%`}} />
          <span className="absolute inset-0 flex items-center px-2 text-xs text-white font-medium">
            {score}分
          </span>
        </div>
      </div>
      <span className="text-xs text-gray-400 w-16 text-right">{demand}</span>
      <span className="text-xs text-gray-400 w-20 text-right">{priceRange}</span>
    </div>
  )
}

export default function DemandInsight() {
  const maxScore = Math.max(...demandHeatmapData.map(d => d.score))

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">🔍 需求洞察</h2>
        <p className="text-sm text-gray-400 mt-1">客户需求分析与客群画像</p>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {/* Demand Heatmap */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">🗺️ 区域需求热力图</h3>
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-3 pb-2 border-b border-gray-50">
            <span className="w-28">区域</span>
            <span className="flex-1">需求指数</span>
            <span className="w-16 text-right">客群类型</span>
            <span className="w-20 text-right">价格带</span>
          </div>
          {demandHeatmapData.map(d => (
            <HeatmapRow key={d.region} {...d} maxScore={maxScore} />
          ))}
        </div>

        {/* Customer Segments */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">👥 客群画像分析</h3>
            <div className="space-y-4">
              {customerSegments.map(seg => (
                <div key={seg.name}>
                  <div className="flex items-center justify-between mb-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full" style={{backgroundColor: seg.color}} />
                      <span className="text-sm font-medium text-gray-700">{seg.name}</span>
                    </div>
                    <span className="text-sm font-bold text-gray-800">{seg.percentage}%</span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="h-full rounded-full" style={{
                      width: `${seg.percentage}%`,
                      backgroundColor: seg.color
                    }} />
                  </div>
                  <div className="flex justify-between mt-1 text-xs text-gray-400">
                    <span>均龄 {seg.avgAge}岁</span>
                    <span>预算 ¥{(seg.avgBudget / 10000).toFixed(0)}万</span>
                    <span>偏好: {seg.topDemand}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Demand Trend */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">📈 需求趋势预测</h3>
            <div className="space-y-3">
              {[
                { label: '三房两厅需求', trend: '↑ 12%', color: 'text-brand-emerald' },
                { label: '智能家居关注度', trend: '↑ 28%', color: 'text-brand-emerald' },
                { label: '近地铁偏好', trend: '↑ 8%', color: 'text-brand-emerald' },
                { label: '大面积需求', trend: '↓ 5%', color: 'text-red-500' },
                { label: '精装交付偏好', trend: '↑ 15%', color: 'text-brand-emerald' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
                  <span className="text-sm text-gray-600">{item.label}</span>
                  <span className={`text-sm font-bold ${item.color}`}>{item.trend}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Concept Validation */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
        <h3 className="font-bold text-gray-800 mb-4">💡 产品概念验证数据</h3>
        <div className="grid grid-cols-4 gap-4">
          {[
            { concept: 'TOD地铁上盖', score: 4.6, count: 1523, verdict: '强烈推荐' },
            { concept: '低密花园洋房', score: 4.4, count: 1245, verdict: '推荐' },
            { concept: '智慧社区', score: 4.7, count: 1890, verdict: '强烈推荐' },
            { concept: '全龄友好社区', score: 4.3, count: 987, verdict: '推荐' },
          ].map((c, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-gray-800 text-sm">{c.concept}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  c.verdict === '强烈推荐' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                }`}>{c.verdict}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-brand-orange">{c.score}</span>
                <div className="text-xs text-gray-400">
                  <div>{c.count}人参与验证</div>
                  <div>满意度 {((c.score / 5) * 100).toFixed(0)}%</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
