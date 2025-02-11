<template>
  <RouterLink to="">
    <li class="item">
      {{ props.item.id }} {{ props.item.title }} {{ props.item.completed }}
    </li>
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
