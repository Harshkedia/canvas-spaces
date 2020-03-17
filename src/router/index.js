import Vue from "vue";
import VueRouter from "vue-router";
import UploadFile from "../views/UploadFile";

Vue.use(VueRouter);

const routes = [
  {
    path: "/upload",
    name: "UploadFile",
    component: UploadFile
  },
  {
    path: "/spaces",
    name: "DefineSpaces",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DefineSpaces.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
