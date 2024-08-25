import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import Papa from 'papaparse'
import { APP_MESSAGES, FILE_NAMES, UPLOAD_ITEMS } from '@/constants'
import { PrismaClient } from '@prisma/client'
import jschardet from 'jschardet'
import { type TuploaderItem, type TypeHandleReaderArg, type TypeHandlerReducersResultItem } from '@/types'
import { handleReducerAgressors } from './agressors'
import { handleReducerCases } from './cases'
import { handleReducerOrders } from './orders'
import { handleREducerServices } from './services'

const prismaClientSingleton = () => {
  return new PrismaClient()
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>
} & typeof global

export const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
export const handleOnDropUtil = async (acceptedFiles: File[], type: TuploaderItem) => {
  const file = acceptedFiles[0]
  const fileName = file.name
  if (!fileName.includes(FILE_NAMES[type as keyof typeof FILE_NAMES])) {
    return await Promise.reject(new Error(APP_MESSAGES.FILE_NAME_NOT_MATCH))
  }
  const reader = new FileReader()
  const result: TypeHandlerReducersResultItem[] = []
  await handleReader({ reader, result, file, type })
  return await Promise.resolve(result)
}
const handleReader = async ({ reader, result, file, type }: TypeHandleReaderArg) => {
  return await new Promise((resolve, reject) => {
    reader.onload = async ({ target }) => {
      if (!UPLOAD_ITEMS.includes(type)) reject(new Error(APP_MESSAGES.FILE_TYPE_NOT_MATCH))
      const csv = Papa.parse(target?.result as string, { header: true })
      const parsedData = csv?.data
      if (parsedData.length === 0) reject(new Error(APP_MESSAGES.FILE_EMPTY))
      for (const data of parsedData) {
        const rows = Object.keys(data as string)
        const columns = Object.values(data as string)
        const res = rows.reduce((acc, cur, idx) => {
          if (type === UPLOAD_ITEMS[0]) return handleReducerAgressors(acc, cur, idx, columns)
          if (type === UPLOAD_ITEMS[1]) return handleReducerCases(acc, cur, idx, columns)
          if (type === UPLOAD_ITEMS[2]) return handleReducerOrders(acc, cur, idx, columns)
          if (type === UPLOAD_ITEMS[3]) return handleREducerServices(acc, cur, idx, columns)
          return handleReducerAgressors(acc, cur, idx, columns)
        }, {})
        result.push(res as TypeHandlerReducersResultItem)
      }
      resolve(result)
    }
    reader.readAsText(file)
  })
}

export const parseDate = (date: string) => {
  const [day, month, year] = date.split('/')
  return new Date(Number(year), Number(month) - 1, Number(day))
}

export const isValidDate = function (date: Date) {
  return !Number.isNaN(new Date(date).getTime())
}

export const fixEncoding = (input: string) => {
  const labelDecoder = detectEncoding(input) !== null ? detectEncoding(input) : 'ascii'
  const decoder = new TextDecoder(detectEncoding(labelDecoder))
  // Convert the input string to a Uint8Array
  const uint8array = new Uint8Array(input.split('').map(char => char.charCodeAt(0)))
  // Decode the Uint8Array using the TextDecoder
  const corrected = decoder.decode(uint8array)
  return corrected
}

export function detectEncoding (input: string) {
  const detected = jschardet.detect(input)
  return detected.encoding
}
