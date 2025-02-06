<template>
  <div class="home-wrapper">
    <TaskList :tasks="tasks" />
  </div>
</template>

<script setup lang="ts">
import { useTasksStore } from '@/store/TasksStore';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';
import TaskList from '@/components/tasks/TaskList.vue';

const tasksStore = useTasksStore();

const { tasks } = storeToRefs(tasksStore);

const { getTasks } = tasksStore;

onMounted(async () => {
  await getTasks();
});
</script>