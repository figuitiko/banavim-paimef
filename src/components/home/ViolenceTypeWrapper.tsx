import { APP_MESSAGES, kpiViolenceTypeMapper, rgbaColorsViolenceTypes } from '@/constants'
import { type ViolenceTypeWrapperProps } from '@/types'
import KpiBox from '../share/common/KpiBox'
import BarChart from '../share/charts/BarChart'
import { MotionDiv } from '../share/common/Motion'
import { fadeIn } from '@/lib/motion'
import { dataBarFormatter } from '@/lib/dataBarFormatter'

const ViolenceTypeWrapper = ({ data }: ViolenceTypeWrapperProps) => {
  if (data === undefined) return (<div>{APP_MESSAGES.DATA_NOT_FOUND}</div>)
  const { datasets, violenceItemsKpi } = dataBarFormatter(data, kpiViolenceTypeMapper, rgbaColorsViolenceTypes)
  return (
    <div className='flex flex-col md:flex-row'>
      <MotionDiv id='hero'
        variants={fadeIn('right', 'tween', 0.2, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex-1'>
        <KpiBox items={violenceItemsKpi} title={APP_MESSAGES.TITLE_VIOLENCE_TYPE} />
      </MotionDiv>
      <MotionDiv id='hero'
        variants={fadeIn('left', 'tween', 0.2, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className='flex-1'>
        <BarChart datasets={datasets} labels={[APP_MESSAGES.TITLE_VIOLENCE_TYPE]} title={APP_MESSAGES.TITLE_VIOLENCE_TYPE} />
      </MotionDiv>
    </div>
  )
}

export default ViolenceTypeWrapper
