'use client'
import BarChart from '@/components/share/charts/BarChart'
import KpiBox from '@/components/share/common/KpiBox'
import { MotionDiv } from '@/components/share/common/Motion'
import { APP_MESSAGES } from '@/constants'
import { dataBarFormatter } from '@/lib/dataBarFormatter'
import { randomRgba } from '@/lib/formatters'
import { fadeIn } from '@/lib/motion'
import { cn } from '@/lib/util'
import { type GripByBarProps } from '@/types'

const GridByBar = ({ data, label, backgroundColors, isRight = false, mapper }: GripByBarProps) => {
  if (data === undefined) return (<div>{APP_MESSAGES.DATA_NOT_FOUND}</div>)
  const mapperValues = Object.keys(data).reduce((acc: Record<string, string>, key: string) => {
    acc[key] = key
    return acc
  }, {})
  mapper = mapper ?? mapperValues
  const rgbaColors = backgroundColors ?? Object.keys(data).map(randomRgba)
  const { datasets, violenceItemsKpi } = dataBarFormatter(data, mapper, rgbaColors)
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
      <BarChart datasets={datasets} labels={[label]} />
      </MotionDiv>
    <MotionDiv id='hero'
      variants={fadeIn('right', 'tween', 0.2, 1)}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className='flex-1'>
      <KpiBox key={label} items={violenceItemsKpi} title={label} />
    </MotionDiv>
  </div>
  )
}

export default GridByBar
