import { prisma } from '../util'
export const getVictimsByAgeRange = async () => {
  try {
    const victimsAgeRange1 = await prisma.violenceCase.findMany({
      where: {
        age: {
          lte: 18
        }
      }
    }).then((res) => res.length)
    const victimsAgeRange2 = await prisma.violenceCase.findMany({
      where: {
        age: {
          gte: 18,
          lte: 30
        }
      }
    }).then((res) => res.length)
    const victimsAgeRange3 = await prisma.violenceCase.findMany({
      where: {
        age: {
          gte: 31,
          lte: 50
        }
      }
    }).then((res) => res.length)
    const victimsAgeRange4 = await prisma.violenceCase.findMany({
      where: {
        age: {
          gte: 51,
          lte: 70
        }
      }
    }).then((res) => res.length)
    const victimsAgeRange5 = await prisma.violenceCase.findMany({
      where: {
        age: {
          gte: 70
        }
      }
    }).then((res) => res.length)
    return {
      '0-17': victimsAgeRange1,
      '18-30': victimsAgeRange2,
      '31-50': victimsAgeRange3,
      '51-70': victimsAgeRange4,
      '71 y más': victimsAgeRange5
    }
  } catch (error) {
    console.log(error)
  }
}

export const getVictimsByMunicipality = async () => {
  try {
    const result = await prisma.violenceCase.groupBy({
      by: ['municipalityName'],
      _count: {
        municipalityName: true
      }
    })
    const mapperValue = result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.municipalityName === undefined || curr._count === undefined) return acc
      acc[curr.municipalityName] = Number(curr._count.municipalityName)
      return acc
    }, {})
    return mapperValue
  } catch (error) {
    console.log(error)
  }
}

export const getVictimsByGender = async () => {
  try {
    const result = await prisma.violenceCase.groupBy({
      by: ['sex'],
      _count: {
        sex: true
      }
    })
    return result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.sex === undefined || curr._count === undefined || curr.sex === null) return acc
      acc[curr.sex] = Number(curr._count.sex)
      return acc
    }, {})
  } catch (error) {
    console.log(error)
  }
}

export const getVictimsByScholarship = async () => {
  try {
    const result = await prisma.violenceCase.groupBy({
      by: ['scholarship'],
      _count: {
        scholarship: true
      }
    })
    return result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.scholarship === undefined || curr._count === undefined || curr.scholarship === null) return acc
      acc[curr.scholarship] = Number(curr._count.scholarship)
      return acc
    }, {})
  } catch (error) {
    console.log(error)
  }
}
export const getVictimsByCivilStatus = async () => {
  try {
    const result = await prisma.violenceCase.groupBy({
      by: ['civilStatus'],
      _count: {
        civilStatus: true
      }
    })
    return result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.civilStatus === undefined || curr._count === undefined || curr.civilStatus === null) return acc
      acc[curr.civilStatus] = Number(curr._count.civilStatus)
      return acc
    }, {})
  } catch (error) {
    console.log(error)
  }
}
export const getVictimsByAmountAgressors = async () => {
  try {
    const result = await prisma.violenceCase.groupBy({
      by: ['amountAgressors'],
      _count: {
        amountAgressors: true
      }
    })
    console.log(result)
    return result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.amountAgressors === undefined || curr._count === undefined || curr.amountAgressors === null || curr.amountAgressors === 0) return acc
      acc[curr.amountAgressors] = Number(curr._count.amountAgressors)
      return acc
    }, {})
  } catch (error) {
    console.log(error)
  }
}

// export const getVictimsByRelationship = async () => {
//   try {
//     const result = await prisma.violenceCase.groupBy({
//       by: ['relationship'],
//       _count: {
//         relationship: true
//       }
//     })
//     return result.reduce<Record<string, number>>((acc, curr) => {
//       if (curr.relationship === undefined || curr._count === undefined || curr.relationship === null) return acc
//       acc[curr.relationship] = Number(curr._count.relationship)
//       return acc
//     }, {})
//   } catch (error) {
//     console.log(error)
//   }
// }
// export const getByTarget = async <TPrisma extends typeof prisma> (target: TPrisma): Promise<Record<string, number>> | Promise<boolean> => {
//   if (typeof target !== 'string') throw new Error('Target must be a string')
//   if (!Object.keys(prisma.violenceCase).includes(target)) throw new Error('Target must be a valid key of prisma.violenceCase')
//   try {
//     const result = await prisma.violenceCase.groupBy({
//       by: [target as keyof typeof prisma.violenceCase],
//       _count: {
//         [target]: true
//       }
//     })
//     return result.reduce<Record<string, number>>((acc, curr) => {
//       if (curr[target as string] === undefined || curr._count === undefined || curr[target] === null) return acc
//       acc[curr[target]] = Number(curr._count.scholarship)
//       return acc
//     }, {})
//   } catch (error) {
//     return false
//     console.log(error)
//   }
// }
