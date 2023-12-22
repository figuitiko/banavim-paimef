import { type ViolenceCase, type Agressor, type Order, type Service } from '@prisma/client'
import { type PRIMARY_MENU, type COLORS, type UPLOAD_ITEMS, type MAPPED_INDICATORS_CASES } from '../constants'
import type React from 'react'
import { type IconsMapper } from '@/components/share/common/InfoBox'

export type SingleColor = typeof COLORS[keyof typeof COLORS_BUTTONS]
type href = string
type handleClick = () => void
export type LinkButtonFn = href | handleClick
export type ButtonsProps = {
  text: string
  className?: string
  linkButtonFn: LinkButtonFn
}
export type SVGProps = {
  fill?: SingleColor
}

export type IconsProps = {
  children: React.ReactNode
  bgColor?: SingleColor
}
export type NavBarItem = typeof PRIMARY_MENU[keyof typeof PRIMARY_MENU]

export type NavBarProps = {
  items: NavBarItem[]
}

export type IndicatorsObj = typeof PRIMARY_MENU['indicators']
export type IndicatorsObjeItem = typeof IndicatorsObj[keyof IndicatorsObj]

export type User = {
  name: string
  email: string
  id: string
}
export type BoxUserInfoProps = Pick<User, 'name' | 'email'>

export type TuploaderItem = typeof UPLOAD_ITEMS[number]

export type DropzoneProps = {
  upLoadType: TuploaderItem
}

export type IndicatorAgressorItem = typeof MAPPED_INDICATORS_AGRESSORS[keyof typeof MAPPED_INDICATORS_AGRESSORS]

export type TkeyCases = keyof typeof MAPPED_INDICATORS_CASES

export type TypeHandlerReducersResultItem = Agressor | ViolenceCase | Order | Service

export type TypeHandleReaderArg = {
  reader: FileReader
  result: TypeHandlerReducersResultItem[]
  file: File
  type: TuploaderItem
}

export type TypeSectionIconsData = {
  totalCases: number
  totalOrders: number
  totalServices: number
  totalAgressorsWomen: number
  totalAgressorMen: number
} & Record<string, number>

export type SectionIconsProps = {
  data: TypeSectionIconsData | undefined
}

export type IconsBoxProps = {
  iconName: keyof typeof IconsMapper
}

export type ItemIconProps = {
  iconName: keyof typeof IconsMapper
  text: string
  itemVal: number
  bgColor?: SingleColor
}

export type KpiProps = {
  items: kpiItem[]
  title: string
}

export type KpiItem = {
  value: number
  label: string
}

export type TypeViolenceCaseType = {
  violenceCasePhysical: number
  violenceCasePsychological: number
  violenceCasePatrimonial: number
  violenceCaseSexual: number
  violenceCaseEconomic: number
}
export type ViolenceTypeWrapperProps = {
  data: TypeViolenceCaseType | undefined
}

export type BarChartProps = {
  labels: string[]
  datasets: datasetItem[]
  title?: string
}

export type datasetItem = {
  label: string
  data: number[]
  backgroundColor: string | string[]
  borderColor?: string | string[]
  borderWidth?: number
}
export type PieChartProps = {
  labels: string[]
  datasets: datasetItem[]
  title?: string
}
export type HorizontalBarChartProps = {
  datasets: dataSetHorizontalItem[]
  labels: string[]
}
export type dataSetHorizontalItem = {
  label: string
  data: number[]
  backgroundColor: string | string[]
  borderColor?: string | string[]
}

export type RGBAColor = `rbga(${number}, ${number}, ${number}, ${number})`

export type TypeViolenceCaseModality = {
  violenceModalityLabor: number
  violenceModalitySchool: number
  violenceModalityCommunity: number
  violenceModalityInstitutional: number
  violenceModalityFeminicide: number
  violenceModalityFamily: number
  violenceModalityDigital: number
}

export type ViolenceModalityWrapperProps = {
  data: TypeViolenceCaseModality | undefined
}

export type SkeletonProps = {
  height: number
  width: number
}
export type AccordionComponentProps = {
  accordionItems: AccordionItemProp[]
}
export type AccordionItemProp = {
  title: string
  content: string
}

export type TypeAgressosrByAge = {
  agressorsAgeRange1: number
  agressorsAgeRange2: number
  agressorsAgeRange3: number
  agressorsAgeRange4: number
  agressorsAgeRange5: number
  agressorsAgeRange6: number
}
export type AgressorsByAgeWrapperProps = {
  data: TypeAgressosrByAge | undefined
}

export type TypeAgressorsByMunicipality = Record<string, number>
export type AgressorsByMunicipalityWrapperProps = {
  data: TypeAgressorsByMunicipality | undefined
}

export type InternalSideBarProps = {
  items: InternalNavBarItem[]
}
export type InternalNavBarItem = {
  title: string
  href: string
}
export type AgressorsBySexWrapperProps = {
  data: Record<string, number> | undefined
}

export type GripByPieProps = {
  data: Record<string, number> | undefined
  label: string
  backgroundColors?: string[]
  isRight?: boolean
  mapper?: Record<string, string>
}

export type GripByBarProps = {
  data: Record<string, number> | undefined
  label: string
  backgroundColors?: string[]
  isRight?: boolean
  mapper?: Record<string, string>
}

export type GridHorizontalBarProps = {
  data: Record<string, number> | undefined
  label?: string
  isRight?: boolean
  kpiTitle?: string
}
export type TooltipLocatorProps = {
  left: string
  top: string
  tooltipContent: string
  delay?: number
}
