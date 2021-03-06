import Vue from "vue"
import VueRouter from "vue-router"
import Hello from "./components/Hello.vue"
import Passage from "./components/Passage.vue"
import Nav from "./components/Nav.vue"

Vue.use(VueRouter)
// Define some components
// 0. If using a module system, call Vue.use(VueRouter)

// 1. Define route components.
// These can be imported from other files
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. Define some routes
// Each route should map to a component. The "component" can
// either be an actual component constructor created via
// Vue.extend(), or just a component options object.
// We'll talk about nested routes later.
const routes = {
  'hello': {
    component: Hello,
    name: "hello",
    subRoutes: {
      '/test': {
        component: Nav,
        name: "nav"
      }
    }
  },
  'passage': {
    name: "passage",
    component: Passage
  }
}

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter()
router.map(routes)
router.redirect({
  "*": "/hello"
})
// 4. Create and mount the root instance.
// Make sure to inject the router with the router option to make the
// whole app router-aware.
const vue = Vue.extend(require("./App.vue"))
router.start(vue, "#app");
  

// Now the app has started!