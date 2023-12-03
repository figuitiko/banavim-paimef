import { LIST_MUNICIPALITIES, MAPPED_INDICATORS_CASES } from '@/constants'
import { fixEncoding, isValidDate, parseDate, prisma } from './util'
import { type ViolenceCase } from '@prisma/client'

export const handleReducerCases = (acc: Record<string, string | number | boolean | Date >, cur: string, idx: number, columns: string[]) => {
  if (cur in MAPPED_INDICATORS_CASES) {
    const mappedVal = MAPPED_INDICATORS_CASES[cur as keyof typeof MAPPED_INDICATORS_CASES]
    const value = fixEncoding(columns[idx].trim())
    if (mappedVal === 'date') {
      return { ...acc, [mappedVal]: (isValidDate(parseDate(columns[idx])) ? parseDate(columns[idx]) : new Date()) }
    }
    if (mappedVal === 'isKnownByAuthorities') {
      return { ...acc, [mappedVal]: value.toLocaleLowerCase() === 'si' }
    }
    if (mappedVal === 'amountAgressors' || mappedVal === 'age') {
      return { ...acc, [mappedVal]: Number(value) }
    }
    if (mappedVal === 'linkWithVictim') {
      return { ...acc, [mappedVal]: value !== '' }
    }
    if (mappedVal === 'municipalityName') {
      return { ...acc, [mappedVal]: LIST_MUNICIPALITIES.includes(value as (typeof LIST_MUNICIPALITIES)[number]) ? value : 'Durango' }
    }
    if (mappedVal === 'isEconomic' ||
          mappedVal === 'isSexual' ||
          mappedVal === 'isOther' ||
          mappedVal === 'isPsychological' ||
          mappedVal === 'isPatrimonial' ||
          mappedVal === 'isPhysical') {
      return { ...acc, [mappedVal]: value.toLocaleLowerCase() === '1' }
    }
    return { ...acc, [mappedVal]: value }
  }
  return acc
}

export const createViolenceCaseRecords = async (data: ViolenceCase[]) => {
  try {
    await prisma.$transaction(
      [
        prisma.violenceCase.createMany({ data })
      ]
    )
  } catch (error) {
    console.log(error)
  }
}
