import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6a2e64ec = () => interopDefault(import('../pages/company/about.vue' /* webpackChunkName: "pages/company/about" */))
const _0f6125e4 = () => interopDefault(import('../pages/company/aboutSub.vue' /* webpackChunkName: "pages/company/aboutSub" */))
const _3054435a = () => interopDefault(import('../pages/company/ir.vue' /* webpackChunkName: "pages/company/ir" */))
const _5d3bd158 = () => interopDefault(import('../pages/company/ir-detail.vue' /* webpackChunkName: "pages/company/ir-detail" */))
const _477acdc6 = () => interopDefault(import('../pages/company/talent.vue' /* webpackChunkName: "pages/company/talent" */))
const _63b5a5be = () => interopDefault(import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */))
const _abd31f34 = () => interopDefault(import('../pages/news/main.vue' /* webpackChunkName: "pages/news/main" */))
const _ad20d230 = () => interopDefault(import('../pages/policy/Payment.vue' /* webpackChunkName: "pages/policy/Payment" */))
const _6f9a7840 = () => interopDefault(import('../pages/policy/Policy.vue' /* webpackChunkName: "pages/policy/Policy" */))
const _ea4e5f2e = () => interopDefault(import('../pages/policy/Terms.vue' /* webpackChunkName: "pages/policy/Terms" */))
const _184ec62a = () => interopDefault(import('../pages/products/make.vue' /* webpackChunkName: "pages/products/make" */))
const _64ce0ae2 = () => interopDefault(import('../pages/products/ms.vue' /* webpackChunkName: "pages/products/ms" */))
const _beb0d40e = () => interopDefault(import('../pages/products/productsMain.vue' /* webpackChunkName: "pages/products/productsMain" */))
const _a54998fc = () => interopDefault(import('../pages/products/remote.vue' /* webpackChunkName: "pages/products/remote" */))
const _57a03382 = () => interopDefault(import('../pages/products/track.vue' /* webpackChunkName: "pages/products/track" */))
const _78553a24 = () => interopDefault(import('../pages/products/twin.vue' /* webpackChunkName: "pages/products/twin" */))
const _5d2bc761 = () => interopDefault(import('../pages/products/view.vue' /* webpackChunkName: "pages/products/view" */))
const _1822047c = () => interopDefault(import('../pages/support/demo.vue' /* webpackChunkName: "pages/support/demo" */))
const _325b51f2 = () => interopDefault(import('../pages/support/faq.vue' /* webpackChunkName: "pages/support/faq" */))
const _3a6ec0b8 = () => interopDefault(import('../pages/support/inquiry.vue' /* webpackChunkName: "pages/support/inquiry" */))
const _d786c556 = () => interopDefault(import('../pages/support/learning-center.vue' /* webpackChunkName: "pages/support/learning-center" */))
const _74dda0e8 = () => interopDefault(import('../pages/support/learning-manual-detail.vue' /* webpackChunkName: "pages/support/learning-manual-detail" */))
const _2a2eec3a = () => interopDefault(import('../pages/support/learning-video-detail.vue' /* webpackChunkName: "pages/support/learning-video-detail" */))
const _06550312 = () => interopDefault(import('../pages/support/notice.vue' /* webpackChunkName: "pages/support/notice" */))
const _68cadcd2 = () => interopDefault(import('../pages/support/notice-detail.vue' /* webpackChunkName: "pages/support/notice-detail" */))
const _54ab00e9 = () => interopDefault(import('../pages/support/supportSubMain.vue' /* webpackChunkName: "pages/support/supportSubMain" */))
const _4556b699 = () => interopDefault(import('../pages/terms/charged.vue' /* webpackChunkName: "pages/terms/charged" */))
const _b7260968 = () => interopDefault(import('../pages/terms/persnal.vue' /* webpackChunkName: "pages/terms/persnal" */))
const _d57302c4 = () => interopDefault(import('../pages/terms/service.vue' /* webpackChunkName: "pages/terms/service" */))
const _2512969b = () => interopDefault(import('../pages/value/entertainment.vue' /* webpackChunkName: "pages/value/entertainment" */))
const _f45def32 = () => interopDefault(import('../pages/value/etc.vue' /* webpackChunkName: "pages/value/etc" */))
const _e40ddecc = () => interopDefault(import('../pages/value/infra_resource.vue' /* webpackChunkName: "pages/value/infra_resource" */))
const _0582e74c = () => interopDefault(import('../pages/value/manufacture_construction.vue' /* webpackChunkName: "pages/value/manufacture_construction" */))
const _6113bee2 = () => interopDefault(import('../pages/value/public_education.vue' /* webpackChunkName: "pages/value/public_education" */))
const _2e449534 = () => interopDefault(import('../pages/company/subCompany/Brand.vue' /* webpackChunkName: "pages/company/subCompany/Brand" */))
const _1cb55fc3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _6a2e64ec,
    name: "company-about"
  }, {
    path: "/company/aboutSub",
    component: _0f6125e4,
    name: "company-aboutSub"
  }, {
    path: "/company/ir",
    component: _3054435a,
    name: "company-ir"
  }, {
    path: "/company/ir-detail",
    component: _5d3bd158,
    name: "company-ir-detail"
  }, {
    path: "/company/talent",
    component: _477acdc6,
    name: "company-talent"
  }, {
    path: "/news/detail",
    component: _63b5a5be,
    name: "news-detail"
  }, {
    path: "/news/main",
    component: _abd31f34,
    name: "news-main"
  }, {
    path: "/policy/Payment",
    component: _ad20d230,
    name: "policy-Payment"
  }, {
    path: "/policy/Policy",
    component: _6f9a7840,
    name: "policy-Policy"
  }, {
    path: "/policy/Terms",
    component: _ea4e5f2e,
    name: "policy-Terms"
  }, {
    path: "/products/make",
    component: _184ec62a,
    name: "products-make"
  }, {
    path: "/products/ms",
    component: _64ce0ae2,
    name: "products-ms"
  }, {
    path: "/products/productsMain",
    component: _beb0d40e,
    name: "products-productsMain"
  }, {
    path: "/products/remote",
    component: _a54998fc,
    name: "products-remote"
  }, {
    path: "/products/track",
    component: _57a03382,
    name: "products-track"
  }, {
    path: "/products/twin",
    component: _78553a24,
    name: "products-twin"
  }, {
    path: "/products/view",
    component: _5d2bc761,
    name: "products-view"
  }, {
    path: "/support/demo",
    component: _1822047c,
    name: "support-demo"
  }, {
    path: "/support/faq",
    component: _325b51f2,
    name: "support-faq"
  }, {
    path: "/support/inquiry",
    component: _3a6ec0b8,
    name: "support-inquiry"
  }, {
    path: "/support/learning-center",
    component: _d786c556,
    name: "support-learning-center"
  }, {
    path: "/support/learning-manual-detail",
    component: _74dda0e8,
    name: "support-learning-manual-detail"
  }, {
    path: "/support/learning-video-detail",
    component: _2a2eec3a,
    name: "support-learning-video-detail"
  }, {
    path: "/support/notice",
    component: _06550312,
    name: "support-notice"
  }, {
    path: "/support/notice-detail",
    component: _68cadcd2,
    name: "support-notice-detail"
  }, {
    path: "/support/supportSubMain",
    component: _54ab00e9,
    name: "support-supportSubMain"
  }, {
    path: "/terms/charged",
    component: _4556b699,
    name: "terms-charged"
  }, {
    path: "/terms/persnal",
    component: _b7260968,
    name: "terms-persnal"
  }, {
    path: "/terms/service",
    component: _d57302c4,
    name: "terms-service"
  }, {
    path: "/value/entertainment",
    component: _2512969b,
    name: "value-entertainment"
  }, {
    path: "/value/etc",
    component: _f45def32,
    name: "value-etc"
  }, {
    path: "/value/infra_resource",
    component: _e40ddecc,
    name: "value-infra_resource"
  }, {
    path: "/value/manufacture_construction",
    component: _0582e74c,
    name: "value-manufacture_construction"
  }, {
    path: "/value/public_education",
    component: _6113bee2,
    name: "value-public_education"
  }, {
    path: "/company/subCompany/Brand",
    component: _2e449534,
    name: "company-subCompany-Brand"
  }, {
    path: "/",
    component: _1cb55fc3,
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
