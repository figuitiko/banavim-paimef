'use client'
import { type HorizontalBarChartProps } from '@/types'
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
  indexAxis: 'y' as const,
  aspectRatio: 1,
  elements: {
    bar: {
      borderWidth: 2
    }
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right' as const
    }
  }
}

const HorizontalBarChart = ({ labels, datasets }: HorizontalBarChartProps) => {
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

export default HorizontalBarChart
