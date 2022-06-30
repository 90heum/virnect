import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _ca203302 = () => interopDefault(import('../pages/company/about.vue' /* webpackChunkName: "pages/company/about" */))
const _732d62a7 = () => interopDefault(import('../pages/company/ir.vue' /* webpackChunkName: "pages/company/ir" */))
const _789d6c2c = () => interopDefault(import('../pages/company/talent.vue' /* webpackChunkName: "pages/company/talent" */))
const _024a1e1a = () => interopDefault(import('../pages/energy/energy.vue' /* webpackChunkName: "pages/energy/energy" */))
const _491047bd = () => interopDefault(import('../pages/products/make.vue' /* webpackChunkName: "pages/products/make" */))
const _7d18d535 = () => interopDefault(import('../pages/products/ms.vue' /* webpackChunkName: "pages/products/ms" */))
const _987ac756 = () => interopDefault(import('../pages/products/remote.vue' /* webpackChunkName: "pages/products/remote" */))
const _88c2d1e8 = () => interopDefault(import('../pages/products/track.vue' /* webpackChunkName: "pages/products/track" */))
const _add28892 = () => interopDefault(import('../pages/products/twin.vue' /* webpackChunkName: "pages/products/twin" */))
const _e4256e18 = () => interopDefault(import('../pages/products/view.vue' /* webpackChunkName: "pages/products/view" */))
const _13c91414 = () => interopDefault(import('../pages/solutions/airline_railroad.vue' /* webpackChunkName: "pages/solutions/airline_railroad" */))
const _4ff2d474 = () => interopDefault(import('../pages/solutions/energy_resource.vue' /* webpackChunkName: "pages/solutions/energy_resource" */))
const _2fea2aa7 = () => interopDefault(import('../pages/solutions/epc.vue' /* webpackChunkName: "pages/solutions/epc" */))
const _14d49625 = () => interopDefault(import('../pages/solutions/motor_parts.vue' /* webpackChunkName: "pages/solutions/motor_parts" */))
const _02655bae = () => interopDefault(import('../pages/solutions/oil_chemical_battery.vue' /* webpackChunkName: "pages/solutions/oil_chemical_battery" */))
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
    path: "/company/ir",
    component: _732d62a7,
    name: "company-ir"
  }, {
    path: "/company/talent",
    component: _789d6c2c,
    name: "company-talent"
  }, {
    path: "/energy/energy",
    component: _024a1e1a,
    name: "energy-energy"
  }, {
    path: "/products/make",
    component: _491047bd,
    name: "products-make"
  }, {
    path: "/products/ms",
    component: _7d18d535,
    name: "products-ms"
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
    path: "/solutions/airline_railroad",
    component: _13c91414,
    name: "solutions-airline_railroad"
  }, {
    path: "/solutions/energy_resource",
    component: _4ff2d474,
    name: "solutions-energy_resource"
  }, {
    path: "/solutions/epc",
    component: _2fea2aa7,
    name: "solutions-epc"
  }, {
    path: "/solutions/motor_parts",
    component: _14d49625,
    name: "solutions-motor_parts"
  }, {
    path: "/solutions/oil_chemical_battery",
    component: _02655bae,
    name: "solutions-oil_chemical_battery"
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
