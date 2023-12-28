import Await from '@/components/share/common/Await'
import Skeleton from '@/components/ui/Skeletons/Skeleton'
import { getAgressorsByAgeRange, getAgressorsByMunicipality, getAgressorsByGender, getAgressorsByScholarship, getAgressorsByRelationship } from '@/lib/fetchers/agressors'
import { Suspense } from 'react'
import { type TypeAgressosrByAge } from '@/types'

import InternalSideBar from '@/components/share/common/InternalSideBar'

import GridByPie from '@/components/share/common/GridByPie'
import { AGRESSORS_AGE_RANGES_MAPPER, AGRESSORS_AGE_RANGES_RGB_COLORS, AGRESSORS_BY_GENDER_RGBA, APP_MESSAGES, INTERNAL_LINKS } from '@/constants'
import GridByBar from '@/components/share/common/GridByBar'
import GridHorizontalBar from '@/components/share/common/GridHorizontalBar'
import Disclaimer from '@/components/share/common/Disclaimer'

const AgressorsScreen = async () => {
  const agressorsByAgeRangePromise = getAgressorsByAgeRange()
  const agressorsByMunPromise = getAgressorsByMunicipality()
  const agressorsBySexPromise = getAgressorsByGender()
  const agressorsByScholarshipPromise = getAgressorsByScholarship()
  const agressorsByRelationshipPromise = getAgressorsByRelationship()
  return (
    <>
      <div className='fixed right-0 top-[25vh] z-10'>
        <InternalSideBar items={[
          { title: INTERNAL_LINKS.age, href: '#byAge' },
          { title: INTERNAL_LINKS.mun, href: '#byMun' },
          { title: INTERNAL_LINKS.gender, href: '#bySex' },
          { title: INTERNAL_LINKS.scholarship, href: '#byScholarship' },
          { title: INTERNAL_LINKS.relationship, href: '#byRelationship' }
        ]} />
      </div>
      <section id='byAge'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <Await promise={agressorsByAgeRangePromise}>
            {
              (data: TypeAgressosrByAge | undefined) => <GridByPie
                data={data}
                label={APP_MESSAGES.AGRESSORS_BY_AGE}
                backgroundColors={AGRESSORS_AGE_RANGES_RGB_COLORS}
                mapper={AGRESSORS_AGE_RANGES_MAPPER} />
            }
          </Await>
        </Suspense>
      </section>
      <section id='byMun'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <Await promise={agressorsByMunPromise}>
            {
              (data: Record<string, number> | undefined) => <GridByBar key='byMun' data={data} label={APP_MESSAGES.AGRESSORS_BY_MUNICIPALITY} />
            }
          </Await>
        </Suspense>
      </section>
      <section id='bySex'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <Await promise={agressorsBySexPromise}>
            {
              (data: Record<string, number> | undefined) => <GridByPie data={data} label={APP_MESSAGES.AGRESSORS_BY_GENDER} backgroundColors={AGRESSORS_BY_GENDER_RGBA} />
            }
          </Await>
        </Suspense>
      </section>
      <section id='byScholarship'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <Await promise={agressorsByScholarshipPromise}>
            {
              (data: Record<string, number> | undefined) => <GridByBar data={data} label={APP_MESSAGES.AGRESSORS_BY_SCHOLARSHIP} />
            }
          </Await>
        </Suspense>
      </section>
      <section id='byRelationship'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <Await promise={agressorsByRelationshipPromise}>
            {
              (data: Record<string, number> | undefined) => <GridHorizontalBar data={data} kpiTitle={APP_MESSAGES.AGRESSORS_BY_RELATIONSHIP} isRight />
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

export default AgressorsScreen
