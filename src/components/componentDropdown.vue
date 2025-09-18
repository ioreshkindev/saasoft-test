<script setup lang="ts">
import iconChevronDown from '@/components/icons/iconChevronDown.vue'
import { useStore } from '@/stores'
import type { RecordType } from '@/types'
import { ref, computed, type ComputedRef } from 'vue'

const store = useStore()

const selected = ref(false)

const recordOptions: ComputedRef<RecordType[]> = computed(() => store.recordOptions)

const props = defineProps<{
  type: RecordType
}>()
</script>

<template>
  <article v-on:click="selected = !selected" v-outside="() => (selected = false)">
    <p>{{ props.type }}</p>

    <icon-chevron-down />

    <ul v-if="selected">
      <li v-for="value of recordOptions" :key="value" v-on:click="$emit('selected-type', value)">{{ value }}</li>
    </ul>
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
  position: relative;
  min-width: 150px;

  ul {
    background-color: #ffffff;
    border-radius: 3px;
    border: 1px solid;
    inset: 44px 0 auto;
    max-height: 400px;
    overflow-y: auto;
    position: absolute;
    z-index: 2;

    li {
      padding: 10px 20px;

      &:hover {
        background-color: #eeeeee;
      }
    }
  }

  svg {
    &.selected {
      transform: rotate(-90deg);
    }
  }
}
</style>
