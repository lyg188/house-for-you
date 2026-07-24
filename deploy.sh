#!/bin/bash
# 房找人 - 部署脚本（持久化版）
# 用法: bash deploy.sh
# 功能: 启动/恢复 HTTP 服务 + Cloudflare Tunnel
# URL 保存到 .public_url 文件，重启时优先复用

set -e

DIST_DIR="/workspace/house-for-you/dist"
PORT=8001
CF_LOG="/tmp/cloudflared_tunnel.log"
URL_FILE="/workspace/house-for-you/.public_url"

echo "📦 房找人 - 部署中..."

# ===== 1. 启动 HTTP 服务 =====
if curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:$PORT/index.html" 2>/dev/null | grep -q 200; then
  echo "✅ HTTP 服务已在运行"
else
  echo "🔄 启动 HTTP 服务..."
  kill $(lsof -ti:$PORT) 2>/dev/null || true
  sleep 1
  nohup python3 -m http.server $PORT --bind 0.0.0.0 --directory "$DIST_DIR" > /tmp/http-${PORT}.log 2>&1 &
  sleep 2
  if curl -s -o /dev/null -w "%{http_code}" "http://127.0.0.1:$PORT/index.html" 2>/dev/null | grep -q 200; then
    echo "✅ HTTP 服务启动成功"
  else
    echo "❌ HTTP 服务启动失败"
    exit 1
  fi
fi

# ===== 2. 启动/检查 Cloudflare Tunnel =====
NEED_NEW_TUNNEL=true

# 检查现有 tunnel 进程
TUNNEL_PID=$(pgrep -f "cloudflared tunnel" 2>/dev/null || true)
if [ -n "$TUNNEL_PID" ]; then
  # 读取已保存的 URL
  SAVED_URL=$(cat "$URL_FILE" 2>/dev/null || true)
  if [ -n "$SAVED_URL" ]; then
    TEST=$(curl -s -o /dev/null -w "%{http_code}" --max-time 8 "$SAVED_URL/index.html" 2>/dev/null || echo "000")
    if [ "$TEST" = "200" ]; then
      echo "✅ Tunnel 存活: $SAVED_URL"
      NEED_NEW_TUNNEL=false
    fi
  fi
fi

if [ "$NEED_NEW_TUNNEL" = true ]; then
  echo "🔄 启动新 Tunnel..."
  kill $TUNNEL_PID 2>/dev/null || true
  sleep 2
  > "$CF_LOG"
  nohup cloudflared tunnel --url "http://localhost:$PORT" --no-autoupdate > "$CF_LOG" 2>&1 &
  sleep 10

  # 提取 URL
  NEW_URL=$(grep -o 'https://[a-z0-9.-]*\.trycloudflare\.com' "$CF_LOG" | tail -1 || true)
  if [ -n "$NEW_URL" ]; then
    echo "$NEW_URL" > "$URL_FILE"
    echo "🌐 新地址: $NEW_URL"
  else
    echo "⚠️  未能获取 Tunnel URL，请稍后重试"
    exit 1
  fi
fi

# ===== 3. 最终验证 =====
FINAL_URL=$(cat "$URL_FILE")
echo ""
echo "══════════════════════════════════════════"
echo "  🏠 房找人 - 公网地址"
echo "  $FINAL_URL"
echo "══════════════════════════════════════════"
echo ""
echo "📋 页面:"
for f in index.html app.html admin.html; do
  S=$(curl -s -o /dev/null -w "%{http_code}" --max-time 5 "$FINAL_URL/$f" 2>/dev/null || echo "ERR")
  echo "  $f → HTTP $S"
done
echo ""
echo "💡 提示: 如果地址失效，运行 bash deploy.sh 即可恢复"
echo "🎉 完成"
