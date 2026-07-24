import React, { useState } from 'react'
import { currentUser, evaluations, notifications, investGuide, faqList } from '../../shared/data.js'
import { formatDate } from '../../shared/utils.js'

function ProfileHome({ onNavigate }) {
  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center text-3xl">
            {currentUser.avatar}
          </div>
          <div>
            <h1 className="text-xl font-bold">{currentUser.name}</h1>
            <p className="text-sm text-white/70">LP投资合伙人 · 活跃</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-3">
          <div className="bg-white/15 rounded-xl p-3 text-center">
            <div className="text-lg font-bold">2</div>
            <div className="text-xs text-white/70">参与项目</div>
          </div>
          <div className="bg-white/15 rounded-xl p-3 text-center">
            <div className="text-lg font-bold">{evaluations.length}</div>
            <div className="text-xs text-white/70">评价记录</div>
          </div>
          <div className="bg-white/15 rounded-xl p-3 text-center">
            <div className="text-lg font-bold">CSI 4.5</div>
            <div className="text-xs text-white/70">评价均分</div>
          </div>
        </div>
      </div>

      <div className="px-5 -mt-3 space-y-4">
        {/* Demand Tags */}
        <div className="bg-white rounded-2xl p-5 card-shadow">
          <h3 className="font-bold text-gray-800 mb-3">🏷️ 我的需求画像</h3>
          <div className="flex flex-wrap gap-2">
            {currentUser.demandTags.map(tag => (
              <span key={tag} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium">
                {tag}
              </span>
            ))}
          </div>
          <p className="text-sm text-gray-500 mt-3">💡 {currentUser.lifestyle}</p>
          <button className="mt-3 text-sm text-brand-navy font-medium" onClick={() => onNavigate('demand-edit')}>编辑需求画像 →</button>
        </div>

        {/* Evaluation History */}
        <div className="bg-white rounded-2xl p-5 card-shadow">
          <h3 className="font-bold text-gray-800 mb-3">⭐ 我的评价记录</h3>
          {evaluations.slice(0, 3).map(ev => (
            <div key={ev.id} className="border-b border-gray-50 py-3 last:border-0">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium text-sm text-gray-700">{ev.projectName}</span>
                  <span className="text-xs text-gray-400 ml-2">{ev.stage}</span>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-brand-orange font-bold">{ev.score}</span>
                  <span className="text-yellow-400 text-xs">{'★'.repeat(Math.round(ev.score))}</span>
                </div>
              </div>
              <p className="text-sm text-gray-600 mt-1">"{ev.content}"</p>
              <p className="text-xs text-gray-400 mt-0.5">{formatDate(ev.date)}</p>
            </div>
          ))}
          <button className="mt-2 text-sm text-brand-navy font-medium" onClick={() => onNavigate('evaluations')}>查看全部评价 →</button>
        </div>

        {/* Menu Items */}
        <div className="bg-white rounded-2xl card-shadow overflow-hidden">
          {[
            { icon: '📋', label: '我的设计方案', desc: '查看已保存的户型配置', nav: 'designs' },
            { icon: '🔔', label: '消息通知', desc: `${notifications.filter(n => !n.read).length}条未读消息`, badge: String(notifications.filter(n => !n.read).length), nav: 'notifications' },
            { icon: '👥', label: '邀请好友', desc: '邀请成为LP，双方获奖励', nav: 'invite' },
            { icon: '📖', label: '投资指南', desc: '了解LP投资合伙人制度', nav: 'guide' },
            { icon: '❓', label: '帮助与客服', desc: '常见问题与在线客服', nav: 'faq' },
            { icon: '⚙️', label: '设置', desc: '账户安全、隐私、偏好', nav: 'settings' },
          ].map((item, i) => (
            <div key={i} onClick={() => onNavigate(item.nav)}
                 className="flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <div>
                  <div className="text-sm font-medium text-gray-700">{item.label}</div>
                  <div className="text-xs text-gray-400">{item.desc}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {item.badge && item.badge !== '0' && (
                  <span className="bg-red-500 text-white text-xs min-w-[20px] h-5 rounded-full flex items-center justify-center px-1">
                    {item.badge}
                  </span>
                )}
                <span className="text-gray-300">›</span>
              </div>
            </div>
          ))}
        </div>

        {/* Brand Footer */}
        <div className="text-center py-6">
          <p className="text-sm font-bold text-brand-navy">🏠 房找人</p>
          <p className="text-xs text-gray-400 mt-1">你参与创造的理想家</p>
          <p className="text-xs text-gray-300 mt-2">v2.0 · 客户即投资人</p>
        </div>
      </div>
      <div className="h-4" />
    </div>
  )
}

