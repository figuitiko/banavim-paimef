import Await from '@/components/share/common/Await'
import Disclaimer from '@/components/share/common/Disclaimer'
import GridByBar from '@/components/share/common/GridByBar'
import GridByPie from '@/components/share/common/GridByPie'
import InternalSideBar from '@/components/share/common/InternalSideBar'
import Skeleton from '@/components/ui/Skeletons/Skeleton'
import { APP_MESSAGES, INTERNAL_LINKS, SERVICES_TYPE_RGB_COLORS } from '@/constants'
import { getServicesByMunicipality, getServicesByStatus, getServicesByType } from '@/lib/fetchers/services'
import { Suspense } from 'react'

const ServicesScreen = () => {
  const servicesBytypePromise = getServicesByType()
  const servicesByMunPromise = getServicesByMunicipality()
  const servicesByStatusPromise = getServicesByStatus()
  return (
    <>
      <div className='fixed right-0 top-[25vh]  z-10'>
        <InternalSideBar items={[
          { title: INTERNAL_LINKS.type, href: '#byType' },
          { title: INTERNAL_LINKS.mun, href: '#byMun' },
          { title: INTERNAL_LINKS.status, href: '#byStatus' }
        ]} />
      </div>
      <section id='byType'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <section id='byAmount'>
            <Await promise={servicesBytypePromise}>
              {
                (data: Record<string, number> | undefined) => <GridByPie data={data} label={APP_MESSAGES.SERVICES_BY_TYPE} backgroundColors={SERVICES_TYPE_RGB_COLORS} />
              }
            </Await>
          </section>
        </Suspense>
      </section>
      <section id='byMun'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <section id='byAmount'>
            <Await promise={servicesByMunPromise}>
              {
                (data: Record<string, number> | undefined) => <GridByBar data={data} label={APP_MESSAGES.SERVICES_BY_MUN} />
              }
            </Await>
          </section>
        </Suspense>
      </section>
      <section id='byStatus'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <section id='byAmount'>
            <Await promise={servicesByStatusPromise}>
              {
                (data: Record<string, number> | undefined) => <GridByPie data={data} label={APP_MESSAGES.SERVICES_BY_STATUS} backgroundColors={SERVICES_TYPE_RGB_COLORS} />
              }
            </Await>
          </section>
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

export default ServicesScreen
