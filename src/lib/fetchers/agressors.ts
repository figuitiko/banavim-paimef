import { prisma } from '../util'

export const getAgressorsByAgeRange = async () => {
  try {
    const agressorsAgeRange1 = await prisma.agressor.count({
      where: {
        age: {
          lte: 18
        }
      }
    })
    const agressorsAgeRange2 = await prisma.agressor.count({
      where: {
        age: {
          gte: 18,
          lte: 30
        }
      }
    })
    const agressorsAgeRange3 = await prisma.agressor.count({
      where: {
        age: {
          gte: 31,
          lte: 50
        }
      }
    })
    const agressorsAgeRange4 = await prisma.agressor.count({
      where: {
        age: {
          gte: 51,
          lte: 70
        }
      }
    })
    const agressorsAgeRange5 = await prisma.agressor.count({
      where: {
        age: {
          gte: 70
        }
      }
    })
    const agressorsAgeRange6 = await prisma.agressor.count({
      where: {
        age: {
          equals: null
        }
      }
    })
    return {
      agressorsAgeRange1,
      agressorsAgeRange2,
      agressorsAgeRange3,
      agressorsAgeRange4,
      agressorsAgeRange5,
      agressorsAgeRange6
    }
  } catch (error) {
    console.log(error)
  }
}

export const getAgressorsByMunicipality = async () => {
  try {
    const result = await prisma.agressor.groupBy({
      by: ['municipalityName'],
      _count: {
        municipalityName: true
      }
    })
    const mappedResult = result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.municipalityName !== undefined && curr._count.municipalityName !== undefined) {
        acc[curr.municipalityName] = curr._count.municipalityName
      }
      return acc
    }, {})
    return mappedResult
  } catch (error) {
    console.log(error)
  }
}

export const getAgressorsByGender = async () => {
  try {
    const result = await prisma.agressor.groupBy({
      by: ['sex'],
      _count: {
        sex: true
      }
    })
    const mappedResult = result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.sex !== undefined && curr._count.sex !== undefined && curr.sex !== null) {
        acc[curr.sex] = curr._count.sex
      }
      return acc
    }, {})
    return mappedResult
  } catch (error) {
    console.log(error)
  }
}

export const getAgressorsByScholarship = async () => {
  try {
    const result = await prisma.agressor.groupBy({
      by: ['scholarship'],
      _count: {
        scholarship: true
      }
    })
    const mappedResult = result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.scholarship !== undefined && curr._count.scholarship !== undefined && curr.scholarship !== null) {
        const scholarship = curr.scholarship === '' ? 'No identificado' : curr.scholarship
        acc[scholarship] = curr._count.scholarship
      }
      return acc
    }, {})
    return mappedResult
  } catch (error) {
    console.log(error)
  }
}

export const getAgressorsByRelationship = async () => {
  try {
    const result = await prisma.agressor.groupBy({
      by: ['relationship'],
      _count: {
        relationship: true
      }
    })
    const mappedResult = result.reduce<Record<string, number>>((acc, curr) => {
      if (curr.relationship !== undefined && curr._count.relationship !== undefined && curr.relationship !== null) {
        const relationship = curr.relationship === '' ? 'No identificado' : curr.relationship
        acc[relationship] = curr._count.relationship
      }
      return acc
    }, {})
    return mappedResult
  } catch (error) {
    console.log(error)
  }
}
