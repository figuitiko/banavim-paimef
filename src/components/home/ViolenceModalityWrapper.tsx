import { type ViolenceModalityWrapperProps } from '@/types'
import KpiBox from '../share/common/KpiBox'
import { APP_MESSAGES, VIOLENCE_MODALITIES_MAPPER, rgbaColorsViolenceTypes } from '@/constants'
import BarChart from '../share/charts/BarChart'
import { MotionDiv } from '../share/common/Motion'
import { fadeIn } from '@/lib/motion'
import { dataBarFormatter } from '@/lib/dataBarFormatter'

const ViolenceModalityWrapper = ({ data }: ViolenceModalityWrapperProps) => {
  if (data === undefined) return (<div>No se encontro datos</div>)
  const { violenceItemsKpi, datasets } = dataBarFormatter(data, VIOLENCE_MODALITIES_MAPPER, rgbaColorsViolenceTypes)
  return (
    <div className='flex flex-col'>
      <div className='flex flex-col-reverse md:flex-row'>
        <MotionDiv id='hero'
          variants={fadeIn('right', 'tween', 0.2, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='flex-1'>
          <BarChart datasets={datasets} labels={[APP_MESSAGES.TITLE_VIOLENCE_MODALITY]} title={APP_MESSAGES.TITLE_VIOLENCE_MODALITY} />
        </MotionDiv>
        <MotionDiv id='hero'
          variants={fadeIn('left', 'tween', 0.2, 1)}
          initial='hidden'
          whileInView='show'
          viewport={{ once: false, amount: 0.25 }}
          className='flex-1'>
          <KpiBox items={violenceItemsKpi} title={APP_MESSAGES.TITLE_VIOLENCE_MODALITY} />
        </MotionDiv>
      </div>
    </div>
  )
}

export default ViolenceModalityWrapper
