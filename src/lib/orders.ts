import { LIST_MUNICIPALITIES, MAPPED_INDICATORS_ORDERS } from '@/constants'
import { type Order } from '@prisma/client'
import { prisma } from './util'

export const handleReducerOrders = (acc: Record<string,
string |
number |
boolean |
Date>,
cur: string,
idx: number,
columns:
string[]) => {
  if (cur in MAPPED_INDICATORS_ORDERS) {
    const mappedVal = MAPPED_INDICATORS_ORDERS[cur as keyof typeof MAPPED_INDICATORS_ORDERS]
    const value = columns[idx].trim()
    if (mappedVal === 'date') {
      return { ...acc, [mappedVal]: new Date(value) }
    }
    if (mappedVal === 'victimName') {
      return { ...acc, [mappedVal]: (acc.victimName !== undefined) ? `${(acc.victimName).toString()} ${value}` : value }
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
}

export const createOrderRecords = async (data: Order[]) => {
  try {
    await prisma.$transaction(
      [
        prisma.order.createMany({ data })
      ]
    )
  } catch (error) {
    console.log(error)
  }
}
