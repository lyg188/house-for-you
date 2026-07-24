// 主题配置 - 设计语言统一管理
export const theme = {
  colors: {
    navy: '#1a365d',
    orange: '#ed8936',
    emerald: '#38a169',
    red: '#e53e3e',
    yellow: '#d69e2e',
    gray: {
      50: '#f7fafc',
      100: '#edf2f7',
      200: '#e2e8f0',
      300: '#cbd5e0',
      400: '#a0aec0',
      500: '#718096',
      600: '#4a5568',
      700: '#2d3748',
      800: '#1a202c',
      900: '#171923',
    }
  },
  stages: [
    { id: 1, name: '需求发现', icon: '🔍', color: '#667eea' },
    { id: 2, name: '精准获地', icon: '📍', color: '#764ba2' },
    { id: 3, name: '共创设计', icon: '🎨', color: '#f093fb' },
    { id: 4, name: '透明建造', icon: '🏗️', color: '#4facfe' },
    { id: 5, name: '个性化交付', icon: '🔑', color: '#43e97b' },
    { id: 6, name: '评价验收', icon: '⭐', color: '#fa709a' },
    { id: 7, name: '持续运营', icon: '🔄', color: '#8ee4af' },
  ],
  evaluationLevels: {
    red: { min: 0, max: 3, label: '红灯', color: '#e53e3e', action: '24h响应' },
    yellow: { min: 3, max: 4, label: '黄灯', color: '#d69e2e', action: '48h响应' },
    green: { min: 4, max: 5, label: '绿灯', color: '#38a169', action: '沉淀最佳实践' },
  }
}
