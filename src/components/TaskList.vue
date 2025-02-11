<template>
  <div>
    <ul>
      <TaskItem v-for="task in dataStore?.tasks" :key="task.id" :item="task" />
    </ul>
  </div>
</template>

<script setup lang="ts">
  import TaskItem from '../components/TaskItem.vue'
  import { useTasksStore } from '@/store/dataStore';

  const dataStore = useTasksStore();
</script>
