import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _861d7008 = () => interopDefault(import('../pages/company/about.vue' /* webpackChunkName: "pages/company/about" */))
const _1496a8d4 = () => interopDefault(import('../pages/company/aboutSub.vue' /* webpackChunkName: "pages/company/aboutSub" */))
const _be3a8b6c = () => interopDefault(import('../pages/company/ir.vue' /* webpackChunkName: "pages/company/ir" */))
const _72dcf264 = () => interopDefault(import('../pages/company/ir-detail.vue' /* webpackChunkName: "pages/company/ir-detail" */))
const _3c47cfe6 = () => interopDefault(import('../pages/company/talent.vue' /* webpackChunkName: "pages/company/talent" */))
const _04f60cce = () => interopDefault(import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */))
const _63655b76 = () => interopDefault(import('../pages/news/main.vue' /* webpackChunkName: "pages/news/main" */))
const _a1edd450 = () => interopDefault(import('../pages/policy/Payment.vue' /* webpackChunkName: "pages/policy/Payment" */))
const _7b454960 = () => interopDefault(import('../pages/policy/Policy.vue' /* webpackChunkName: "pages/policy/Policy" */))
const _11a54b59 = () => interopDefault(import('../pages/policy/Terms.vue' /* webpackChunkName: "pages/policy/Terms" */))
const _6b11a93a = () => interopDefault(import('../pages/products/make.vue' /* webpackChunkName: "pages/products/make" */))
const _060e71f2 = () => interopDefault(import('../pages/products/ms.vue' /* webpackChunkName: "pages/products/ms" */))
const _041e6909 = () => interopDefault(import('../pages/products/productsMain.vue' /* webpackChunkName: "pages/products/productsMain" */))
const _5af19292 = () => interopDefault(import('../pages/products/remote.vue' /* webpackChunkName: "pages/products/remote" */))
const _4c6d35a2 = () => interopDefault(import('../pages/products/track.vue' /* webpackChunkName: "pages/products/track" */))
const _69cfc598 = () => interopDefault(import('../pages/products/twin.vue' /* webpackChunkName: "pages/products/twin" */))
const _a022ab1e = () => interopDefault(import('../pages/products/view.vue' /* webpackChunkName: "pages/products/view" */))
const _7abb78b2 = () => interopDefault(import('../pages/support/demo.vue' /* webpackChunkName: "pages/support/demo" */))
const _efda83d2 = () => interopDefault(import('../pages/support/faq.vue' /* webpackChunkName: "pages/support/faq" */))
const _2ff5c070 = () => interopDefault(import('../pages/support/inquiry.vue' /* webpackChunkName: "pages/support/inquiry" */))
const _156a2736 = () => interopDefault(import('../pages/support/learning-center.vue' /* webpackChunkName: "pages/support/learning-center" */))
const _62fb3fd8 = () => interopDefault(import('../pages/support/learning-manual-detail.vue' /* webpackChunkName: "pages/support/learning-manual-detail" */))
const _24234cf3 = () => interopDefault(import('../pages/support/learning-video-detail.vue' /* webpackChunkName: "pages/support/learning-video-detail" */))
const _026efd67 = () => interopDefault(import('../pages/support/notice.vue' /* webpackChunkName: "pages/support/notice" */))
const _2f1164a7 = () => interopDefault(import('../pages/support/notice-detail.vue' /* webpackChunkName: "pages/support/notice-detail" */))
const _600e8fd9 = () => interopDefault(import('../pages/support/supportSubMain.vue' /* webpackChunkName: "pages/support/supportSubMain" */))
const _cfccccae = () => interopDefault(import('../pages/terms/charged.vue' /* webpackChunkName: "pages/terms/charged" */))
const _11a04348 = () => interopDefault(import('../pages/terms/persnal.vue' /* webpackChunkName: "pages/terms/persnal" */))
const _2fed3ca4 = () => interopDefault(import('../pages/terms/service.vue' /* webpackChunkName: "pages/terms/service" */))
const _947ad380 = () => interopDefault(import('../pages/value/airline_railroad.vue' /* webpackChunkName: "pages/value/airline_railroad" */))
const _4cea5cc8 = () => interopDefault(import('../pages/value/energy_resource.vue' /* webpackChunkName: "pages/value/energy_resource" */))
const _384c90fb = () => interopDefault(import('../pages/value/epc.vue' /* webpackChunkName: "pages/value/epc" */))
const _f4352f0e = () => interopDefault(import('../pages/value/motor_parts.vue' /* webpackChunkName: "pages/value/motor_parts" */))
const _2a39e7da = () => interopDefault(import('../pages/value/oil_chemical_battery.vue' /* webpackChunkName: "pages/value/oil_chemical_battery" */))
const _accd6f54 = () => interopDefault(import('../pages/company/subCompany/Brand.vue' /* webpackChunkName: "pages/company/subCompany/Brand" */))
const _33d452d3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _861d7008,
    name: "company-about"
  }, {
    path: "/company/aboutSub",
    component: _1496a8d4,
    name: "company-aboutSub"
  }, {
    path: "/company/ir",
    component: _be3a8b6c,
    name: "company-ir"
  }, {
    path: "/company/ir-detail",
    component: _72dcf264,
    name: "company-ir-detail"
  }, {
    path: "/company/talent",
    component: _3c47cfe6,
    name: "company-talent"
  }, {
    path: "/news/detail",
    component: _04f60cce,
    name: "news-detail"
  }, {
    path: "/news/main",
    component: _63655b76,
    name: "news-main"
  }, {
    path: "/policy/Payment",
    component: _a1edd450,
    name: "policy-Payment"
  }, {
    path: "/policy/Policy",
    component: _7b454960,
    name: "policy-Policy"
  }, {
    path: "/policy/Terms",
    component: _11a54b59,
    name: "policy-Terms"
  }, {
    path: "/products/make",
    component: _6b11a93a,
    name: "products-make"
  }, {
    path: "/products/ms",
    component: _060e71f2,
    name: "products-ms"
  }, {
    path: "/products/productsMain",
    component: _041e6909,
    name: "products-productsMain"
  }, {
    path: "/products/remote",
    component: _5af19292,
    name: "products-remote"
  }, {
    path: "/products/track",
    component: _4c6d35a2,
    name: "products-track"
  }, {
    path: "/products/twin",
    component: _69cfc598,
    name: "products-twin"
  }, {
    path: "/products/view",
    component: _a022ab1e,
    name: "products-view"
  }, {
    path: "/support/demo",
    component: _7abb78b2,
    name: "support-demo"
  }, {
    path: "/support/faq",
    component: _efda83d2,
    name: "support-faq"
  }, {
    path: "/support/inquiry",
    component: _2ff5c070,
    name: "support-inquiry"
  }, {
    path: "/support/learning-center",
    component: _156a2736,
    name: "support-learning-center"
  }, {
    path: "/support/learning-manual-detail",
    component: _62fb3fd8,
    name: "support-learning-manual-detail"
  }, {
    path: "/support/learning-video-detail",
    component: _24234cf3,
    name: "support-learning-video-detail"
  }, {
    path: "/support/notice",
    component: _026efd67,
    name: "support-notice"
  }, {
    path: "/support/notice-detail",
    component: _2f1164a7,
    name: "support-notice-detail"
  }, {
    path: "/support/supportSubMain",
    component: _600e8fd9,
    name: "support-supportSubMain"
  }, {
    path: "/terms/charged",
    component: _cfccccae,
    name: "terms-charged"
  }, {
    path: "/terms/persnal",
    component: _11a04348,
    name: "terms-persnal"
  }, {
    path: "/terms/service",
    component: _2fed3ca4,
    name: "terms-service"
  }, {
    path: "/value/airline_railroad",
    component: _947ad380,
    name: "value-airline_railroad"
  }, {
    path: "/value/energy_resource",
    component: _4cea5cc8,
    name: "value-energy_resource"
  }, {
    path: "/value/epc",
    component: _384c90fb,
    name: "value-epc"
  }, {
    path: "/value/motor_parts",
    component: _f4352f0e,
    name: "value-motor_parts"
  }, {
    path: "/value/oil_chemical_battery",
    component: _2a39e7da,
    name: "value-oil_chemical_battery"
  }, {
    path: "/company/subCompany/Brand",
    component: _accd6f54,
    name: "company-subCompany-Brand"
  }, {
    path: "/",
    component: _33d452d3,
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
