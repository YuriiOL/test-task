<template>
    <div v-for="task in tasks" :key="task.id" class="task-row" @click="openDetail(task.id)">
        <TaskItem :task="task" />
    </div>
</template>

<script lang="ts" setup>
import { useTasksStore } from '@/store/TasksStore';
import TaskItem from '@/components/tasks/TaskItem.vue';
import { useRouter } from 'vue-router'

defineProps({
    tasks: {
        type: Array as PropType<Task[]>,
        default: () => [],
    }
});

const router = useRouter();

const openDetail = (id: string) => {
    router.replace({ name: 'Detail', params: { id } });
};

</script>

<style lang="scss">

.task-row {
    display: flex;
    gap: 10px;
}

</style>