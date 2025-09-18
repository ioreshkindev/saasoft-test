<script setup lang="ts">
import componentDropdown from '@/components/componentDropdown.vue'

import iconEyeSlash from './icons/iconEyeSlash.vue'
import iconTrash from './icons/iconTrash.vue'
import { useStore } from '@/stores'
import { computed, type ComputedRef } from 'vue'
import type { AccountType } from '@/types'

const store = useStore()

const accountData: ComputedRef<AccountType[]> = computed(() => store.accountData)
</script>

<template>
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

    <tbody v-for="(account, index) in accountData" :key="index">
      <tr>
        <td>
          <input type="text" placeholder="Введите значение" v-bind:class="{ error: account.errors.label }" v-model="account.labelRaw" />
        </td>

        <td>
          <component-dropdown :type="account.type" @selected-type="account.type = $event" />
        </td>

        <td>
          <input type="text" placeholder="Введите логин" v-bind:class="{ error: account.errors.login }" v-model="account.login" />
        </td>

        <td v-if="account.type !== 'LDAP'">
          <input
            placeholder="Введите пароль"
            v-bind:class="{ error: account.errors.password }"
            v-model="account.password"
            v-bind:type="account.visibility ? 'text' : 'password'"
          />

          <icon-eye-slash v-on:click="account.visibility = !account.visibility" />
        </td>

        <td>
          <button type="button" v-on:click="store.removeRecord(index)">
            <icon-trash />
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style scoped lang="scss">
table {
  border-radius: 3px;
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

.error {
  border-color: tomato;
}
</style>
