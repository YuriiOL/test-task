import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useTasksStore = defineStore('tasks', () => {
  const tasks = ref([]);
  function getTasks(data) {
    tasks.value = data;
  }

  return { tasks, getTasks };
});
