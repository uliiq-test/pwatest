import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'

const _290484ed = () => interopDefault(import('..\\pages\\about\\index.vue' /* webpackChunkName: "pages_about_index" */))
const _6cd9bd0e = () => interopDefault(import('..\\pages\\artists\\index.vue' /* webpackChunkName: "pages_artists_index" */))
const _224fb311 = () => interopDefault(import('..\\pages\\bounties\\index.vue' /* webpackChunkName: "pages_bounties_index" */))
const _03fee556 = () => interopDefault(import('..\\pages\\products\\index.vue' /* webpackChunkName: "pages_products_index" */))
const _3981b943 = () => interopDefault(import('..\\pages\\rules\\index.vue' /* webpackChunkName: "pages_rules_index" */))
const _e0fe5688 = () => interopDefault(import('..\\pages\\tradelaw\\index.vue' /* webpackChunkName: "pages_tradelaw_index" */))
const _415cb821 = () => interopDefault(import('..\\pages\\account\\my\\index.vue' /* webpackChunkName: "pages_account_my_index" */))
const _54af4fb5 = () => interopDefault(import('..\\pages\\account\\signup\\index.vue' /* webpackChunkName: "pages_account_signup_index" */))
const _14b66560 = () => interopDefault(import('..\\pages\\account\\my\\artist_profile\\index.vue' /* webpackChunkName: "pages_account_my_artist_profile_index" */))
const _5d6419b8 = () => interopDefault(import('..\\pages\\account\\my\\bounties\\index.vue' /* webpackChunkName: "pages_account_my_bounties_index" */))
const _3f134bfd = () => interopDefault(import('..\\pages\\account\\my\\products\\index.vue' /* webpackChunkName: "pages_account_my_products_index" */))
const _2e81f1ca = () => interopDefault(import('..\\pages\\account\\my\\profile\\index.vue' /* webpackChunkName: "pages_account_my_profile_index" */))
const _4170f36d = () => interopDefault(import('..\\pages\\account\\my\\books\\create\\index.vue' /* webpackChunkName: "pages_account_my_books_create_index" */))
const _6f1fd1fe = () => interopDefault(import('..\\pages\\account\\my\\products\\create\\index.vue' /* webpackChunkName: "pages_account_my_products_create_index" */))
const _0a2faaf6 = () => interopDefault(import('..\\pages\\artists\\_id.vue' /* webpackChunkName: "pages_artists__id" */))
const _54bd748e = () => interopDefault(import('..\\pages\\bounties\\_id.vue' /* webpackChunkName: "pages_bounties__id" */))
const _6f92453e = () => interopDefault(import('..\\pages\\products\\_id.vue' /* webpackChunkName: "pages_products__id" */))
const _f403068c = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

Vue.use(Router)

if (process.client) {
  window.history.scrollRestoration = 'manual'
}
const scrollBehavior = function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false

  // if no children detected
  if (to.matched.length < 2) {
    // scroll to the top of the page
    position = { x: 0, y: 0 }
  } else if (to.matched.some(r => r.components.default.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = { x: 0, y: 0 }
  }

  // savedPosition is only available for popstate navigations (back button)
  if (savedPosition) {
    position = savedPosition
  }

  return new Promise((resolve) => {
    // wait for the out transition to complete (if necessary)
    window.$nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash
        // CSS.escape() is not supported with IE and Edge.
        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1))
        }
        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = { selector: hash }
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).')
        }
      }
      resolve(position)
    })
  })
}

export function createRouter() {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,

    routes: [{
      path: "/about",
      component: _290484ed,
      name: "about"
    }, {
      path: "/artists",
      component: _6cd9bd0e,
      name: "artists"
    }, {
      path: "/bounties",
      component: _224fb311,
      name: "bounties"
    }, {
      path: "/products",
      component: _03fee556,
      name: "products"
    }, {
      path: "/rules",
      component: _3981b943,
      name: "rules"
    }, {
      path: "/tradelaw",
      component: _e0fe5688,
      name: "tradelaw"
    }, {
      path: "/account/my",
      component: _415cb821,
      name: "account-my"
    }, {
      path: "/account/signup",
      component: _54af4fb5,
      name: "account-signup"
    }, {
      path: "/account/my/artist_profile",
      component: _14b66560,
      name: "account-my-artist_profile"
    }, {
      path: "/account/my/bounties",
      component: _5d6419b8,
      name: "account-my-bounties"
    }, {
      path: "/account/my/products",
      component: _3f134bfd,
      name: "account-my-products"
    }, {
      path: "/account/my/profile",
      component: _2e81f1ca,
      name: "account-my-profile"
    }, {
      path: "/account/my/books/create",
      component: _4170f36d,
      name: "account-my-books-create"
    }, {
      path: "/account/my/products/create",
      component: _6f1fd1fe,
      name: "account-my-products-create"
    }, {
      path: "/artists/:id",
      component: _0a2faaf6,
      name: "artists-id"
    }, {
      path: "/bounties/:id",
      component: _54bd748e,
      name: "bounties-id"
    }, {
      path: "/products/:id",
      component: _6f92453e,
      name: "products-id"
    }, {
      path: "/",
      component: _f403068c,
      name: "index"
    }],

    fallback: false
  })
}
