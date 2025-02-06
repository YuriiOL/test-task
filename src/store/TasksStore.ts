import { defineStore } from 'pinia';
import { Task } from '../types/tasks';
import { ref } from 'vue';


export const useTasksStore = defineStore('tasks', () => {
    const tasks = ref<Task[]>([]);

    const taskDetail = ref<Task>();

    const url = 'https://jsonplaceholder.typicode.com/todos';

    const getTasks = async () => {
        try {
            const response = await fetch(url);

            tasks.value = await response.json();
          } catch (error) {
            console.error(error);
          }
    };

    const updateTask = async (taskId: number, task: Task) => {
        const requestOptions = {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: task,
        };

        const response = await fetch(`${url}/${taskId}`, requestOptions);
    };

    const getTaskDetail = (id: number) => {
        taskDetail.value = tasks.value.find((task) => task.id === id);
    };

    return {
        getTaskDetail,
        getTasks,
        tasks,
        taskDetail,
        updateTask,
    };
});