export type RecordType = 'Локальная' | 'LDAP'

export type AccountField = 'label' | 'login' | 'password' | 'type'

export type AccountErrors = Partial<Record<AccountField, boolean>>

export interface LabelType {
  text: string
}

export interface AccountType {
  labelRaw: string
  label: LabelType[]
  type: RecordType
  login: string
  password: string | null
  visibility: boolean
  errors: AccountErrors
}
