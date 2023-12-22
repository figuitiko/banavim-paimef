import { ObjectMapper } from '@/components/indicators'
import CasesScreen from '@/components/indicators/cases/CasesScreen'
import React from 'react'

const Indicators = ({ params, searchParams }: { params: { slug: string }, searchParams?: { year: string } }) => {
  const ComponentScreen = ObjectMapper[params.slug as keyof typeof ObjectMapper] ?? CasesScreen
  return (
    <div>
      {
      <ComponentScreen year={searchParams?.year} />
      }
      </div>
  )
}

export default Indicators
