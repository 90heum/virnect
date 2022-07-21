

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"ko","iso":"ko","name":"Korean","file":"ko/index.js"},{"code":"en","iso":"en","name":"English","file":"en/index.js"}],
  defaultLocale: "ko",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "no_prefix",
  lazy: true,
  langDir: "/Users/hellodigital/Desktop/hj01/virnect/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"lang","cookieSecure":false,"fallbackLocale":"ko","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  seo: true,
  normalizedLocales: [{"code":"ko","iso":"ko","name":"Korean","file":"ko/index.js"},{"code":"en","iso":"en","name":"English","file":"en/index.js"}],
  localeCodes: ["ko","en"],
  additionalMessages: [],
}

export const localeMessages = {
  'ko/index.js': () => import('../../lang/ko/index.js' /* webpackChunkName: "lang-ko/index.js" */),
  'en/index.js': () => import('../../lang/en/index.js' /* webpackChunkName: "lang-en/index.js" */),
}
