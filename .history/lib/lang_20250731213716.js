import BLOG from '@/blog.config'
import { getQueryVariable, isBrowser, mergeDeep } from '@/lib/utils'
import enUS from './lang/en-US'
import frFR from './lang/fr-FR'
import jaJP from './lang/ja-JP'
import trTR from './lang/tr-TR'
import zhCN from './lang/zh-CN'
import zhHK from './lang/zh-HK'
import zhTW from './lang/zh-TW'
import { extractLangPrefix } from './utils/pageId'
import { useRouter } from 'next/router'

/**
 * 지원하는 모든 언어를 여기서 설정
 * 국가-지역
 */
const LANGS = {
  'en-US': enUS,
  'zh-CN': zhCN,
  'zh-HK': zhHK,
  'zh-TW': zhTW,
  'fr-FR': frFR,
  'tr-TR': trTR,
  'ja-JP': jaJP
}

export default LANGS

/**
 * 현재 언어 사전 가져오기
 * "국가-지역" 언어가 완전히 일치하면 해당 국가 언어를 표시
 * @returns 각 언어에 해당하는 사전
 */
export function generateLocaleDict(langString) {
  const supportedLocales = Object.keys(LANGS)
  let userLocale

  // 언어 문자열을 언어와 지역 코드로 분리 (예: "zh-CN" → "zh", "CN")
  const [language, region] = langString?.split(/[-_]/)

  // 언어와 지역이 모두 일치하는 경우 우선 매칭
  const specificLocale = `${language}-${region}`
  if (supportedLocales.includes(specificLocale)) {
    userLocale = LANGS[specificLocale]
  }

  // 그 다음 언어만 일치하는 경우 매칭 시도
  if (!userLocale) {
    const languageOnlyLocales = supportedLocales.filter(locale =>
      locale.startsWith(language)
    )
    if (languageOnlyLocales.length > 0) {
      userLocale = LANGS[languageOnlyLocales[0]]
    }
  }

  // 그래도 매칭이 안 되면 가장 가까운 언어팩 반환
  if (!userLocale) {
    const fallbackLocale = supportedLocales.find(locale =>
      locale.startsWith('en')
    )
    userLocale = LANGS[fallbackLocale]
  }

  return mergeDeep({}, LANGS['en-US'], userLocale)
}

/**
 * 사이트 번역
 * router의 locale 기능을 활용해 locale에 따라 자동으로 언어 전환
 */
export function initLocale(locale, changeLang, updateLocale) {
  if (isBrowser) {
    // query 매개변수로 언어 전환이 있으면 우선 적용
    const queryLang =
      getQueryVariable('locale') || getQueryVariable('lang') || locale
    if (queryLang) {
      const match = queryLang.match(/[a-zA-Z]{2}(?:-[a-zA-Z]{2})?/)
      if (match) {
        const targetLang = match[0]
        changeLang(targetLang)
        const targetLocale = generateLocaleDict(targetLang)
        updateLocale(targetLocale)
      }
    }
  }
}

/**
 * 사용자의 언어 기본 설정을 감지하여 해당 다국어 웹사이트로 리디렉션
 * @param {*} lang
 * @param {*} pageId
 *
 */
export const redirectUserLang = (lang, pageId) => {
  if (!isBrowser) {
    return
  }
  // 홈페이지에서만 리디렉션 처리
  if (!window.location.pathname === '/') {
    return
  }
  // 다국어가 활성화되지 않음
  if (BLOG.NOTION_PAGE_ID.indexOf(',') < 0) {
    return
  }

  const userLang =
    getQueryVariable('locale') ||
    getQueryVariable('lang') ||
    window?.navigator?.language
  const siteIds = pageId?.split(',') || []

  // 기본적으로 홈페이지로 이동; 다국어 중 하나가 사용자 브라우저와 일치하면 자동으로 해당 페이지로 이동
  for (let index = 0; index < siteIds.length; index++) {
    const siteId = siteIds[index]
    const prefix = extractLangPrefix(siteId)
    if (prefix === userLang) {
      if (window.location.pathname.indexOf(prefix) < 0) {
        window.location.href = '/' + prefix
      }
    }
  }
}
