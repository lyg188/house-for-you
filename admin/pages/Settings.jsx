import React from 'react'

export default function Settings() {
  return (
    <div>
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">⚙️ 设置</h2>
        <p className="text-sm text-gray-400 mt-1">团队管理 · 权限配置 · 系统设置</p>
      </div>

      <div className="grid grid-cols-2 gap-6">
        {/* Team Management */}
        <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
          <h3 className="font-bold text-gray-800 mb-4">👥 团队管理</h3>
          <div className="space-y-3">
            {[
              { name: '张管理', role: 'GP · 委托管理人', avatar: '👤', status: '在线' },
              { name: '李明', role: '工程总监', avatar: '👷', status: '在线' },
              { name: '王芳', role: '产品经理', avatar: '👩‍💼', status: '离线' },
              { name: '陈工', role: '设计总监', avatar: '👨‍🎨', status: '在线' },
              { name: '赵敏', role: '运营经理', avatar: '👩‍💻', status: '在线' },
              { name: '周监理', role: '质量监理', avatar: '👨‍🔧', status: '离线' },
            ].map(member => (
              <div key={member.name} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="text-xl">{member.avatar}</span>
                  <div>
                    <div className="text-sm font-medium text-gray-700">{member.name}</div>
                    <div className="text-xs text-gray-400">{member.role}</div>
                  </div>
                </div>
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  member.status === '在线' ? 'bg-green-50 text-green-600' : 'bg-gray-100 text-gray-400'
                }`}>{member.status}</span>
              </div>
            ))}
          </div>
          <button className="mt-4 w-full py-2 bg-brand-navy text-white rounded-lg text-sm font-medium">+ 添加成员</button>
        </div>

        {/* Permissions */}
        <div className="space-y-4">
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">🔐 角色权限配置</h3>
            <div className="space-y-3">
              {[
                { role: 'GP委托管理人', permissions: '全部权限', color: 'bg-purple-50 text-purple-600' },
                { role: '项目经理', permissions: '项目管理、LP管理、评价查看', color: 'bg-blue-50 text-blue-600' },
                { role: '设计师', permissions: '设计库管理、方案编辑', color: 'bg-green-50 text-green-600' },
                { role: '工程师', permissions: '工程进度、质量检查', color: 'bg-orange-50 text-orange-600' },
                { role: '运营', permissions: '需求洞察、评价管理、LP沟通', color: 'bg-teal-50 text-teal-600' },
                { role: '只读', permissions: '仅查看，不可编辑', color: 'bg-gray-100 text-gray-500' },
              ].map(role => (
                <div key={role.role} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${role.color}`}>{role.role}</span>
                    </div>
                    <div className="text-xs text-gray-400 mt-1">{role.permissions}</div>
                  </div>
                  <button className="text-xs text-brand-navy font-medium hover:underline">编辑</button>
                </div>
              ))}
            </div>
          </div>

          {/* System Settings */}
          <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
            <h3 className="font-bold text-gray-800 mb-4">🖥️ 系统设置</h3>
            <div className="space-y-3">
              {[
                { label: 'CSI目标值', value: '4.5', desc: '低于此值触发管理费调整' },
                { label: '评价响应时限', value: '24小时', desc: '红灯评价强制响应时间' },
                { label: 'LP投资下限', value: '30万', desc: '新项目LP最低投资额' },
                { label: '数据保留周期', value: '永久', desc: '客户评价和项目数据保留策略' },
                { label: '通知渠道', value: 'APP推送 + 短信', desc: '关键事件通知方式' },
              ].map(s => (
                <div key={s.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <div className="text-sm font-medium text-gray-700">{s.label}</div>
                    <div className="text-xs text-gray-400">{s.desc}</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-brand-navy">{s.value}</span>
                    <button className="text-xs text-gray-400 hover:text-brand-navy">修改</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
