'use client'
import { type PieChartProps } from '@/types'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(ArcElement, Tooltip, Legend)
const PieChart = ({ datasets, labels }: PieChartProps) => {
  const data = {
    labels,
    datasets
  }
  return (
    <div className='flex w-full h-full flex-1 p-4'>
      <Pie data={data} />
    </div>
  )
}

export default PieChart
