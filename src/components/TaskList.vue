<script setup lang="ts">
import {useTasksStore} from "@/stores/tasks.ts";
import {storeToRefs} from "pinia";
import TaskItem from "@/components/TaskItem.vue";

const tasksStore = useTasksStore();
const { list } = storeToRefs(tasksStore);
</script>

<template>
  <div v-for="task in list">
    <TaskItem :task="task" />>
  </div>
</template>

<style scoped>

</style>
