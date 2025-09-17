<script setup lang="ts">
import iconQuestionCircle from '@/components/icons/iconQuestionCircle.vue'
</script>

<template>
  <div>
    <icon-question-circle />

    <p>для указания нескольких метокдля одной пары логин/пароль используйте разделитель ;</p>
  </div>
</template>

<style scoped lang="scss">
div {
  background-color: #eee;
  border-radius: 3px;
  display: flex;
  gap: 10px;
  place-items: center;
  padding: 10px;
}
</style>
