<script setup lang="ts">
import componentHeader from '@/components/componentHeader.vue'
import componentHint from '@/components/componentHint.vue'
import componentTable from './components/componentTable.vue'
</script>

<template>
  <main>
    <component-header />
    <component-hint />

    <component-table />
  </main>
</template>

<style lang="scss">
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: system-ui, sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: normal;
  margin: 0;
}

main {
  display: grid;
  gap: 20px;
  max-width: 1200px;
  margin: auto;
}

button {
  background-color: unset;
  border: unset;
  cursor: pointer;

  &:has(svg) {
    line-height: 0;
  }
}

input {
  background: unset;
  border: 1px solid;
  border-radius: 3px;
  font: inherit;
  outline: none;
  padding: 10px;
  width: 100%;
}

ul {
  list-style: none;
}
</style>
