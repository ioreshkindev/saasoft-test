<script setup lang="ts">
import iconChevronDown from '@/components/icons/iconChevronDown.vue'
</script>

<template>
  <article>
    <p>Локальная</p>

    <icon-chevron-down />
  </article>
</template>

<style scoped>
article {
  border: 1px solid;
  border-radius: 3px;
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr auto;
  padding: 10px;
  place-items: center baseline;
}
</style>
