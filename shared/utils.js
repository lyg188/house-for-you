// 格式化金额
export function formatMoney(num) {
  if (num >= 100000000) return (num / 100000000).toFixed(2) + '亿'
  if (num >= 10000) return (num / 10000).toFixed(0) + '万'
  return num.toLocaleString()
}

// 格式化百分比
export function formatPercent(num) {
  return (num * 100).toFixed(1) + '%'
}

// 阶段状态判断
export function getStageStatus(project, stageId) {
  if (project.currentStage > stageId) return 'completed'
  if (project.currentStage === stageId) return 'active'
  return 'pending'
}

// CSI评分颜色
export function getCSIColor(csi) {
  if (csi >= 4.5) return '#38a169'
  if (csi >= 4.0) return '#48bb78'
  if (csi >= 3.5) return '#d69e2e'
  if (csi >= 3.0) return '#ed8936'
  return '#e53e3e'
}

// 日期格式化
export function formatDate(dateStr) {
  const d = new Date(dateStr)
  return `${d.getFullYear()}/${d.getMonth() + 1}/${d.getDate()}`
}
