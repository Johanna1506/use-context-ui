import type { DictionaryObject } from "../Core/model"

export type AxiosConfig = {
  url: string,
  method?: string,
  headers?: DictionaryObject,
  params?: DictionaryObject,
  data?: DictionaryObject | string,
}