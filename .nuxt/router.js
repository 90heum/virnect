import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _861213fc = () => interopDefault(import('../pages/company/about.vue' /* webpackChunkName: "pages/company/about" */))
const _ace615e4 = () => interopDefault(import('../pages/company/aboutSub.vue' /* webpackChunkName: "pages/company/aboutSub" */))
const _e2a58bf8 = () => interopDefault(import('../pages/company/ir.vue' /* webpackChunkName: "pages/company/ir" */))
const _7cb02d6a = () => interopDefault(import('../pages/company/ir-detail.vue' /* webpackChunkName: "pages/company/ir-detail" */))
const _3ae7aa72 = () => interopDefault(import('../pages/company/talent.vue' /* webpackChunkName: "pages/company/talent" */))
const _5f08f758 = () => interopDefault(import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */))
const _62cefc7c = () => interopDefault(import('../pages/news/main.vue' /* webpackChunkName: "pages/news/main" */))
const _a08daedc = () => interopDefault(import('../pages/policy/Payment.vue' /* webpackChunkName: "pages/policy/Payment" */))
const _7b39ed54 = () => interopDefault(import('../pages/policy/Policy.vue' /* webpackChunkName: "pages/policy/Policy" */))
const _926276da = () => interopDefault(import('../pages/policy/Terms.vue' /* webpackChunkName: "pages/policy/Terms" */))
const _6b175740 = () => interopDefault(import('../pages/products/make.vue' /* webpackChunkName: "pages/products/make" */))
const _5cd82d10 = () => interopDefault(import('../pages/products/ms.vue' /* webpackChunkName: "pages/products/ms" */))
const _2c30b10f = () => interopDefault(import('../pages/products/productsMain.vue' /* webpackChunkName: "pages/products/productsMain" */))
const _7043d718 = () => interopDefault(import('../pages/products/remote.vue' /* webpackChunkName: "pages/products/remote" */))
const _4b0d102e = () => interopDefault(import('../pages/products/track.vue' /* webpackChunkName: "pages/products/track" */))
const _69c4698c = () => interopDefault(import('../pages/products/twin.vue' /* webpackChunkName: "pages/products/twin" */))
const _a0174f12 = () => interopDefault(import('../pages/products/view.vue' /* webpackChunkName: "pages/products/view" */))
const _1fe4f1ec = () => interopDefault(import('../pages/support/demo.vue' /* webpackChunkName: "pages/support/demo" */))
const _5398359d = () => interopDefault(import('../pages/support/faq.vue' /* webpackChunkName: "pages/support/faq" */))
const _05513764 = () => interopDefault(import('../pages/support/inquiry.vue' /* webpackChunkName: "pages/support/inquiry" */))
const _61eb4aeb = () => interopDefault(import('../pages/support/learning-center.vue' /* webpackChunkName: "pages/support/learning-center" */))
const _de9ac2dc = () => interopDefault(import('../pages/support/learning-manual-detail.vue' /* webpackChunkName: "pages/support/learning-manual-detail" */))
const _59efa20e = () => interopDefault(import('../pages/support/learning-video-detail.vue' /* webpackChunkName: "pages/support/learning-video-detail" */))
const _031f1021 = () => interopDefault(import('../pages/support/notice.vue' /* webpackChunkName: "pages/support/notice" */))
const _5723acad = () => interopDefault(import('../pages/support/notice-detail.vue' /* webpackChunkName: "pages/support/notice-detail" */))
const _3a454893 = () => interopDefault(import('../pages/support/supportSubMain.vue' /* webpackChunkName: "pages/support/supportSubMain" */))
const _cfc170a2 = () => interopDefault(import('../pages/terms/charged.vue' /* webpackChunkName: "pages/terms/charged" */))
const _1194e73c = () => interopDefault(import('../pages/terms/persnal.vue' /* webpackChunkName: "pages/terms/persnal" */))
const _2fe1e098 = () => interopDefault(import('../pages/terms/service.vue' /* webpackChunkName: "pages/terms/service" */))
const _e00d620c = () => interopDefault(import('../pages/value/airline_railroad.vue' /* webpackChunkName: "pages/value/airline_railroad" */))
const _74fca4ce = () => interopDefault(import('../pages/value/energy_resource.vue' /* webpackChunkName: "pages/value/energy_resource" */))
const _37b63201 = () => interopDefault(import('../pages/value/epc.vue' /* webpackChunkName: "pages/value/epc" */))
const _e08eb902 = () => interopDefault(import('../pages/value/motor_parts.vue' /* webpackChunkName: "pages/value/motor_parts" */))
const _2491b394 = () => interopDefault(import('../pages/value/oil_chemical_battery.vue' /* webpackChunkName: "pages/value/oil_chemical_battery" */))
const _5df68ae0 = () => interopDefault(import('../pages/company/subCompany/Brand.vue' /* webpackChunkName: "pages/company/subCompany/Brand" */))
const _ded9324e = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _861213fc,
    name: "company-about"
  }, {
    path: "/company/aboutSub",
    component: _ace615e4,
    name: "company-aboutSub"
  }, {
    path: "/company/ir",
    component: _e2a58bf8,
    name: "company-ir"
  }, {
    path: "/company/ir-detail",
    component: _7cb02d6a,
    name: "company-ir-detail"
  }, {
    path: "/company/talent",
    component: _3ae7aa72,
    name: "company-talent"
  }, {
    path: "/news/detail",
    component: _5f08f758,
    name: "news-detail"
  }, {
    path: "/news/main",
    component: _62cefc7c,
    name: "news-main"
  }, {
    path: "/policy/Payment",
    component: _a08daedc,
    name: "policy-Payment"
  }, {
    path: "/policy/Policy",
    component: _7b39ed54,
    name: "policy-Policy"
  }, {
    path: "/policy/Terms",
    component: _926276da,
    name: "policy-Terms"
  }, {
    path: "/products/make",
    component: _6b175740,
    name: "products-make"
  }, {
    path: "/products/ms",
    component: _5cd82d10,
    name: "products-ms"
  }, {
    path: "/products/productsMain",
    component: _2c30b10f,
    name: "products-productsMain"
  }, {
    path: "/products/remote",
    component: _7043d718,
    name: "products-remote"
  }, {
    path: "/products/track",
    component: _4b0d102e,
    name: "products-track"
  }, {
    path: "/products/twin",
    component: _69c4698c,
    name: "products-twin"
  }, {
    path: "/products/view",
    component: _a0174f12,
    name: "products-view"
  }, {
    path: "/support/demo",
    component: _1fe4f1ec,
    name: "support-demo"
  }, {
    path: "/support/faq",
    component: _5398359d,
    name: "support-faq"
  }, {
    path: "/support/inquiry",
    component: _05513764,
    name: "support-inquiry"
  }, {
    path: "/support/learning-center",
    component: _61eb4aeb,
    name: "support-learning-center"
  }, {
    path: "/support/learning-manual-detail",
    component: _de9ac2dc,
    name: "support-learning-manual-detail"
  }, {
    path: "/support/learning-video-detail",
    component: _59efa20e,
    name: "support-learning-video-detail"
  }, {
    path: "/support/notice",
    component: _031f1021,
    name: "support-notice"
  }, {
    path: "/support/notice-detail",
    component: _5723acad,
    name: "support-notice-detail"
  }, {
    path: "/support/supportSubMain",
    component: _3a454893,
    name: "support-supportSubMain"
  }, {
    path: "/terms/charged",
    component: _cfc170a2,
    name: "terms-charged"
  }, {
    path: "/terms/persnal",
    component: _1194e73c,
    name: "terms-persnal"
  }, {
    path: "/terms/service",
    component: _2fe1e098,
    name: "terms-service"
  }, {
    path: "/value/airline_railroad",
    component: _e00d620c,
    name: "value-airline_railroad"
  }, {
    path: "/value/energy_resource",
    component: _74fca4ce,
    name: "value-energy_resource"
  }, {
    path: "/value/epc",
    component: _37b63201,
    name: "value-epc"
  }, {
    path: "/value/motor_parts",
    component: _e08eb902,
    name: "value-motor_parts"
  }, {
    path: "/value/oil_chemical_battery",
    component: _2491b394,
    name: "value-oil_chemical_battery"
  }, {
    path: "/company/subCompany/Brand",
    component: _5df68ae0,
    name: "company-subCompany-Brand"
  }, {
    path: "/",
    component: _ded9324e,
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
