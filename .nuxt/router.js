import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _216c3c0a = () => interopDefault(import('../pages/company/about.vue' /* webpackChunkName: "pages/company/about" */))
const _2d814b16 = () => interopDefault(import('../pages/company/aboutSub.vue' /* webpackChunkName: "pages/company/aboutSub" */))
const _07d578ab = () => interopDefault(import('../pages/company/ir.vue' /* webpackChunkName: "pages/company/ir" */))
const _334a74e3 = () => interopDefault(import('../pages/company/ir-detail.vue' /* webpackChunkName: "pages/company/ir-detail" */))
const _0ad28424 = () => interopDefault(import('../pages/company/talent.vue' /* webpackChunkName: "pages/company/talent" */))
const _7c5b1a8d = () => interopDefault(import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */))
const _0be0ccf5 = () => interopDefault(import('../pages/news/main.vue' /* webpackChunkName: "pages/news/main" */))
const _7078888e = () => interopDefault(import('../pages/policy/Payment.vue' /* webpackChunkName: "pages/policy/Payment" */))
const _16941562 = () => interopDefault(import('../pages/policy/Policy.vue' /* webpackChunkName: "pages/policy/Policy" */))
const _f23c150c = () => interopDefault(import('../pages/policy/Terms.vue' /* webpackChunkName: "pages/policy/Terms" */))
const _c52b798e = () => interopDefault(import('../pages/products/make.vue' /* webpackChunkName: "pages/products/make" */))
const _7d737fb1 = () => interopDefault(import('../pages/products/ms.vue' /* webpackChunkName: "pages/products/ms" */))
const _160ed7f0 = () => interopDefault(import('../pages/products/productsMain.vue' /* webpackChunkName: "pages/products/productsMain" */))
const _598ba8d1 = () => interopDefault(import('../pages/products/remote.vue' /* webpackChunkName: "pages/products/remote" */))
const _1af7e9e0 = () => interopDefault(import('../pages/products/track.vue' /* webpackChunkName: "pages/products/track" */))
const _051e919a = () => interopDefault(import('../pages/products/twin.vue' /* webpackChunkName: "pages/products/twin" */))
const _3b717720 = () => interopDefault(import('../pages/products/view.vue' /* webpackChunkName: "pages/products/view" */))
const _200fba5a = () => interopDefault(import('../pages/support/demo.vue' /* webpackChunkName: "pages/support/demo" */))
const _01106854 = () => interopDefault(import('../pages/support/faq.vue' /* webpackChunkName: "pages/support/faq" */))
const _32c193f2 = () => interopDefault(import('../pages/support/inquiry.vue' /* webpackChunkName: "pages/support/inquiry" */))
const _184653a4 = () => interopDefault(import('../pages/support/learning-center.vue' /* webpackChunkName: "pages/support/learning-center" */))
const _291803b9 = () => interopDefault(import('../pages/support/learning-manual-detail.vue' /* webpackChunkName: "pages/support/learning-manual-detail" */))
const _f543ee1c = () => interopDefault(import('../pages/support/learning-video-detail.vue' /* webpackChunkName: "pages/support/learning-video-detail" */))
const _1b29a348 = () => interopDefault(import('../pages/support/notice.vue' /* webpackChunkName: "pages/support/notice" */))
const _1feb8fa6 = () => interopDefault(import('../pages/support/notice-detail.vue' /* webpackChunkName: "pages/support/notice-detail" */))
const _eb0c768c = () => interopDefault(import('../pages/support/supportSubMain.vue' /* webpackChunkName: "pages/support/supportSubMain" */))
const _6b1b98b0 = () => interopDefault(import('../pages/terms/charged.vue' /* webpackChunkName: "pages/terms/charged" */))
const _2988785b = () => interopDefault(import('../pages/terms/persnal.vue' /* webpackChunkName: "pages/terms/persnal" */))
const _1a61fbad = () => interopDefault(import('../pages/terms/service.vue' /* webpackChunkName: "pages/terms/service" */))
const _a34c672c = () => interopDefault(import('../pages/value/entertainment.vue' /* webpackChunkName: "pages/value/entertainment" */))
const _30c93614 = () => interopDefault(import('../pages/value/etc.vue' /* webpackChunkName: "pages/value/etc" */))
const _2d9894ab = () => interopDefault(import('../pages/value/infra_resource.vue' /* webpackChunkName: "pages/value/infra_resource" */))
const _8c856bc6 = () => interopDefault(import('../pages/value/manufacture_construction.vue' /* webpackChunkName: "pages/value/manufacture_construction" */))
const _0544e460 = () => interopDefault(import('../pages/value/public_education.vue' /* webpackChunkName: "pages/value/public_education" */))
const _33ea6e12 = () => interopDefault(import('../pages/company/subCompany/Brand.vue' /* webpackChunkName: "pages/company/subCompany/Brand" */))
const _aeeb485c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _216c3c0a,
    name: "company-about"
  }, {
    path: "/company/aboutSub",
    component: _2d814b16,
    name: "company-aboutSub"
  }, {
    path: "/company/ir",
    component: _07d578ab,
    name: "company-ir"
  }, {
    path: "/company/ir-detail",
    component: _334a74e3,
    name: "company-ir-detail"
  }, {
    path: "/company/talent",
    component: _0ad28424,
    name: "company-talent"
  }, {
    path: "/news/detail",
    component: _7c5b1a8d,
    name: "news-detail"
  }, {
    path: "/news/main",
    component: _0be0ccf5,
    name: "news-main"
  }, {
    path: "/policy/Payment",
    component: _7078888e,
    name: "policy-Payment"
  }, {
    path: "/policy/Policy",
    component: _16941562,
    name: "policy-Policy"
  }, {
    path: "/policy/Terms",
    component: _f23c150c,
    name: "policy-Terms"
  }, {
    path: "/products/make",
    component: _c52b798e,
    name: "products-make"
  }, {
    path: "/products/ms",
    component: _7d737fb1,
    name: "products-ms"
  }, {
    path: "/products/productsMain",
    component: _160ed7f0,
    name: "products-productsMain"
  }, {
    path: "/products/remote",
    component: _598ba8d1,
    name: "products-remote"
  }, {
    path: "/products/track",
    component: _1af7e9e0,
    name: "products-track"
  }, {
    path: "/products/twin",
    component: _051e919a,
    name: "products-twin"
  }, {
    path: "/products/view",
    component: _3b717720,
    name: "products-view"
  }, {
    path: "/support/demo",
    component: _200fba5a,
    name: "support-demo"
  }, {
    path: "/support/faq",
    component: _01106854,
    name: "support-faq"
  }, {
    path: "/support/inquiry",
    component: _32c193f2,
    name: "support-inquiry"
  }, {
    path: "/support/learning-center",
    component: _184653a4,
    name: "support-learning-center"
  }, {
    path: "/support/learning-manual-detail",
    component: _291803b9,
    name: "support-learning-manual-detail"
  }, {
    path: "/support/learning-video-detail",
    component: _f543ee1c,
    name: "support-learning-video-detail"
  }, {
    path: "/support/notice",
    component: _1b29a348,
    name: "support-notice"
  }, {
    path: "/support/notice-detail",
    component: _1feb8fa6,
    name: "support-notice-detail"
  }, {
    path: "/support/supportSubMain",
    component: _eb0c768c,
    name: "support-supportSubMain"
  }, {
    path: "/terms/charged",
    component: _6b1b98b0,
    name: "terms-charged"
  }, {
    path: "/terms/persnal",
    component: _2988785b,
    name: "terms-persnal"
  }, {
    path: "/terms/service",
    component: _1a61fbad,
    name: "terms-service"
  }, {
    path: "/value/entertainment",
    component: _a34c672c,
    name: "value-entertainment"
  }, {
    path: "/value/etc",
    component: _30c93614,
    name: "value-etc"
  }, {
    path: "/value/infra_resource",
    component: _2d9894ab,
    name: "value-infra_resource"
  }, {
    path: "/value/manufacture_construction",
    component: _8c856bc6,
    name: "value-manufacture_construction"
  }, {
    path: "/value/public_education",
    component: _0544e460,
    name: "value-public_education"
  }, {
    path: "/company/subCompany/Brand",
    component: _33ea6e12,
    name: "company-subCompany-Brand"
  }, {
    path: "/",
    component: _aeeb485c,
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
