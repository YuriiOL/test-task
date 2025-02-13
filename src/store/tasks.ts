// vue
import { ref } from 'vue';
// pinia
import { defineStore } from 'pinia';
// types
import { type Task } from '../@types/Task';

export const useTasksStore = defineStore('tasks', () => {
	const tasks = ref<Task[]>([]);

	const fetchTasks = async () => {
		const response = await fetch('https://jsonplaceholder.typicode.com/todos');
		const data = await response.json();
		tasks.value = data;
	};

	return { tasks, fetchTasks };
});
