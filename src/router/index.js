import { createRouter, createWebHashHistory } from "vue-router";

const routes = [];
// vue2.0 new VueRouter({})
// vue3.0  createRouter({})
const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
