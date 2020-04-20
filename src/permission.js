import Vue from 'vue'
import router from '@/router'
import store from './store'
import NProgress from 'nprogress' // progress bar
import 'nprogress/nprogress.css' // progress bar style
import { getToken } from '@/utils/auth' // get token from cookie
import getPageTitle from '@/utils/demos/get-page-title'
import { when } from './utils/request'
import { xbTokenKey } from '@/settings'

const vm = new Vue()

NProgress.configure({ showSpinner: false }) // NProgress Configuration

const whiteList = ['/login', '/auth-redirect'] // no redirect whitelist

router.beforeEach(async(to, from, next) => {
  // start progress bar
  NProgress.start()

  // set page title
  document.title = getPageTitle(to.meta.title)

  // determine whether the user has logged in
  const hasXbToken = getToken(xbTokenKey)

  if (hasXbToken) {
    if (to.path === '/login') {
      next({ path: '/' })
      NProgress.done()
    } else {
      const hasMenus = store.getters.menus && store.getters.menus.length > 0
      const hasUser = store.getters.user && store.getters.user.id
      if (hasMenus && hasUser) {
        next()
      } else {
        try {
          const [menus] = await when(
            store.dispatch('userinfo/getSidebarMenus'),
            store.dispatch('userinfo/getUser')
          )
          const accessRoutes = await store.dispatch('permission/generateMainRoutes', menus)

          router.addRoutes(accessRoutes)
          next({ ...to, replace: true })
        } catch (error) {
          // remove token and go to login page to re-login
          await store.dispatch('user/resetToken')
          vm.$message.error(error || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      }
    }
  } else {
    /* has no token*/

    if (whiteList.indexOf(to.path) !== -1) {
      // in the free login whitelist, go directly
      next()
    } else {
      // other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach(() => {
  // finish progress bar
  NProgress.done()
})
