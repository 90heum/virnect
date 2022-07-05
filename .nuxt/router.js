import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _74945477 = () => interopDefault(import('../pages/company/about.vue' /* webpackChunkName: "pages/company/about" */))
const _b98f10a2 = () => interopDefault(import('../pages/company/ir.vue' /* webpackChunkName: "pages/company/ir" */))
const _1e9a9af2 = () => interopDefault(import('../pages/company/talent.vue' /* webpackChunkName: "pages/company/talent" */))
const _22b4b5b5 = () => interopDefault(import('../pages/products/make.vue' /* webpackChunkName: "pages/products/make" */))
const _4e70612d = () => interopDefault(import('../pages/products/ms.vue' /* webpackChunkName: "pages/products/ms" */))
const _93f92766 = () => interopDefault(import('../pages/products/remote.vue' /* webpackChunkName: "pages/products/remote" */))
const _1687e814 = () => interopDefault(import('../pages/products/track.vue' /* webpackChunkName: "pages/products/track" */))
const _fa89aca2 = () => interopDefault(import('../pages/products/twin.vue' /* webpackChunkName: "pages/products/twin" */))
const _6791b6ec = () => interopDefault(import('../pages/products/view.vue' /* webpackChunkName: "pages/products/view" */))
const _4259191c = () => interopDefault(import('../pages/solutions/airline_railroad.vue' /* webpackChunkName: "pages/solutions/airline_railroad" */))
const _a76be328 = () => interopDefault(import('../pages/solutions/energy_resource.vue' /* webpackChunkName: "pages/solutions/energy_resource" */))
const _098e989f = () => interopDefault(import('../pages/solutions/epc.vue' /* webpackChunkName: "pages/solutions/epc" */))
const _5ff0e7c6 = () => interopDefault(import('../pages/solutions/motor_parts.vue' /* webpackChunkName: "pages/solutions/motor_parts" */))
const _a048c694 = () => interopDefault(import('../pages/solutions/oil_chemical_battery.vue' /* webpackChunkName: "pages/solutions/oil_chemical_battery" */))
const _5f16a55c = () => interopDefault(import('../pages/support/faq.vue' /* webpackChunkName: "pages/support/faq" */))
const _4316f983 = () => interopDefault(import('../pages/support/inquiry.vue' /* webpackChunkName: "pages/support/inquiry" */))
const _011e49c0 = () => interopDefault(import('../pages/support/learning-center.vue' /* webpackChunkName: "pages/support/learning-center" */))
const _632d4e86 = () => interopDefault(import('../pages/support/learning-manual-detail.vue' /* webpackChunkName: "pages/support/learning-manual-detail" */))
const _2467f924 = () => interopDefault(import('../pages/support/learning-video-detail.vue' /* webpackChunkName: "pages/support/learning-video-detail" */))
const _3f2d804c = () => interopDefault(import('../pages/support/notice.vue' /* webpackChunkName: "pages/support/notice" */))
const _05c9c622 = () => interopDefault(import('../pages/support/notice-detail.vue' /* webpackChunkName: "pages/support/notice-detail" */))
const _379d9e0a = () => interopDefault(import('../pages/company/subCompany/Brand.vue' /* webpackChunkName: "pages/company/subCompany/Brand" */))
const _a985eb64 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _74945477,
    name: "company-about"
  }, {
    path: "/company/ir",
    component: _b98f10a2,
    name: "company-ir"
  }, {
    path: "/company/talent",
    component: _1e9a9af2,
    name: "company-talent"
  }, {
    path: "/products/make",
    component: _22b4b5b5,
    name: "products-make"
  }, {
    path: "/products/ms",
    component: _4e70612d,
    name: "products-ms"
  }, {
    path: "/products/remote",
    component: _93f92766,
    name: "products-remote"
  }, {
    path: "/products/track",
    component: _1687e814,
    name: "products-track"
  }, {
    path: "/products/twin",
    component: _fa89aca2,
    name: "products-twin"
  }, {
    path: "/products/view",
    component: _6791b6ec,
    name: "products-view"
  }, {
    path: "/solutions/airline_railroad",
    component: _4259191c,
    name: "solutions-airline_railroad"
  }, {
    path: "/solutions/energy_resource",
    component: _a76be328,
    name: "solutions-energy_resource"
  }, {
    path: "/solutions/epc",
    component: _098e989f,
    name: "solutions-epc"
  }, {
    path: "/solutions/motor_parts",
    component: _5ff0e7c6,
    name: "solutions-motor_parts"
  }, {
    path: "/solutions/oil_chemical_battery",
    component: _a048c694,
    name: "solutions-oil_chemical_battery"
  }, {
    path: "/support/faq",
    component: _5f16a55c,
    name: "support-faq"
  }, {
    path: "/support/inquiry",
    component: _4316f983,
    name: "support-inquiry"
  }, {
    path: "/support/learning-center",
    component: _011e49c0,
    name: "support-learning-center"
  }, {
    path: "/support/learning-manual-detail",
    component: _632d4e86,
    name: "support-learning-manual-detail"
  }, {
    path: "/support/learning-video-detail",
    component: _2467f924,
    name: "support-learning-video-detail"
  }, {
    path: "/support/notice",
    component: _3f2d804c,
    name: "support-notice"
  }, {
    path: "/support/notice-detail",
    component: _05c9c622,
    name: "support-notice-detail"
  }, {
    path: "/company/subCompany/Brand",
    component: _379d9e0a,
    name: "company-subCompany-Brand"
  }, {
    path: "/",
    component: _a985eb64,
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
