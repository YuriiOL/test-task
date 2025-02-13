<template>
	<div>
		<h1>Tasks</h1>
		<div class="tasks-wrapper">
			<TaskList />
		</div>
	</div>
</template>

<script setup lang="ts">
import TaskList from '../components/TaskList.vue';
</script>

<style>
h1 {
	text-align: center;
}

.tasks-wrapper {
	display: flex;
	flex-wrap: wrap;
	gap: 20px;
}

.task {
	flex: 1 1 calc(33.333% - 20px);
	box-sizing: border-box;
}
</style>
