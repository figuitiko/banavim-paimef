import clsx, { type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'
import Papa from 'papaparse'
import { APP_MESSAGES, FILE_NAMES, LIST_MUNICIPALITIES, MAPPED_INDICATORS_AGRESSORS } from '@/constants'
import { type Agressor, PrismaClient } from '@prisma/client'
import jschardet from 'jschardet'
import { type TypeHandleReaderArg } from '@/types'

const prisma = new PrismaClient()

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}
export const handleOnDropAgressors = async (acceptedFiles: File[], type: string) => {
  console.log(acceptedFiles)
  const file = acceptedFiles[0]
  const fileName = file.name
  if (!fileName.includes(FILE_NAMES[type as keyof typeof FILE_NAMES])) {
    return await Promise.reject(new Error(APP_MESSAGES.FILE_NAME_NOT_MATCH))
  }
  const reader = new FileReader()
  const result: Agressor[] = []
  await handleReader({ reader, result, file })
  return await Promise.resolve(result)
}
const handleReader = async ({ reader, result, file }: TypeHandleReaderArg) => {
  return await new Promise((resolve, reject) => {
    reader.onload = async ({ target }) => {
      const csv = Papa.parse(target?.result as string, { header: true })
      const parsedData = csv?.data
      if (parsedData.length === 0) reject(new Error(APP_MESSAGES.FILE_EMPTY))
      for (const data of parsedData) {
        const rows = Object.keys(data as string)
        const columns = Object.values(data as string)
        // console.log({ columns })
        const res = rows.reduce((acc: Record<string, string | number | boolean | Date>, cur: string, idx: number) => {
          if (cur in MAPPED_INDICATORS_AGRESSORS) {
            const mappedVal = MAPPED_INDICATORS_AGRESSORS[cur as keyof typeof MAPPED_INDICATORS_AGRESSORS]
            const value = fixEncoding(columns[idx].trim())
            if (mappedVal === 'dateCase') {
              return { ...acc, [mappedVal]: (isValidDate(parseDate(value)) ? parseDate(value) : new Date()) }
            }
            if (mappedVal === 'isKnown') {
              return { ...acc, [mappedVal]: value === 'SI' }
            }
            if (mappedVal === 'age') {
              return { ...acc, [mappedVal]: Number(value) }
            }
            if (mappedVal === 'municipalityName') {
              return { ...acc, [mappedVal]: LIST_MUNICIPALITIES.includes(value as (typeof LIST_MUNICIPALITIES)[number]) ? value : 'Durango' }
            }
            return { ...acc, [mappedVal]: value }
          }
          return acc
        }, {})
        result.push(res as Agressor)
      }
      resolve(result)
    }
    reader.readAsText(file)
  })
}
export const createAgressorRecords = async (data: Agressor[]) => {
  await prisma.$transaction(
    [
      prisma.agressor.createMany({ data })
    ]
  )
  await prisma.agressor.create({ data: data[0] })
}

const parseDate = (date: string) => {
  const [day, month, year] = date.split('/')
  return new Date(Number(year), Number(month) - 1, Number(day))
}

const isValidDate = function (date: Date) {
  return !Number.isNaN(new Date(date).getTime())
}

const fixEncoding = (input: string) => {
  const labelDecoder = detectEncoding(input) !== null ? detectEncoding(input) : 'ascii'
  const decoder = new TextDecoder(detectEncoding(labelDecoder))
  // Convert the input string to a Uint8Array
  const uint8array = new Uint8Array(input.split('').map(char => char.charCodeAt(0)))
  // Decode the Uint8Array using the TextDecoder
  const corrected = decoder.decode(uint8array)
  return corrected
}

function detectEncoding (input: string) {
  const detected = jschardet.detect(input)
  return detected.encoding
}
