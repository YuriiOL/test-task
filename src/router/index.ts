import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  {
    path: '/tasks',
    name: 'tasks-list',
    component: () => import('@/views/Tasks.vue')
  },
  {
    path: '/task/:id',
    name: 'task-detail',
    component: () => import('@/views/TaskDetail.vue')
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
