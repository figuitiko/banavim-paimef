import { ObjectMapper } from '@/components/indicators'
import CasesScreen from '@/components/indicators/cases/CasesScreen'
import { INDICATORS_MAPPER } from '@/constants'
import { type Metadata } from 'next'

type Props = {
  params: { slug: string }
}
export async function generateMetadata ({
  params
}: Props): Promise<Metadata> {
  const { slug } = params
  return {
    title: `Banavim - ${INDICATORS_MAPPER[slug as keyof typeof INDICATORS_MAPPER]}`
  }
}

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
