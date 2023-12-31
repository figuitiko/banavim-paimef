'use client'
import { type BarChartProps } from '@/types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  aspectRatio: 1,
  plugins: {
    legend: {
      position: 'top' as const
    }
  }
}

const BarChart = ({ datasets, labels }: BarChartProps) => {
  const data = {
    labels,
    datasets
  }
  return (
    <div className='flex w-full h-full flex-1 p-4'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart
