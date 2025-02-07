<script setup lang="ts">
import {useRoute} from "vue-router";
import {onMounted, ref} from "vue";
import {fetchTaskDetail} from "@/services/tasksService";
import {Task} from "@/types/task";

const route = useRoute();

const taskDetail = ref<Task | null>(null);

onMounted(async () => {
  try {
    const { id } = route.params;

    taskDetail.value = await fetchTaskDetail(id);
  } catch (err) {
    console.error('Error fetching task detail: ', err);
  }
})
</script>

<template>
<div v-if="taskDetail">
  {{ taskDetail.title }}
</div>
</template>

<style scoped>

</style>
