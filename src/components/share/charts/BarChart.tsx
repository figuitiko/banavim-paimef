'use client'
import { type BarChartProps } from '@/types'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  aspectRatio: 1,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart'
    }
  }
}

const BarChart = ({ datasets, labels, title }: BarChartProps) => {
  const data = {
    labels,
    datasets
  }
  if (title !== undefined) {
    options.plugins.title.text = title
  }
  return (
    <div className='flex w-full h-full flex-1 p-4'>
      <Bar options={options} data={data} />
    </div>
  )
}

export default BarChart
