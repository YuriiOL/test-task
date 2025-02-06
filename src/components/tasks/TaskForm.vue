<template>
    <TaskItem :hide-status="true" :task="task" />

    <input type="checkbox" :checked="isChecked" />
</template>

<script lang="ts" setup>
import TaskItem from '@/components/tasks/TaskItem.vue';
import { ref } from 'vue';

const props = defineProps({
    task: {
        type: Object as PropType<Task>,
        required: true,
    }
});

const isChecked = ref<boolean>(props.task.completed);
</script>