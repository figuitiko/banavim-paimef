import { prisma } from '../util'

export const getOrdersByType = async () => {
  try {
    const result = await prisma.order.groupBy({
      by: ['orderType'],
      _count: {
        orderType: true
      }
    })
    return result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.orderType === undefined || curr._count === undefined || curr.orderType === null) return acc
      acc[curr.orderType] = Number(curr._count.orderType)
      return acc
    }, {})
  } catch (error) {
    console.log(error)
  }
}
export const getOrdersByAgeRange = async () => {
  try {
    const range1 = await prisma.order.count({
      where: {
        age: {
          lte: 18
        }
      }
    })
    const range2 = await prisma.order.count({
      where: {
        age: {
          gte: 18,
          lte: 30
        }
      }
    })
    const range3 = await prisma.order.count({
      where: {
        age: {
          gte: 31,
          lte: 50
        }
      }
    })
    const range4 = await prisma.order.count({
      where: {
        age: {
          gte: 51,
          lte: 70
        }
      }
    })
    const range5 = await prisma.order.count({
      where: {
        age: {
          gte: 70
        }
      }
    })
    return {
      '0-17': range1,
      '18-30': range2,
      '31-50': range3,
      '51-70': range4,
      '71 y más': range5
    }
  } catch (error) {
    console.log(error)
  }
}

export const getOrdersByEmissorAuthority = async () => {
  try {
    const result = await prisma.order.groupBy({
      by: ['emisorAuthority'],
      _count: {
        emisorAuthority: true
      }
    })
    return result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.emisorAuthority === undefined || curr._count === undefined || curr.emisorAuthority === null) return acc
      acc[curr.emisorAuthority] = Number(curr._count.emisorAuthority)
      return acc
    }, {})
  } catch (error) {
    console.log(error)
  }
}
export const getOrdersByMunicipality = async () => {
  try {
    const result = await prisma.order.groupBy({
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
