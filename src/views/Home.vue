<script setup lang="ts">
import {useRouter} from "vue-router";

const router = useRouter()

function onRedirectToTasks() {
  router.push({ name: 'tasks-list'})
}
</script>

<template>
    <div class="home-wrapper">
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>

      <button @click="onRedirectToTasks">Tasks list</button>
    </div>
</template>
