import BLOG from '@/blog.config'

/**
 * 날짜 포맷팅
 * @param date
 * @param local
 * @returns {string}
 */
export default function formatDate(date, local = BLOG.LANG) {
  if (!date || !local) return date || ''
  const d = new Date(date)
  const options = { year: 'numeric', month: 'short', day: 'numeric' }
  const res = d.toLocaleDateString(local, options)
  // 한국어나 중국어 날짜 형식을 YYYY-MM-DD 형식으로 변환
  let format = res
  if (local.slice(0, 2).toLowerCase() === 'zh') {
    // 중국어: "2024年1月1日" → "2024-01-01"
    format = res.replace('年', '-').replace('月', '-').replace('日', '')
  } else if (local.slice(0, 2).toLowerCase() === 'ko') {
    // 한국어: "2024. 1. 1." → "2024-01-01"
    format = res.replace(/\./g, '').replace(/\s+/g, '-').replace(/-$/, '')
    // 월과 일을 두 자리로 맞춤
    const parts = format.split('-')
    if (parts.length === 3) {
      const year = parts[0]
      const month = parts[1].padStart(2, '0')
      const day = parts[2].padStart(2, '0')
      format = `${year}-${month}-${day}`
    }
  }
  return format
}

/**
 * 타임스탬프 포맷팅
 * @param {*} timestamp
 * @param {*} fmt
 * @returns
 */
export function formatDateFmt(timestamp, fmt) {
  const date = new Date(timestamp)
  const o = {
    'M+': date.getMonth() + 1, // 월
    'd+': date.getDate(), // 일
    'h+': date.getHours(), // 시간
    'm+': date.getMinutes(), // 분
    's+': date.getSeconds(), // 초
    'q+': Math.floor((date.getMonth() + 3) / 3), // 분기
    S: date.getMilliseconds() // 밀리초
  }
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
    }
  }
  return fmt.trim()
}
