import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Detail from "@/views/Detail.vue";

const routes = [
  { path: "/", redirect: '/tasks' },
  { path: "/tasks", name: "Tasks", component: Home },
  { path: "/tasks/:id", name: "Detail", component: Detail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
