import { prisma } from '../util'

export const getServicesByType = async () => {
  try {
    const result = await prisma.service.groupBy({
      by: ['serviceType'],
      _count: {
        serviceType: true
      }
    })
    return result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.serviceType === undefined || curr._count === undefined || curr.serviceType === null || curr.serviceType === 'Seleccione') return acc
      acc[curr.serviceType] = Number(curr._count.serviceType)
      return acc
    }, {})
  } catch (error) {
    console.log(error)
  }
}

export const getServicesByMunicipality = async () => {
  try {
    const result = await prisma.service.groupBy({
      by: ['municipalityName'],
      _count: {
        municipalityName: true
      }
    })
    return result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.municipalityName === undefined || curr._count === undefined || curr.municipalityName === null) return acc
      acc[curr.municipalityName] = Number(curr._count.municipalityName)
      return acc
    }, {})
  } catch (error) {
    console.log(error)
  }
}

export const getServicesByStatus = async () => {
  try {
    const result = await prisma.service.groupBy({
      by: ['status'],
      _count: {
        status: true
      }
    })
    return result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.status === undefined || curr._count === undefined || curr.status === null) return acc
      acc[curr.status] = Number(curr._count.status)
      return acc
    }, {})
  } catch (error) {
    console.log(error)
  }
}
