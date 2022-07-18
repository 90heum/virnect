import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ca203302 = () => interopDefault(import('../pages/company/about.vue' /* webpackChunkName: "pages/company/about" */))
const _5432511e = () => interopDefault(import('../pages/company/aboutSub.vue' /* webpackChunkName: "pages/company/aboutSub" */))
const _732d62a7 = () => interopDefault(import('../pages/company/ir.vue' /* webpackChunkName: "pages/company/ir" */))
const _48dad132 = () => interopDefault(import('../pages/company/ir-detail.vue' /* webpackChunkName: "pages/company/ir-detail" */))
const _789d6c2c = () => interopDefault(import('../pages/company/talent.vue' /* webpackChunkName: "pages/company/talent" */))
const _7c007011 = () => interopDefault(import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */))
const _4925b379 = () => interopDefault(import('../pages/news/main.vue' /* webpackChunkName: "pages/news/main" */))
const _de437096 = () => interopDefault(import('../pages/policy/Payment.vue' /* webpackChunkName: "pages/policy/Payment" */))
const _bf480c5a = () => interopDefault(import('../pages/policy/Policy.vue' /* webpackChunkName: "pages/policy/Policy" */))
const _7be75076 = () => interopDefault(import('../pages/policy/Terms.vue' /* webpackChunkName: "pages/policy/Terms" */))
const _491047bd = () => interopDefault(import('../pages/products/make.vue' /* webpackChunkName: "pages/products/make" */))
const _7d18d535 = () => interopDefault(import('../pages/products/ms.vue' /* webpackChunkName: "pages/products/ms" */))
const _1fa3d48c = () => interopDefault(import('../pages/products/productsMain.vue' /* webpackChunkName: "pages/products/productsMain" */))
const _987ac756 = () => interopDefault(import('../pages/products/remote.vue' /* webpackChunkName: "pages/products/remote" */))
const _88c2d1e8 = () => interopDefault(import('../pages/products/track.vue' /* webpackChunkName: "pages/products/track" */))
const _add28892 = () => interopDefault(import('../pages/products/twin.vue' /* webpackChunkName: "pages/products/twin" */))
const _e4256e18 = () => interopDefault(import('../pages/products/view.vue' /* webpackChunkName: "pages/products/view" */))
const _36050462 = () => interopDefault(import('../pages/support/demo.vue' /* webpackChunkName: "pages/support/demo" */))
const _01c5bd4c = () => interopDefault(import('../pages/support/faq.vue' /* webpackChunkName: "pages/support/faq" */))
const _40d6298b = () => interopDefault(import('../pages/support/inquiry.vue' /* webpackChunkName: "pages/support/inquiry" */))
const _45238328 = () => interopDefault(import('../pages/support/learning-center.vue' /* webpackChunkName: "pages/support/learning-center" */))
const _20f317b5 = () => interopDefault(import('../pages/support/learning-manual-detail.vue' /* webpackChunkName: "pages/support/learning-manual-detail" */))
const _64128576 = () => interopDefault(import('../pages/support/learning-video-detail.vue' /* webpackChunkName: "pages/support/learning-video-detail" */))
const _3777a178 = () => interopDefault(import('../pages/support/notice.vue' /* webpackChunkName: "pages/support/notice" */))
const _4a96d02a = () => interopDefault(import('../pages/support/notice-detail.vue' /* webpackChunkName: "pages/support/notice-detail" */))
const _9592d694 = () => interopDefault(import('../pages/support/supportSubMain.vue' /* webpackChunkName: "pages/support/supportSubMain" */))
const _7618382c = () => interopDefault(import('../pages/terms/charged.vue' /* webpackChunkName: "pages/terms/charged" */))
const _55a30642 = () => interopDefault(import('../pages/terms/persnal.vue' /* webpackChunkName: "pages/terms/persnal" */))
const _73efff9e = () => interopDefault(import('../pages/terms/service.vue' /* webpackChunkName: "pages/terms/service" */))
const _65235dee = () => interopDefault(import('../pages/value/entertainment.vue' /* webpackChunkName: "pages/value/entertainment" */))
const _24e04b7a = () => interopDefault(import('../pages/value/etc.vue' /* webpackChunkName: "pages/value/etc" */))
const _500133a7 = () => interopDefault(import('../pages/value/infra_resource.vue' /* webpackChunkName: "pages/value/infra_resource" */))
const _9ccf43ce = () => interopDefault(import('../pages/value/manufacture_construction.vue' /* webpackChunkName: "pages/value/manufacture_construction" */))
const _3001b45c = () => interopDefault(import('../pages/value/public_education.vue' /* webpackChunkName: "pages/value/public_education" */))
const _54d389f3 = () => interopDefault(import('../pages/company/subCompany/Brand.vue' /* webpackChunkName: "pages/company/subCompany/Brand" */))
const _4e2f2456 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _ca203302,
    name: "company-about"
  }, {
    path: "/company/aboutSub",
    component: _5432511e,
    name: "company-aboutSub"
  }, {
    path: "/company/ir",
    component: _732d62a7,
    name: "company-ir"
  }, {
    path: "/company/ir-detail",
    component: _48dad132,
    name: "company-ir-detail"
  }, {
    path: "/company/talent",
    component: _789d6c2c,
    name: "company-talent"
  }, {
    path: "/news/detail",
    component: _7c007011,
    name: "news-detail"
  }, {
    path: "/news/main",
    component: _4925b379,
    name: "news-main"
  }, {
    path: "/policy/Payment",
    component: _de437096,
    name: "policy-Payment"
  }, {
    path: "/policy/Policy",
    component: _bf480c5a,
    name: "policy-Policy"
  }, {
    path: "/policy/Terms",
    component: _7be75076,
    name: "policy-Terms"
  }, {
    path: "/products/make",
    component: _491047bd,
    name: "products-make"
  }, {
    path: "/products/ms",
    component: _7d18d535,
    name: "products-ms"
  }, {
    path: "/products/productsMain",
    component: _1fa3d48c,
    name: "products-productsMain"
  }, {
    path: "/products/remote",
    component: _987ac756,
    name: "products-remote"
  }, {
    path: "/products/track",
    component: _88c2d1e8,
    name: "products-track"
  }, {
    path: "/products/twin",
    component: _add28892,
    name: "products-twin"
  }, {
    path: "/products/view",
    component: _e4256e18,
    name: "products-view"
  }, {
    path: "/support/demo",
    component: _36050462,
    name: "support-demo"
  }, {
    path: "/support/faq",
    component: _01c5bd4c,
    name: "support-faq"
  }, {
    path: "/support/inquiry",
    component: _40d6298b,
    name: "support-inquiry"
  }, {
    path: "/support/learning-center",
    component: _45238328,
    name: "support-learning-center"
  }, {
    path: "/support/learning-manual-detail",
    component: _20f317b5,
    name: "support-learning-manual-detail"
  }, {
    path: "/support/learning-video-detail",
    component: _64128576,
    name: "support-learning-video-detail"
  }, {
    path: "/support/notice",
    component: _3777a178,
    name: "support-notice"
  }, {
    path: "/support/notice-detail",
    component: _4a96d02a,
    name: "support-notice-detail"
  }, {
    path: "/support/supportSubMain",
    component: _9592d694,
    name: "support-supportSubMain"
  }, {
    path: "/terms/charged",
    component: _7618382c,
    name: "terms-charged"
  }, {
    path: "/terms/persnal",
    component: _55a30642,
    name: "terms-persnal"
  }, {
    path: "/terms/service",
    component: _73efff9e,
    name: "terms-service"
  }, {
    path: "/value/entertainment",
    component: _65235dee,
    name: "value-entertainment"
  }, {
    path: "/value/etc",
    component: _24e04b7a,
    name: "value-etc"
  }, {
    path: "/value/infra_resource",
    component: _500133a7,
    name: "value-infra_resource"
  }, {
    path: "/value/manufacture_construction",
    component: _9ccf43ce,
    name: "value-manufacture_construction"
  }, {
    path: "/value/public_education",
    component: _3001b45c,
    name: "value-public_education"
  }, {
    path: "/company/subCompany/Brand",
    component: _54d389f3,
    name: "company-subCompany-Brand"
  }, {
    path: "/",
    component: _4e2f2456,
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
