import { type TypeViolenceCaseType, type TypeViolenceCaseModality } from '@/types'
import { prisma } from '../util'
import { VIOLENCE_MODALITIES } from '@/constants'

export const getViolenceCasesByViolenceType = async () => {
  try {
    const violenceCasePhysical = await prisma.violenceCase.count({
      where: {
        isPhysical: true
      }
    })
    const violenceCasePsychological = await prisma.violenceCase.count({
      where: {
        isPsychological: true
      }
    })
    const violenceCasePatrimonial = await prisma.violenceCase.count({
      where: {
        isPatrimonial: true
      }
    })
    const violenceCaseSexual = await prisma.violenceCase.count({
      where: {
        isSexual: true
      }
    })
    const violenceCaseEconomic = await prisma.violenceCase.count({
      where: {
        isEconomic: true
      }
    })
    return {
      violenceCasePhysical,
      violenceCasePsychological,
      violenceCasePatrimonial,
      violenceCaseSexual,
      violenceCaseEconomic
    } satisfies TypeViolenceCaseType
  } catch (error) {
    console.log(error)
  }
}
export const getViolenceCasesByViolenceTypeByYear = async (year: number) => {
  try {
    const violenceCasePhysical = await prisma.violenceCase.count({
      where: {
        isPhysical: true,
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    const violenceCasePsychological = await prisma.violenceCase.count({
      where: {
        isPsychological: true,
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    const violenceCasePatrimonial = await prisma.violenceCase.count({
      where: {
        isPatrimonial: true,
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    const violenceCaseSexual = await prisma.violenceCase.count({
      where: {
        isSexual: true,
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    const violenceCaseEconomic = await prisma.violenceCase.count({
      where: {
        isEconomic: true,
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    return {
      violenceCasePhysical,
      violenceCasePsychological,
      violenceCasePatrimonial,
      violenceCaseSexual,
      violenceCaseEconomic
    } satisfies TypeViolenceCaseType
  } catch (error) {
    console.log(error)
  }
}
export const getViolenceCasesByModality = async () => {
  try {
    const violenceModalityLabor = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[0]
        }
      }
    })
    const violenceModalitySchool = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[1]
        }
      }
    })
    const violenceModalityCommunity = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[2]
        }
      }
    })
    const violenceModalityInstitutional = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[3]
        }
      }
    })
    const violenceModalityFeminicide = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[4]
        }
      }
    })
    const violenceModalityFamily = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[5]
        }
      }
    })
    const violenceModalityDigital = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[6]
        }
      }
    })

    return {
      violenceModalityLabor,
      violenceModalitySchool,
      violenceModalityCommunity,
      violenceModalityInstitutional,
      violenceModalityFeminicide,
      violenceModalityFamily,
      violenceModalityDigital
    } satisfies TypeViolenceCaseModality
  } catch (error) {
    console.log(error)
  }
}

export const getViolenceCasesByModalityByYear = async (year: number) => {
  try {
    const violenceModalityLabor = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[0]
        },
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    const violenceModalitySchool = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[1]
        },
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    const violenceModalityCommunity = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[2]
        },
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    const violenceModalityInstitutional = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[3]
        },
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    const violenceModalityFeminicide = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[4]
        },
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    const violenceModalityFamily = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[5]
        },
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    const violenceModalityDigital = await prisma.violenceCase.count({
      where: {
        modality: {
          contains: VIOLENCE_MODALITIES[6]
        },
        date: {
          gte: new Date(year, 0, 1),
          lte: new Date(year, 11, 31)
        }
      }
    })
    return {
      violenceModalityLabor,
      violenceModalitySchool,
      violenceModalityCommunity,
      violenceModalityInstitutional,
      violenceModalityFeminicide,
      violenceModalityFamily,
      violenceModalityDigital
    } satisfies TypeViolenceCaseModality
  } catch (error) {
    console.log(error)
  }
}
