// import Vue from 'nativescript-vue'
// import App from './components/App'
// import store from './store';
// import Login from './components/Login'
// import Home from './components/Home'

// import VueDevtools from 'nativescript-vue-devtools'

// if (TNS_ENV !== 'production') {
//   Vue.use(VueDevtools)
// }
// // Prints Vue logs when --env.production is *NOT* set while building
// Vue.config.silent = (TNS_ENV === 'production')

// Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

// Vue.registerElement(
//   'CardView',
//   () => require('nativescript-cardview').CardView
// );


// new Vue({
//   store,
//   render: h => h('frame', [h(App)])
//   // render: h => h("frame", [h(Home)])

// }).$start()




import Vue from 'nativescript-vue'
import routes from './router'
import store from './store'
import sideDrawer from './components/sideDrawer'
import drawerContent from './components/drawerContent'

Vue.config.silent = (TNS_ENV === 'production')

Vue.registerElement('RadSideDrawer', () => require('nativescript-ui-sidedrawer').RadSideDrawer)

Vue.prototype.$routes = routes

new Vue({
  store,
  render(h) {
    return h(
      sideDrawer,
      [
        h(drawerContent, { slot: 'drawerContent' }),
        h(routes.Login, { slot: 'mainContent' })
      ]
    )
  }
}).$start()
