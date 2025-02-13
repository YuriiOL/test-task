<template>
	<div class="task">
		<p>Task ID: {{ props.taskId }}</p>
		<router-link :to="{ name: 'TaskDetails', params: { id: props.taskId } }">
			>Title: {{ props.taskTitle }}</router-link
		>
		<p>Completed: {{ props.taskCompleted }}</p>
	</div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

interface Props {
	taskId: number;
	taskTitle: string;
	taskCompleted: boolean;
}

const props = defineProps<Props>();
</script>

<style>
.task {
	border: 1px solid black;
	border-radius: 20px;
	max-width: 200px;
	padding: 0 20px;
}
</style>
