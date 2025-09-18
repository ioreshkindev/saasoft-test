export interface StorageType {
  read<T>(key: string): T | null

  write<T>(key: string, value: T): boolean

  remove(key: string): boolean

  clear(): boolean

  has(key: string): boolean
}
