<template>
  <RouterLink to="">
    <li class="item">{{ item.id }} {{ item.title }} {{ item.completed }}</li>
  </RouterLink>
</template>

<script setup lang="ts">
  import { defineProps } from 'vue';

  const props = defineProps(['item'])
</script>

<style lang="scss" scoped>
  .item {
    list-style-type: none;
    font-weight: bold;
  }
</style>