function NotificationsPage({ onBack }) {
  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <button onClick={onBack} className="text-white/70 text-sm mb-3">← 返回</button>
        <h1 className="text-2xl font-bold">消息通知</h1>
      </div>
      <div className="px-5 -mt-3">
        <div className="bg-white rounded-2xl card-shadow overflow-hidden">
          {notifications.map(n => (
            <div key={n.id} className={`px-5 py-4 border-b border-gray-50 last:border-0 flex items-start gap-3 ${n.read ? 'opacity-60' : ''}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0 ${
                n.type === 'progress' ? 'bg-blue-50' :
                n.type === 'evaluation' ? 'bg-yellow-50' :
                n.type === 'dividend' ? 'bg-green-50' :
                n.type === 'vote' ? 'bg-purple-50' :
                n.type === 'community' ? 'bg-pink-50' : 'bg-gray-50'
              }`}>
                {n.type === 'progress' ? '🏗️' : n.type === 'evaluation' ? '⭐' :
                 n.type === 'dividend' ? '💎' : n.type === 'vote' ? '🗳️' :
                 n.type === 'community' ? '💬' : '📢'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <h4 className="font-medium text-sm text-gray-800">{n.title}</h4>
                  {!n.read && <span className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0" />}
                </div>
                <p className="text-sm text-gray-600 mt-0.5">{n.content}</p>
                <p className="text-xs text-gray-400 mt-1">{n.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function InvestGuidePage({ onBack }) {
  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <button onClick={onBack} className="text-white/70 text-sm mb-3">← 返回</button>
        <h1 className="text-2xl font-bold">📖 投资指南</h1>
        <p className="text-sm text-white/70 mt-1">了解LP投资合伙人制度</p>
      </div>
      <div className="px-5 -mt-3 py-4 space-y-4">
        {investGuide.sections.map((s, i) => (
          <div key={i} className="bg-white rounded-2xl p-5 card-shadow">
            <h3 className="font-bold text-gray-800 mb-2">{i + 1}. {s.title}</h3>
            <p className="text-sm text-gray-600 leading-relaxed">{s.content}</p>
          </div>
        ))}
        <div className="bg-gradient-to-r from-brand-orange/10 to-orange-100 rounded-2xl p-5 text-center">
          <p className="text-sm text-gray-700 font-medium">还有疑问？</p>
          <button className="mt-2 bg-brand-orange text-white px-6 py-2 rounded-xl text-sm font-bold">
            预约专属顾问咨询
          </button>
        </div>
      </div>
    </div>
  )
}

function FAQPage({ onBack }) {
  const [openIdx, setOpenIdx] = useState(null)
  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <button onClick={onBack} className="text-white/70 text-sm mb-3">← 返回</button>
        <h1 className="text-2xl font-bold">❓ 帮助与客服</h1>
        <p className="text-sm text-white/70 mt-1">常见问题解答</p>
      </div>
      <div className="px-5 -mt-3 py-4 space-y-2">
        {faqList.map((faq, i) => (
          <div key={i} className="bg-white rounded-xl card-shadow overflow-hidden">
            <button
              onClick={() => setOpenIdx(openIdx === i ? null : i)}
              className="w-full text-left px-5 py-4 flex items-center justify-between"
            >
              <span className="font-medium text-sm text-gray-800 pr-4">{faq.q}</span>
              <span className={`text-gray-400 transition-transform ${openIdx === i ? 'rotate-180' : ''}`}>▼</span>
            </button>
            {openIdx === i && (
              <div className="px-5 pb-4">
                <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            )}
          </div>
        ))}
        <div className="bg-white rounded-2xl p-5 card-shadow mt-4 text-center">
          <p className="text-sm text-gray-600">没找到答案？</p>
          <div className="flex gap-2 mt-3 justify-center">
            <button className="bg-brand-navy text-white px-5 py-2 rounded-xl text-sm font-medium">💬 在线客服</button>
            <button className="bg-green-50 text-green-600 px-5 py-2 rounded-xl text-sm font-medium">📞 电话咨询</button>
          </div>
        </div>
      </div>
    </div>
  )
}

function InvitePage({ onBack }) {
  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <button onClick={onBack} className="text-white/70 text-sm mb-3">← 返回</button>
        <h1 className="text-2xl font-bold">👥 邀请好友</h1>
        <p className="text-sm text-white/70 mt-1">邀请成为LP，双方获奖励</p>
      </div>
      <div className="px-5 -mt-3 py-4 space-y-4">
        <div className="bg-gradient-to-br from-brand-navy to-blue-700 rounded-2xl p-6 text-white text-center">
          <div className="text-5xl mb-3">🎁</div>
          <h3 className="font-bold text-lg">邀请奖励计划</h3>
          <p className="text-sm text-white/70 mt-1">邀请好友成为LP投资合伙人</p>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <div className="bg-white/15 rounded-xl p-3">
              <div className="text-2xl font-bold">¥3,000</div>
              <div className="text-xs text-white/70">邀请奖励</div>
            </div>
            <div className="bg-white/15 rounded-xl p-3">
              <div className="text-2xl font-bold">0.1%</div>
              <div className="text-xs text-white/70">管理费减免</div>
            </div>
          </div>
          <button className="mt-4 bg-white text-brand-navy font-bold px-8 py-3 rounded-xl text-sm w-full">
            📤 立即邀请
          </button>
          <p className="text-xs text-white/50 mt-2">我的邀请码: FYR2026M88</p>
        </div>
        <div className="bg-white rounded-2xl p-5 card-shadow">
          <h3 className="font-bold text-gray-800 mb-3">📋 邀请记录</h3>
          <div className="text-center py-6 text-gray-400 text-sm">
            <div className="text-3xl mb-2">📭</div>
            暂无邀请记录<br/>分享你的邀请码，邀请好友加入
          </div>
        </div>
      </div>
    </div>
  )
}

function SettingsPage({ onBack }) {
  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <button onClick={onBack} className="text-white/70 text-sm mb-3">← 返回</button>
        <h1 className="text-2xl font-bold">⚙️ 设置</h1>
      </div>
      <div className="px-5 -mt-3 py-4">
        <div className="bg-white rounded-2xl card-shadow overflow-hidden">
          {[
            { label: '账户安全', desc: '修改密码、绑定手机', icon: '🔒' },
            { label: '隐私设置', desc: '管理个人信息可见范围', icon: '👁️' },
            { label: '通知偏好', desc: '推送通知、邮件、短信', icon: '🔔' },
            { label: '需求画像', desc: '更新居住偏好标签', icon: '🏷️' },
            { label: '实名认证', desc: '已完成 · 张*远', icon: '✅' },
            { label: '银行卡管理', desc: '绑定分红收款账户', icon: '💳' },
            { label: '关于房找人', desc: 'v2.0.0 · 客户即投资人', icon: 'ℹ️' },
            { label: '退出登录', desc: '', icon: '🚪', danger: true },
          ].map((item, i) => (
            <div key={i} className={`flex items-center justify-between px-5 py-3.5 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-0 ${item.danger ? 'text-red-500' : ''}`}>
              <div className="flex items-center gap-3">
                <span className="text-lg">{item.icon}</span>
                <div>
                  <div className={`text-sm font-medium ${item.danger ? 'text-red-500' : 'text-gray-700'}`}>{item.label}</div>
                  {item.desc && <div className="text-xs text-gray-400">{item.desc}</div>}
                </div>
              </div>
              <span className="text-gray-300">›</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function DemandEditPage({ onBack }) {
  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <button onClick={onBack} className="text-white/70 text-sm mb-3">← 返回</button>
        <h1 className="text-2xl font-bold">编辑需求画像</h1>
      </div>
      <div className="px-5 -mt-3 py-4 space-y-4">
        <div className="bg-white rounded-2xl p-5 card-shadow">
          <h3 className="font-bold text-gray-800 mb-3">🏷️ 当前标签</h3>
          <div className="flex flex-wrap gap-2">
            {currentUser.demandTags.map(tag => (
              <span key={tag} className="bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1">
                {tag} <span className="cursor-pointer text-blue-400">×</span>
              </span>
            ))}
          </div>
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-600 mb-2">添加新标签</h4>
            <div className="flex flex-wrap gap-2">
              {['近商圈', '低密社区', '江景房', '养老社区', '科技住宅', '小户型', '别墅', '花园洋房'].map(tag => (
                <span key={tag} className="bg-gray-100 text-gray-500 px-3 py-1.5 rounded-full text-xs cursor-pointer hover:bg-blue-50 hover:text-blue-600 transition-colors">
                  + {tag}
                </span>
              ))}
            </div>
          </div>
          <button className="mt-4 w-full bg-brand-navy text-white py-3 rounded-xl font-bold text-sm">保存画像</button>
        </div>
      </div>
    </div>
  )
}

function DesignsPage({ onBack }) {
  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <button onClick={onBack} className="text-white/70 text-sm mb-3">← 返回</button>
        <h1 className="text-2xl font-bold">📋 我的设计方案</h1>
      </div>
      <div className="px-5 -mt-3 py-4 space-y-3">
        <div className="bg-white rounded-2xl p-5 card-shadow">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800">翡翠湾花园 · 方案A</h3>
              <p className="text-xs text-gray-400 mt-0.5">保存于 2026-01-15</p>
            </div>
            <span className="text-xs bg-green-50 text-green-600 px-2 py-0.5 rounded-full">当前方案</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-gray-600">
            <span>🏠 三房两厅两卫</span><span>🎨 现代简约</span>
            <span>🤖 智能舒适包</span><span>📦 升级收纳</span>
          </div>
          <div className="flex gap-2 mt-3">
            <button className="flex-1 py-2 bg-brand-navy text-white rounded-lg text-xs font-medium">编辑方案</button>
            <button className="flex-1 py-2 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium">复制方案</button>
          </div>
        </div>
        <div className="bg-white rounded-2xl p-5 card-shadow opacity-50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-bold text-gray-800">翡翠湾花园 · 方案B</h3>
              <p className="text-xs text-gray-400 mt-0.5">保存于 2025-12-20</p>
            </div>
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">备用方案</span>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-3 text-sm text-gray-600">
            <span>🏠 四房两厅两卫</span><span>🎨 新中式</span>
            <span>🤖 全屋智能</span><span>📦 定制收纳</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function EvaluationsAllPage({ onBack }) {
  return (
    <div>
      <div className="gradient-hero px-5 pt-12 pb-8 text-white">
        <button onClick={onBack} className="text-white/70 text-sm mb-3">← 返回</button>
        <h1 className="text-2xl font-bold">⭐ 全部评价</h1>
      </div>
      <div className="px-5 -mt-3 py-4 space-y-3">
        {evaluations.map(ev => (
          <div key={ev.id} className="bg-white rounded-xl p-4 card-shadow">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-medium text-sm text-gray-700">{ev.projectName}</span>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{ev.stage}</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-brand-orange font-bold">{ev.score}</span>
                <span className="text-yellow-400 text-xs">{'★'.repeat(Math.round(ev.score))}</span>
              </div>
            </div>
            <p className="text-sm text-gray-600 mt-1.5">"{ev.content}"</p>
            <p className="text-xs text-gray-400 mt-1">{formatDate(ev.date)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Profile() {
  const [page, setPage] = useState('home')

  if (page === 'home') return <ProfileHome onNavigate={setPage} />
  if (page === 'notifications') return <NotificationsPage onBack={() => setPage('home')} />
  if (page === 'guide') return <InvestGuidePage onBack={() => setPage('home')} />
  if (page === 'faq') return <FAQPage onBack={() => setPage('home')} />
  if (page === 'invite') return <InvitePage onBack={() => setPage('home')} />
  if (page === 'settings') return <SettingsPage onBack={() => setPage('home')} />
  if (page === 'demand-edit') return <DemandEditPage onBack={() => setPage('home')} />
  if (page === 'designs') return <DesignsPage onBack={() => setPage('home')} />
  if (page === 'evaluations') return <EvaluationsAllPage onBack={() => setPage('home')} />
  return <ProfileHome onNavigate={setPage} />
}
