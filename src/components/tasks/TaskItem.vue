<template>
    <div>
        {{ task.id }}
    </div>
    <div>
        {{ task.title }}
    </div>
    <div>
        {{ task.userId }}
    </div>
    <div v-if="!hideStatus">
        {{ task.completed }}
    </div>
</template>

<script lang="ts" setup>
defineProps({
    hideStatus: {
        type: Boolean as PropType<boolean>,
        default: false,
    },
    task: {
        type: Object as PropType<Task>,
        required: true,
    }
});
</script>