'use server'
import { createAgressorRecords } from '@/lib/agressors'
import { createViolenceCaseRecords } from '@/lib/cases'
import { createOrderRecords } from '@/lib/orders'
import { createServiceRecords } from '@/lib/services'
import { type ViolenceCase, type Agressor, type Order, type Service } from '@prisma/client'

export const handleOnDropAgressorsServer = async (data: Agressor[]) => {
  createAgressorRecords(data)
}

export const handleOnDropCase = async (data: ViolenceCase[]) => {
  createViolenceCaseRecords(data)
}

export const handleOnDropOrders = async (data: Order[]) => {
  createOrderRecords(data)
}

export const handleOnDropServices = async (data: Service[]) => {
  createServiceRecords(data)
}
