<template>
    <TaskForm v-if="taskDetail" :task="taskDetail" />
</template>

<script lang="ts" setup>
import { useTasksStore } from '@/store/TasksStore';
import { useRoute } from 'vue-router';
import { onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import TaskForm from '@/components/tasks/TaskForm.vue';

const { getTaskDetail } = useTasksStore();

const { taskDetail } = storeToRefs(useTasksStore());

const route = useRoute();

onMounted(() => {
    const taskId = route.params.id;

    getTaskDetail(parseInt(taskId, 10));
});
</script>