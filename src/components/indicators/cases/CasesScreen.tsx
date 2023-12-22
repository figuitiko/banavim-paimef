import { Suspense } from 'react'
import Await from '../../share/common/Await'
import Skeleton from '../../ui/Skeletons/Skeleton'
import { getCasesByMunicipality, getViolenceCasesByModalityByYear, getViolenceCasesByViolenceTypeByYear } from '@/lib/fetchers/cases'
import { type TypeViolenceCaseModality, type TypeViolenceCaseType } from '@/types'
import { APP_MESSAGES, VIOLENCE_CONTENT, VIOLENCE_MODALITIES_CONTENT, VIOLENCE_MODALITIES_MAPPER, VIOLENCE_RGB_COLORS, kpiViolenceTypeMapper } from '@/constants'
import { AccordionComponent } from '@/components/share/common/AccordionComponent'
import Disclaimer from '@/components/share/common/Disclaimer'
import SelectYears from '@/components/share/common/SelectYears'
import { MotionDiv } from '@/components/share/common/Motion'
import { fadeIn } from '@/lib/motion'

import GridByPie from '@/components/share/common/GridByPie'
import GridByBar from '@/components/share/common/GridByBar'
import GridHorizontalBar from '@/components/share/common/GridHorizontalBar'

const CasesScreen = ({ year = '2020' }: { year?: string }) => {
  const dataPromiseViolenceType = getViolenceCasesByViolenceTypeByYear(Number(year))
  const dataPromiseModality = getViolenceCasesByModalityByYear(Number(year))
  const dataPromiseByMun = getCasesByMunicipality(Number(year))
  return (
    <>
      <MotionDiv
        variants={fadeIn('left', 'tween', 0.2, 1)}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }} className='flex max-w-[200px] fixed right-0 top-[50vh]'>
        <SelectYears />
      </MotionDiv>
      <section>
        <Suspense key={year + 'violenceType'} fallback={<Skeleton height={539} width={1200} />}>
          <Await promise={dataPromiseViolenceType}>
            {
              (data: TypeViolenceCaseType | undefined) => <GridByPie data={data} label={APP_MESSAGES.TITLE_VIOLENCE_TYPE} backgroundColors={VIOLENCE_RGB_COLORS} mapper={kpiViolenceTypeMapper} />
            }
          </Await>
        </Suspense>
        <div className='p-8'>
          <AccordionComponent accordionItems={VIOLENCE_CONTENT} />
        </div>
      </section>
      <section>
        <Suspense key={year + 'violenceModality'} fallback={<Skeleton height={539} width={1200} />}>
          <Await promise={dataPromiseModality}>
            {
              (data: TypeViolenceCaseModality | undefined) => <GridByBar data={data} mapper={VIOLENCE_MODALITIES_MAPPER} label={APP_MESSAGES.TITLE_VIOLENCE_MODALITY} />
            }
          </Await>
        </Suspense>
        <div className='p-8'>
          <AccordionComponent accordionItems={VIOLENCE_MODALITIES_CONTENT} />
        </div>
      </section>
      <section>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <Await promise={dataPromiseByMun}>
            {
              (data: Record<string, number> | undefined) => <GridHorizontalBar data={data} kpiTitle={APP_MESSAGES.CASES_BY_MUN} isRight />
            }
          </Await>
        </Suspense>
      </section>
      <section>
        <Disclaimer
          title={APP_MESSAGES.DISCLAIMER_TITLE}
          content={APP_MESSAGES.DISCLAIMER_CONTENT}
        />
      </section>
    </>
  )
}

export default CasesScreen
