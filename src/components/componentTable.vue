<script setup lang="ts">
import componentDropdown from '@/components/componentDropdown.vue'

import iconEyeSlash from './icons/iconEyeSlash.vue'
import iconTrash from './icons/iconTrash.vue'
import { useStore } from '@/stores'
import { computed, type ComputedRef } from 'vue'
import type { AccountType, RecordType } from '@/types'

const store = useStore()

const accountData: ComputedRef<AccountType[]> = computed(() => store.accountData)

const changeAccountType = (type: RecordType, account: AccountType) => {
  account.type = type

  if (account.type === 'LDAP') account.password = null

  store.validate(account)
}

const changeAccountVisibility = (account: AccountType) => {
  account.visibility = !account.visibility

  store.validate(account)
}

const parsedLabel = (account: AccountType) => {
  account.label = store.parseLabel(account.labelRaw)

  store.validate(account)
}
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

    <tbody>
      <tr v-if="accountData.length === 0">
        <td colspan="5">Нет записей</td>
      </tr>

      <tr v-for="(account, index) in accountData" :key="index">
        <td>
          <input type="text" placeholder="Введите значение" maxlength="50" v-model="account.labelRaw" v-on:blur="parsedLabel(account)" />
        </td>

        <td>
          <component-dropdown :type="account.type" v-on:selected-type="changeAccountType($event, account)" />
        </td>

        <td>
          <input
            type="text"
            placeholder="Введите логин"
            v-bind:class="{ error: account.errors.login }"
            v-model="account.login"
            v-on:blur="store.validate(account)"
            maxlength="100"
          />
        </td>

        <td v-if="account.type !== 'LDAP'">
          <input
            placeholder="Введите пароль"
            v-bind:class="{ error: account.errors.password }"
            v-model="account.password"
            v-bind:type="account.visibility ? 'text' : 'password'"
            v-on:blur="store.validate(account)"
            maxlength="100"
          />

          <icon-eye-slash v-on:click="changeAccountVisibility(account)" />
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
</style>
