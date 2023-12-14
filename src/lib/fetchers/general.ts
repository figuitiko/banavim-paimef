import { prisma } from '../util'
import { type TypeSectionIconsData } from '@/types'

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
