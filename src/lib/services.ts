import { LIST_MUNICIPALITIES, MAPPED_INDICATORS_SERVICES } from '@/constants'
import { fixEncoding, isValidDate, parseDate, prisma } from './util'
import { type Service } from '@prisma/client'

export const handleREducerServices = (acc: Record<string,
string |
number |
boolean |
Date>,
cur: string,
idx: number,
columns: string[]) => {
  if (cur in MAPPED_INDICATORS_SERVICES) {
    const mappedVal = MAPPED_INDICATORS_SERVICES[cur as keyof typeof MAPPED_INDICATORS_SERVICES]
    const value = fixEncoding(columns[idx].trim())
    if (mappedVal === 'dateCapture') {
      return { ...acc, [mappedVal]: (isValidDate(parseDate(columns[idx])) ? parseDate(columns[idx]) : new Date()) }
    }
    if (mappedVal === 'municipalityName') {
      return { ...acc, [mappedVal]: LIST_MUNICIPALITIES.includes(value as (typeof LIST_MUNICIPALITIES)[number]) ? value : 'Durango' }
    }
    return { ...acc, [mappedVal]: value }
  }
  return acc
}

export const createServiceRecords = async (data: Service[]) => {
  try {
    await prisma.$transaction(
      [
        prisma.service.createMany({ data })
      ]
    )
  } catch (error) {
    console.log(error)
  }
}
