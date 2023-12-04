import { APP_MESSAGES, kpiViolenceTypeMapper, rgbaColorsViolenceTypes } from '@/constants'
import { type ViolenceTypeWrapperProps } from '@/types'
import KpiBox from '../share/common/KpiBox'
import BarChart from '../share/charts/BarChart'

const ViolenceTypeWrapper = ({ data }: ViolenceTypeWrapperProps) => {
  if (data === undefined) return (<div>{APP_MESSAGES.DATA_NOT_FOUND}</div>)
  const violenceItemsKpi = Object.keys(data).map((key) => {
    return {
      label: kpiViolenceTypeMapper[key as keyof typeof kpiViolenceTypeMapper],
      value: data[key as keyof typeof data]
    }
  })
  const datasets = Object.keys(data).map((key, idx) => {
    return {
      label: kpiViolenceTypeMapper[key as keyof typeof kpiViolenceTypeMapper],
      data: [data[key as keyof typeof data]],
      backgroundColor: rgbaColorsViolenceTypes[idx]
    }
  })
  return (
    <div className='flex flex-col md:flex-row'>
      <KpiBox items={violenceItemsKpi} title={APP_MESSAGES.TITLE_VIOLENCE_TYPE} />
      <BarChart datasets={datasets} labels={[APP_MESSAGES.TITLE_VIOLENCE_TYPE]} title={APP_MESSAGES.TITLE_VIOLENCE_TYPE} />
    </div>
  )
}

export default ViolenceTypeWrapper
