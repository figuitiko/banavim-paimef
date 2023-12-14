'use client'
import CountUp from 'react-countup'

const CountUpWrapper = ({ val }: { val: number }) => {
  return (
    <CountUp end={val} />
  )
}

export default CountUpWrapper
