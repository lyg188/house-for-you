import React from 'react'
import { aiModelData } from '../../shared/data.js'

export default function AIEngine() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">🤖 AI引擎</h2>
        <p className="text-sm text-gray-400 mt-1">需求预测 · 产品推荐 · 质量评估 · 服务匹配</p>
      </div>

      {/* Model Cards */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        {[
          { ...aiModelData.demandPrediction, name: '需求预测引擎', icon: '🔮', desc: '基于客户画像和需求标签，预测区域需求趋势和产品偏好' },
          { ...aiModelData.productRecommend, name: '产品推荐引擎', icon: '🎯', desc: '基于设计偏好和行为数据，推荐最优模块化配置方案' },
          { ...aiModelData.qualityEval, name: '质量评估引擎', icon: '🛡️', desc: '基于过程数据和评价反馈，实时评估项目质量和风险' },
          { ...aiModelData.serviceMatch, name: '服务匹配引擎', icon: '🤝', desc: '基于客户生命周期数据，推荐个性化服务和二次需求' },
        ].map(model => (
          <div key={model.name} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{model.icon}</span>
                <h3 className="font-bold text-gray-800">{model.name}</h3>
              </div>
              <span className="text-xs bg-blue-50 text-blue-600 px-2 py-0.5 rounded-full">{model.version}</span>
            </div>
            <p className="text-sm text-gray-500 mb-4">{model.desc}</p>
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-brand-emerald">{model.accuracy}%</div>
                <div className="text-xs text-gray-400">准确率</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="text-lg font-bold text-brand-navy">{model.trainingSamples.toLocaleString()}</div>
                <div className="text-xs text-gray-400">训练样本</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3 text-center">
                <div className="text-sm font-medium text-gray-600">{model.lastTrained}</div>
                <div className="text-xs text-gray-400">最后训练</div>
              </div>
            </div>
            <div className="flex gap-2 mt-4">
              <button className="flex-1 py-2 bg-brand-navy text-white rounded-lg text-xs font-medium">模型详情</button>
              <button className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">重新训练</button>
            </div>
          </div>
        ))}
      </div>

      {/* Training Data Overview */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">📊 数据飞轮状态</h3>
          <div className="space-y-4">
            {[
              { label: '客户需求数据', value: '12,580条', pct: 92 },
              { label: '设计交互数据', value: '8,920条', pct: 85 },
              { label: '建造过程数据', value: '4,560条', pct: 78 },
              { label: '客户评价数据', value: '6,780条', pct: 88 },
              { label: '居住运营数据', value: '1,240条', pct: 35 },
            ].map(d => (
              <div key={d.label}>
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>{d.label}</span>
                  <span>{d.value}</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div className={`h-full rounded-full ${
                    d.pct > 80 ? 'bg-brand-emerald' : d.pct > 50 ? 'bg-brand-orange' : 'bg-yellow-400'
                  }`} style={{width: `${d.pct}%`}} />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
            💡 居住运营数据覆盖率较低（35%），建议加强入住后数据采集
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">🎯 模型优化建议</h3>
          <div className="space-y-3">
            {[
              { title: '需求预测模型', suggestion: '建议增加季节因素特征，提升跨季度预测准确率', priority: '高' },
              { title: '产品推荐模型', suggestion: '新模块上线后需重新训练，当前冷启动问题明显', priority: '中' },
              { title: '质量评估模型', suggestion: '准确率已达91%，建议扩展至安全风险预测', priority: '低' },
              { title: '服务匹配模型', suggestion: '准确率低于80%，建议引入更多客户行为特征', priority: '高' },
            ].map(item => (
              <div key={item.title} className="p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">{item.title}</span>
                  <span className={`text-xs px-2 py-0.5 rounded-full ${
                    item.priority === '高' ? 'bg-red-50 text-red-600' :
                    item.priority === '中' ? 'bg-yellow-50 text-yellow-600' :
                    'bg-green-50 text-green-600'
                  }`}>优先级: {item.priority}</span>
                </div>
                <p className="text-xs text-gray-500">{item.suggestion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
