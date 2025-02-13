<template>
	<TaskItem
		v-for="task in tasksStore.tasks"
		:key="task.id"
		:taskId="task.id"
    :taskTitle="task.title"
    :taskCompleted="task.completed"
	/>
</template>

<script setup lang="ts">
// vue
import { onMounted } from 'vue';
// pinia
import { useTasksStore } from '../store/tasks';
// components
import TaskItem from './TaskItem.vue';

const tasksStore = useTasksStore();

onMounted(() => {
	// Fetch tasks on mount
	tasksStore.fetchTasks();
});
</script>
