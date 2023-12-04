import { type ViolenceModalityWrapperProps } from '@/types'
import KpiBox from '../share/common/KpiBox'
import { APP_MESSAGES, VIOLENCE_MODALITIES_MAPPER, rgbaColorsViolenceTypes } from '@/constants'
import BarChart from '../share/charts/BarChart'

const ViolenceModalityWrapper = ({ data }: ViolenceModalityWrapperProps) => {
  if (data === undefined) return (<div>No se encontro datos</div>)
  const violenceKpiItems = Object.keys(data).map((key) => {
    return {
      label: VIOLENCE_MODALITIES_MAPPER[key as keyof typeof VIOLENCE_MODALITIES_MAPPER],
      value: data[key as keyof typeof data]
    }
  })
  const datasets = Object.keys(data).map((key, idx) => {
    return {
      label: VIOLENCE_MODALITIES_MAPPER[key as keyof typeof VIOLENCE_MODALITIES_MAPPER],
      data: [data[key as keyof typeof data]],
      backgroundColor: rgbaColorsViolenceTypes[idx]
    }
  })
  return (
    <div className='flex flex-col-reverse md:flex-row'>
      <BarChart datasets={datasets} labels={[APP_MESSAGES.TITLE_VIOLENCE_MODALITY]} title={APP_MESSAGES.TITLE_VIOLENCE_MODALITY} />
      <KpiBox items={violenceKpiItems} title={APP_MESSAGES.TITLE_VIOLENCE_MODALITY} />
    </div>
  )
}

export default ViolenceModalityWrapper
