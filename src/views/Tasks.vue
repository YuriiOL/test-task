<script setup lang="ts">
import {useTasksStore} from "@/stores/tasks";
import {onMounted, ref} from "vue";
import TaskList from "@/components/TaskList.vue";

const tasksStore = useTasksStore()
const { fetchList } = tasksStore;

const loaded = ref(false)

onMounted(async () => {
  try {
    loaded.value = false;

    await fetchList();
  } catch (err) {
    console.error('Error fetching tasks: ', err);
  } finally {
    loaded.value = true;
  }
})
</script>

<template>
  <TaskList v-if="loaded" />

  <div v-else class="home-wrapper">
    Loading
  </div>
</template>
