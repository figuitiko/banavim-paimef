'use server'
import { createAgressorRecords } from '@/lib/util'
import { type Agressor } from '@prisma/client'

export const handleOnDropAgressorsServer = async (data: Agressor[]) => {
  createAgressorRecords(data)
}
