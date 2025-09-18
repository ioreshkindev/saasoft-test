<script setup lang="ts">
import iconPlus from '@/components/icons/iconPlus.vue'
import { useStore } from '@/stores'

const store = useStore()
</script>

<template>
  <header>
    <h3>Учетные записи</h3>

    <button type="button" v-on:click="store.addRecord()">
      <icon-plus />
    </button>
  </header>
</template>

<style scoped lang="scss">
header {
  display: flex;
  gap: 20px;
  place-items: center;
  padding: 20px;

  button {
    border: 1px solid;
    border-radius: 3px;
    padding: 5px;
  }
}
</style>
