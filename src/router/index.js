import Vue from "vue";
import VueRouter from "vue-router";
//import NProgress from 'vue-nprogress'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => 
      import("../views/Home.vue")
  },
  {
    path: "/project/smart_factory",
    name: "sub_smartfactory",
    component: () =>
      import("../views/SubSmartfactory.vue")
  },
  {
    path: "/project/android",
    name: "sub_android",
    component: () =>
      import("../views/SubAndroid.vue")
  },
  {
    path: "/study",
    name: "study",
    component: () =>
      import("../views/Study.vue")
  },
  {
    path: "/etc",
    name: "etc",
    component: () =>
      import("../views/Etc.vue")
  },
  {
    path: "/resume",
    name: "resume",
    component: () =>
      import("../views/Resume.vue")
  },
  {
    path: "/portfolio",
    name: "portfolio",
    component: () =>
      import("../views/Portfolio.vue")
  },
  {
    path: "/github",
    name: "github",
    component: () =>
      import("../views/Github.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  },
  routes
});
/*
router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
      // Start the route progress bar.
      NProgress.start()
  }
  next()
})

router.afterEach((to, from) => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})
*/

export default router;
