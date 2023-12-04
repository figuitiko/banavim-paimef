import { type TypeViolenceCaseType, type TypeSectionIconsData, type TypeViolenceCaseModality } from '@/types'
import { prisma } from './util'
import { VIOLENCE_MODALITIES } from '@/constants'

export const getGeneralData = async () => {
  try {
    const totalCases = await prisma.violenceCase.count()
    const totalOrders = await prisma.order.count()
    const totalServices = await prisma.service.count()
    const totalAgressorsWomen = await prisma.agressor.count({
      where: {
        sex: {
          contains: 'Mujer'
        }
      }
    })
    const totalAgressorMen = await prisma.agressor.count({
      where: {
        sex: {
          contains: 'Hombre'
        }
      }
    })
    return { totalCases, totalOrders, totalServices, totalAgressorsWomen, totalAgressorMen } satisfies TypeSectionIconsData
  } catch (error) {
    console.log(error)
  }
}

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