// router
import { createRouter, createWebHistory } from 'vue-router';
// views
import Tasks from '@/views/Tasks.vue';
import TaskDetails from '@/views/TaskDetails.vue';

const routes = [
  { path: '/', name: 'Tasks', component: Tasks },
  { path: '/:id', name: 'TaskDetails', component: TaskDetails },
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;