<script setup lang="ts">
import type {Task} from "@/types/task.ts";
import {computed} from "vue";
import {useRouter} from "vue-router";

interface Props {
  task: Task
}

const props = defineProps<Props>()

const router = useRouter()

const completed = computed({
  get() {
    return props.task.completed;
  },
  set(val) {
    // TODO: handle change of state
    console.log(val);
  }
})

function onTaskDetail() {
  router.push({ name: 'task-detail', params: { id: props.task.id}})
}
</script>

<template>
  <div class="task-item">
    <button @click="onTaskDetail">{{ task.title }}</button>

    <div>
      <input v-model="completed" type="checkbox" />
    </div>
  </div>
</template>

<style scoped>
.task-item {
  display: flex;
  border: 1px solid black;
  border-radius: 6px;
}
</style>
