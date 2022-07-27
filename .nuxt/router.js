import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _40c0fe5b = () => interopDefault(import('../pages/payment.vue' /* webpackChunkName: "pages/payment" */))
const _4e66b28d = () => interopDefault(import('../pages/Policy.vue' /* webpackChunkName: "pages/Policy" */))
const _e3990ec8 = () => interopDefault(import('../pages/terms.vue' /* webpackChunkName: "pages/terms" */))
const _86e848e0 = () => interopDefault(import('../pages/company/about.vue' /* webpackChunkName: "pages/company/about" */))
const _0c5b0680 = () => interopDefault(import('../pages/company/aboutSub.vue' /* webpackChunkName: "pages/company/aboutSub" */))
const _76522194 = () => interopDefault(import('../pages/company/ir.vue' /* webpackChunkName: "pages/company/ir" */))
const _351b9bf8 = () => interopDefault(import('../pages/company/ir-detail.vue' /* webpackChunkName: "pages/company/ir-detail" */))
const _54d8120e = () => interopDefault(import('../pages/company/talent.vue' /* webpackChunkName: "pages/company/talent" */))
const _5f887562 = () => interopDefault(import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */))
const _a23e4dec = () => interopDefault(import('../pages/news/main.vue' /* webpackChunkName: "pages/news/main" */))
const _ba7e1678 = () => interopDefault(import('../pages/policy/Payment.vue' /* webpackChunkName: "pages/policy/Payment" */))
const _375d6ec1 = () => interopDefault(import('../pages/policy/persnal.vue' /* webpackChunkName: "pages/policy/persnal" */))
const _095ff545 = () => interopDefault(import('../pages/policy/Terms.vue' /* webpackChunkName: "pages/policy/Terms" */))
const _6aac3cce = () => interopDefault(import('../pages/products/make.vue' /* webpackChunkName: "pages/products/make" */))
const _60a0da86 = () => interopDefault(import('../pages/products/ms.vue' /* webpackChunkName: "pages/products/ms" */))
const _65f3aec6 = () => interopDefault(import('../pages/products/productsMain.vue' /* webpackChunkName: "pages/products/productsMain" */))
const _4394ddb4 = () => interopDefault(import('../pages/products/remote.vue' /* webpackChunkName: "pages/products/remote" */))
const _64fd77ca = () => interopDefault(import('../pages/products/track.vue' /* webpackChunkName: "pages/products/track" */))
const _6a9a9e70 = () => interopDefault(import('../pages/products/twin.vue' /* webpackChunkName: "pages/products/twin" */))
const _a0ed83f6 = () => interopDefault(import('../pages/products/view.vue' /* webpackChunkName: "pages/products/view" */))
const _7276229e = () => interopDefault(import('../pages/support/demo.vue' /* webpackChunkName: "pages/support/demo" */))
const _3ab5b2aa = () => interopDefault(import('../pages/support/faq.vue' /* webpackChunkName: "pages/support/faq" */))
const _6b491e5c = () => interopDefault(import('../pages/support/inquiry.vue' /* webpackChunkName: "pages/support/inquiry" */))
const _234116f9 = () => interopDefault(import('../pages/support/learning-center.vue' /* webpackChunkName: "pages/support/learning-center" */))
const _98607278 = () => interopDefault(import('../pages/support/learning-manual-detail.vue' /* webpackChunkName: "pages/support/learning-manual-detail" */))
const _47278ef2 = () => interopDefault(import('../pages/support/learning-video-detail.vue' /* webpackChunkName: "pages/support/learning-video-detail" */))
const _13b2475a = () => interopDefault(import('../pages/support/notice.vue' /* webpackChunkName: "pages/support/notice" */))
const _100db78a = () => interopDefault(import('../pages/support/notice-detail.vue' /* webpackChunkName: "pages/support/notice-detail" */))
const _97c27a76 = () => interopDefault(import('../pages/support/supportSubMain.vue' /* webpackChunkName: "pages/support/supportSubMain" */))
const _ff04fb82 = () => interopDefault(import('../pages/value/entertainment.vue' /* webpackChunkName: "pages/value/entertainment" */))
const _eac91dea = () => interopDefault(import('../pages/value/etc.vue' /* webpackChunkName: "pages/value/etc" */))
const _c028cd14 = () => interopDefault(import('../pages/value/infra_resource.vue' /* webpackChunkName: "pages/value/infra_resource" */))
const _44750d28 = () => interopDefault(import('../pages/value/manufacture_construction.vue' /* webpackChunkName: "pages/value/manufacture_construction" */))
const _2ee9e26b = () => interopDefault(import('../pages/value/public_education.vue' /* webpackChunkName: "pages/value/public_education" */))
const _3a687042 = () => interopDefault(import('../pages/company/subCompany/Brand.vue' /* webpackChunkName: "pages/company/subCompany/Brand" */))
const _37948b32 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/payment",
    component: _40c0fe5b,
    name: "payment"
  }, {
    path: "/Policy",
    component: _4e66b28d,
    name: "Policy"
  }, {
    path: "/terms",
    component: _e3990ec8,
    name: "terms"
  }, {
    path: "/company/about",
    component: _86e848e0,
    name: "company-about"
  }, {
    path: "/company/aboutSub",
    component: _0c5b0680,
    name: "company-aboutSub"
  }, {
    path: "/company/ir",
    component: _76522194,
    name: "company-ir"
  }, {
    path: "/company/ir-detail",
    component: _351b9bf8,
    name: "company-ir-detail"
  }, {
    path: "/company/talent",
    component: _54d8120e,
    name: "company-talent"
  }, {
    path: "/news/detail",
    component: _5f887562,
    name: "news-detail"
  }, {
    path: "/news/main",
    component: _a23e4dec,
    name: "news-main"
  }, {
    path: "/policy/Payment",
    component: _ba7e1678,
    name: "policy-Payment"
  }, {
    path: "/policy/persnal",
    component: _375d6ec1,
    name: "policy-persnal"
  }, {
    path: "/policy/Terms",
    component: _095ff545,
    name: "policy-Terms"
  }, {
    path: "/products/make",
    component: _6aac3cce,
    name: "products-make"
  }, {
    path: "/products/ms",
    component: _60a0da86,
    name: "products-ms"
  }, {
    path: "/products/productsMain",
    component: _65f3aec6,
    name: "products-productsMain"
  }, {
    path: "/products/remote",
    component: _4394ddb4,
    name: "products-remote"
  }, {
    path: "/products/track",
    component: _64fd77ca,
    name: "products-track"
  }, {
    path: "/products/twin",
    component: _6a9a9e70,
    name: "products-twin"
  }, {
    path: "/products/view",
    component: _a0ed83f6,
    name: "products-view"
  }, {
    path: "/support/demo",
    component: _7276229e,
    name: "support-demo"
  }, {
    path: "/support/faq",
    component: _3ab5b2aa,
    name: "support-faq"
  }, {
    path: "/support/inquiry",
    component: _6b491e5c,
    name: "support-inquiry"
  }, {
    path: "/support/learning-center",
    component: _234116f9,
    name: "support-learning-center"
  }, {
    path: "/support/learning-manual-detail",
    component: _98607278,
    name: "support-learning-manual-detail"
  }, {
    path: "/support/learning-video-detail",
    component: _47278ef2,
    name: "support-learning-video-detail"
  }, {
    path: "/support/notice",
    component: _13b2475a,
    name: "support-notice"
  }, {
    path: "/support/notice-detail",
    component: _100db78a,
    name: "support-notice-detail"
  }, {
    path: "/support/supportSubMain",
    component: _97c27a76,
    name: "support-supportSubMain"
  }, {
    path: "/value/entertainment",
    component: _ff04fb82,
    name: "value-entertainment"
  }, {
    path: "/value/etc",
    component: _eac91dea,
    name: "value-etc"
  }, {
    path: "/value/infra_resource",
    component: _c028cd14,
    name: "value-infra_resource"
  }, {
    path: "/value/manufacture_construction",
    component: _44750d28,
    name: "value-manufacture_construction"
  }, {
    path: "/value/public_education",
    component: _2ee9e26b,
    name: "value-public_education"
  }, {
    path: "/company/subCompany/Brand",
    component: _3a687042,
    name: "company-subCompany-Brand"
  }, {
    path: "/",
    component: _37948b32,
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
