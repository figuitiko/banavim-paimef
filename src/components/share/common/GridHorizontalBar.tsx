import { APP_MESSAGES } from '@/constants'
import { dataHorizontalFormatter } from '@/lib/dataHorizontalFormatter'
import { randomRgbAndRgba } from '@/lib/formatters'
import { fadeIn } from '@/lib/motion'
import { cn } from '@/lib/util'
import { type GridHorizontalBarProps } from '@/types'
import KpiBox from './KpiBox'
import { MotionDiv } from './Motion'
import HorizontalBarChart from '../charts/HorizontalBarChart'

const GridHorizontalBar = ({ data, label = '', kpiTitle = '', isRight = false }: GridHorizontalBarProps) => {
  if (data === undefined) return (<div>{APP_MESSAGES.DATA_NOT_FOUND}</div>)
  const colors = Object.keys(data).map(randomRgbAndRgba)
  const { datasets, violenceItemsKpi } = dataHorizontalFormatter(data, colors)
  return (
    <div className={cn('flex flex-col md:flex-row container w-full', {
      'md:flex-row-reverse': isRight
    })}>
    <MotionDiv id='hero'
      variants={fadeIn('left', 'tween', 0.2, 1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='flex-1'>
      <HorizontalBarChart datasets={datasets} labels={[label]} />
      </MotionDiv>
    <MotionDiv id='hero'
      variants={fadeIn('right', 'tween', 0.2, 1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='flex-1'>
      <KpiBox key={label} items={violenceItemsKpi} title={kpiTitle} />
    </MotionDiv>
  </div>
  )
}

export default GridHorizontalBar
