import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4f01422a = () => interopDefault(import('../pages/energy/energy.vue' /* webpackChunkName: "pages/energy/energy" */))
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
    path: "/energy/energy",
    component: _4f01422a,
    name: "energy-energy"
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
