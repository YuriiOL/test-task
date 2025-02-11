import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TaskDetails from '../components/TaskDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/task-details:id', name: 'TaskDetails', component: TaskDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
