import PieChart from '@/components/share/charts/PieChart'
import KpiBox from '@/components/share/common/KpiBox'
import { MotionDiv } from '@/components/share/common/Motion'
import { APP_MESSAGES } from '@/constants'
import { dataPieFormatter } from '@/lib/dataPieFormatter'
import { getMapper, randomRgba } from '@/lib/formatters'
import { fadeIn } from '@/lib/motion'
import { cn } from '@/lib/util'
import { type GripByPieProps } from '@/types'

const GridByPie = ({ data, backgroundColors, label, isRight = false, mapper }: GripByPieProps) => {
  if (data === undefined) return (<div>{APP_MESSAGES.DATA_NOT_FOUND}</div>)
  const mapperValue = getMapper(data)
  mapper = mapper ?? mapperValue
  const rgbaColors = backgroundColors ?? Object.keys(data).map(randomRgba)
  const { datasets, violenceItemsKpi, labels } = dataPieFormatter(data, mapper, label, rgbaColors)
  return (
    <MotionDiv id='hero'
      variants={fadeIn('right', 'tween', 0.2, 1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={cn('flex flex-col md:flex-row container w-full', {
        'md:flex-row-reverse': isRight
      })}>
      <KpiBox items={violenceItemsKpi} title={label} />
      <div className='flex flex-col'>
        <PieChart datasets={datasets} labels={labels} />
      </div>
    </MotionDiv>
  )
}

export default GridByPie
