import { defineStore } from 'pinia'
import type { AccountType, RecordType } from '@/types'
import { createStorage, type StorageType } from '@/composables/storage'
import { ref } from 'vue'

const storage: StorageType = createStorage(sessionStorage)

export const useStore = defineStore('app', () => {
  const accountData = ref<AccountType[]>(storage.read('accountData') || [])

  const recordOptions = ref<RecordType[]>(['Локальная', 'LDAP'])

  const addRecord = (): void => {
    accountData.value.push({
      labelRaw: '',
      label: [],
      type: 'Локальная',
      login: '',
      password: null,
      visibility: true,
      errors: {},
    })
  }

  const removeRecord = (index: number): void => {
    accountData.value.splice(index, 1)

    saveRecord()
  }

  const saveRecord = (): void => {
    storage.write('accountData', accountData.value)
  }

  const parseLabel = (raw: string) => {
    return raw
      .trim()
      .split(';')
      .filter((el) => el !== '')
      .map((el) => ({ text: el }))
  }

  const validate = (account: AccountType) => {
    if (!account.login.length) {
      account.errors.login = true
    } else {
      account.errors.login = false
    }

    if (account.type !== 'LDAP' && !account.password?.length) {
      account.errors.password = true
    } else {
      account.errors.password = false
    }

    if (!account.errors.login && !account.errors.password) {
      account.errors = {}

      saveRecord()
    }
  }

  return { recordOptions, accountData, addRecord, removeRecord, parseLabel, saveRecord, validate }
})
