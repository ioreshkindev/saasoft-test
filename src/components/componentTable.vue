<script setup lang="ts">
import componentDropdown from '@/components/componentDropdown.vue'

import iconEyeSlash from './icons/iconEyeSlash.vue'
import iconTrash from './icons/iconTrash.vue'
</script>

<template>
  <section>
    <table>
      <thead>
        <tr>
          <th>Метки</th>
          <th>Тип записи</th>
          <th>Логин</th>
          <th>Пароль</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <input type="text" />
          </td>

          <td>
            <component-dropdown />
          </td>

          <td>
            <input type="text" />
          </td>

          <td>
            <input />
            <icon-eye-slash />
          </td>

          <td>
            <button type="button">
              <icon-trash />
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<style scoped lang="scss">
table {
  border-spacing: 10px;
  width: 100%;

  thead {
    margin-bottom: 10px;

    tr {
      th {
        opacity: 0.6;
      }
    }
  }

  tr {
    text-align: left;

    th,
    td {
      font-weight: normal;
    }

    td {
      position: relative;

      &:not(:last-child) {
        svg {
          cursor: pointer;
          position: absolute;
          right: 14px;
          top: 50%;
          transform: translateY(-50%);
        }
      }
    }
  }
}
</style>
