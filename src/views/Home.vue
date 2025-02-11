<template>
  <div class="home-wrapper">
    <h1>Home Page</h1>
    <TaskList />
  </div>
</template>

<script setup lang="ts">
  import { onMounted } from 'vue';
  import { fetchTasks } from '@/service/fetchTasks';
  import { useTasksStore } from '@/store/dataStore';
  import TaskList from "../components/TaskList.vue";

  const dataStore = useTasksStore()

    onMounted(async () => {
      const tasks = await fetchTasks();
      dataStore.getTasks(tasks.data)
    })
</script>
