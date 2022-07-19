import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _3bef1449 = () => interopDefault(import('../pages/company/about.vue' /* webpackChunkName: "pages/company/about" */))
const _35585d67 = () => interopDefault(import('../pages/company/aboutSub.vue' /* webpackChunkName: "pages/company/aboutSub" */))
const _e03fcdc6 = () => interopDefault(import('../pages/company/ir.vue' /* webpackChunkName: "pages/company/ir" */))
const _6a51d031 = () => interopDefault(import('../pages/company/ir-detail.vue' /* webpackChunkName: "pages/company/ir-detail" */))
const _4297d560 = () => interopDefault(import('../pages/company/talent.vue' /* webpackChunkName: "pages/company/talent" */))
const _14b6ef4a = () => interopDefault(import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */))
const _c6b1537a = () => interopDefault(import('../pages/news/main.vue' /* webpackChunkName: "pages/news/main" */))
const _0fc4d32b = () => interopDefault(import('../pages/policy/Payment.vue' /* webpackChunkName: "pages/policy/Payment" */))
const _415b279d = () => interopDefault(import('../pages/policy/Policy.vue' /* webpackChunkName: "pages/policy/Policy" */))
const _36c6416c = () => interopDefault(import('../pages/policy/Terms.vue' /* webpackChunkName: "pages/policy/Terms" */))
const _2be114f2 = () => interopDefault(import('../pages/products/make.vue' /* webpackChunkName: "pages/products/make" */))
const _12862502 = () => interopDefault(import('../pages/products/ms.vue' /* webpackChunkName: "pages/products/ms" */))
const _57259856 = () => interopDefault(import('../pages/products/productsMain.vue' /* webpackChunkName: "pages/products/productsMain" */))
const _11ad7f9f = () => interopDefault(import('../pages/products/remote.vue' /* webpackChunkName: "pages/products/remote" */))
const _3a852282 = () => interopDefault(import('../pages/products/track.vue' /* webpackChunkName: "pages/products/track" */))
const _4a15e981 = () => interopDefault(import('../pages/products/twin.vue' /* webpackChunkName: "pages/products/twin" */))
const _2eec76be = () => interopDefault(import('../pages/products/view.vue' /* webpackChunkName: "pages/products/view" */))
const _c0472276 = () => interopDefault(import('../pages/support/demo.vue' /* webpackChunkName: "pages/support/demo" */))
const _78c139a4 = () => interopDefault(import('../pages/support/faq.vue' /* webpackChunkName: "pages/support/faq" */))
const _c27de656 = () => interopDefault(import('../pages/support/inquiry.vue' /* webpackChunkName: "pages/support/inquiry" */))
const _b979071c = () => interopDefault(import('../pages/support/learning-center.vue' /* webpackChunkName: "pages/support/learning-center" */))
const _7daff72b = () => interopDefault(import('../pages/support/learning-manual-detail.vue' /* webpackChunkName: "pages/support/learning-manual-detail" */))
const _adbe4180 = () => interopDefault(import('../pages/support/learning-video-detail.vue' /* webpackChunkName: "pages/support/learning-video-detail" */))
const _632ababa = () => interopDefault(import('../pages/support/notice.vue' /* webpackChunkName: "pages/support/notice" */))
const _fbced818 = () => interopDefault(import('../pages/support/notice-detail.vue' /* webpackChunkName: "pages/support/notice-detail" */))
const _6ded4a2c = () => interopDefault(import('../pages/support/supportSubMain.vue' /* webpackChunkName: "pages/support/supportSubMain" */))
const _171765f6 = () => interopDefault(import('../pages/terms/charged.vue' /* webpackChunkName: "pages/terms/charged" */))
const _762daaa9 = () => interopDefault(import('../pages/terms/persnal.vue' /* webpackChunkName: "pages/terms/persnal" */))
const _67072dfb = () => interopDefault(import('../pages/terms/service.vue' /* webpackChunkName: "pages/terms/service" */))
const _40f78c38 = () => interopDefault(import('../pages/value/entertainment.vue' /* webpackChunkName: "pages/value/entertainment" */))
const _7861ee44 = () => interopDefault(import('../pages/value/etc.vue' /* webpackChunkName: "pages/value/etc" */))
const _229a62c6 = () => interopDefault(import('../pages/value/infra_resource.vue' /* webpackChunkName: "pages/value/infra_resource" */))
const _0e553d8f = () => interopDefault(import('../pages/value/manufacture_construction.vue' /* webpackChunkName: "pages/value/manufacture_construction" */))
const _2e8f2c5c = () => interopDefault(import('../pages/value/public_education.vue' /* webpackChunkName: "pages/value/public_education" */))
const _8a9a8c2e = () => interopDefault(import('../pages/company/subCompany/Brand.vue' /* webpackChunkName: "pages/company/subCompany/Brand" */))
const _79b5bc20 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/company/about",
    component: _3bef1449,
    name: "company-about"
  }, {
    path: "/company/aboutSub",
    component: _35585d67,
    name: "company-aboutSub"
  }, {
    path: "/company/ir",
    component: _e03fcdc6,
    name: "company-ir"
  }, {
    path: "/company/ir-detail",
    component: _6a51d031,
    name: "company-ir-detail"
  }, {
    path: "/company/talent",
    component: _4297d560,
    name: "company-talent"
  }, {
    path: "/news/detail",
    component: _14b6ef4a,
    name: "news-detail"
  }, {
    path: "/news/main",
    component: _c6b1537a,
    name: "news-main"
  }, {
    path: "/policy/Payment",
    component: _0fc4d32b,
    name: "policy-Payment"
  }, {
    path: "/policy/Policy",
    component: _415b279d,
    name: "policy-Policy"
  }, {
    path: "/policy/Terms",
    component: _36c6416c,
    name: "policy-Terms"
  }, {
    path: "/products/make",
    component: _2be114f2,
    name: "products-make"
  }, {
    path: "/products/ms",
    component: _12862502,
    name: "products-ms"
  }, {
    path: "/products/productsMain",
    component: _57259856,
    name: "products-productsMain"
  }, {
    path: "/products/remote",
    component: _11ad7f9f,
    name: "products-remote"
  }, {
    path: "/products/track",
    component: _3a852282,
    name: "products-track"
  }, {
    path: "/products/twin",
    component: _4a15e981,
    name: "products-twin"
  }, {
    path: "/products/view",
    component: _2eec76be,
    name: "products-view"
  }, {
    path: "/support/demo",
    component: _c0472276,
    name: "support-demo"
  }, {
    path: "/support/faq",
    component: _78c139a4,
    name: "support-faq"
  }, {
    path: "/support/inquiry",
    component: _c27de656,
    name: "support-inquiry"
  }, {
    path: "/support/learning-center",
    component: _b979071c,
    name: "support-learning-center"
  }, {
    path: "/support/learning-manual-detail",
    component: _7daff72b,
    name: "support-learning-manual-detail"
  }, {
    path: "/support/learning-video-detail",
    component: _adbe4180,
    name: "support-learning-video-detail"
  }, {
    path: "/support/notice",
    component: _632ababa,
    name: "support-notice"
  }, {
    path: "/support/notice-detail",
    component: _fbced818,
    name: "support-notice-detail"
  }, {
    path: "/support/supportSubMain",
    component: _6ded4a2c,
    name: "support-supportSubMain"
  }, {
    path: "/terms/charged",
    component: _171765f6,
    name: "terms-charged"
  }, {
    path: "/terms/persnal",
    component: _762daaa9,
    name: "terms-persnal"
  }, {
    path: "/terms/service",
    component: _67072dfb,
    name: "terms-service"
  }, {
    path: "/value/entertainment",
    component: _40f78c38,
    name: "value-entertainment"
  }, {
    path: "/value/etc",
    component: _7861ee44,
    name: "value-etc"
  }, {
    path: "/value/infra_resource",
    component: _229a62c6,
    name: "value-infra_resource"
  }, {
    path: "/value/manufacture_construction",
    component: _0e553d8f,
    name: "value-manufacture_construction"
  }, {
    path: "/value/public_education",
    component: _2e8f2c5c,
    name: "value-public_education"
  }, {
    path: "/company/subCompany/Brand",
    component: _8a9a8c2e,
    name: "company-subCompany-Brand"
  }, {
    path: "/",
    component: _79b5bc20,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
