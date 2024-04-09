import {
  MAPPED_INDICATORS_AGRESSORS,
  MAPPED_INDICATORS_AGRESSORS_VALUES,
  LIST_MUNICIPALITIES
} from '@/constants'
import { fixEncoding, isValidDate, parseDate, prisma } from './util'
import { type Agressor } from '@prisma/client'

export const handleReducerAgressors = (
  acc: Record<string, string | number | boolean | Date>,
  cur: string,
  idx: number,
  columns: string[]
) => {
  if (cur in MAPPED_INDICATORS_AGRESSORS) {
    const mappedVal =
      MAPPED_INDICATORS_AGRESSORS[
        cur as keyof typeof MAPPED_INDICATORS_AGRESSORS
      ]
    const value = fixEncoding(columns[idx].trim())
    if (mappedVal === MAPPED_INDICATORS_AGRESSORS_VALUES.dateCase) {
      return {
        ...acc,
        [mappedVal]: isValidDate(parseDate(value))
          ? parseDate(value)
          : new Date()
      }
    }
    if (mappedVal === MAPPED_INDICATORS_AGRESSORS_VALUES.isKnown) {
      return { ...acc, [mappedVal]: value === 'SI' }
    }
    if (mappedVal === MAPPED_INDICATORS_AGRESSORS_VALUES.age) {
      return { ...acc, [mappedVal]: Number(value) }
    }
    if (mappedVal === MAPPED_INDICATORS_AGRESSORS_VALUES.sex) {
      return { ...acc, [mappedVal]: value !== '' ? value : 'Hombre' }
    }
    if (mappedVal === MAPPED_INDICATORS_AGRESSORS_VALUES.municipalityName) {
      return {
        ...acc,
        [mappedVal]: LIST_MUNICIPALITIES.includes(
          value as (typeof LIST_MUNICIPALITIES)[number]
        )
          ? value
          : 'Durango'
      }
    }
    return { ...acc, [mappedVal]: value }
  }
  return acc
}

export const createAgressorRecords = async (data: Agressor[]) => {
  try {
    await prisma.$transaction([
      prisma.agressor.deleteMany({ where: {} }),
      prisma.agressor.createMany({ data })
    ])
  } catch (error) {
    console.log(error)
  }
}
