import Await from '@/components/share/common/Await'
import Disclaimer from '@/components/share/common/Disclaimer'
import GridByBar from '@/components/share/common/GridByBar'
import GridByPie from '@/components/share/common/GridByPie'
import InternalSideBar from '@/components/share/common/InternalSideBar'
import Skeleton from '@/components/ui/Skeletons/Skeleton'
import { APP_MESSAGES, INTERNAL_LINKS, SERVICES_TYPE_RGB_COLORS } from '@/constants'
import { getOrdersByAgeRange, getOrdersByEmissorAuthority, getOrdersByMunicipality, getOrdersByType } from '@/lib/fetchers/orders'
import { Suspense } from 'react'

const OrdersScreen = () => {
  const ordersByTypePromise = getOrdersByType()
  const orderByAgeRangePromise = getOrdersByAgeRange()
  const ordersByEmissorPromise = getOrdersByEmissorAuthority()
  const ordersByMunPromise = getOrdersByMunicipality()
  return (
    <>
      <div className='fixed right-0 top-[25vh]'>
        <InternalSideBar items={[
          { title: INTERNAL_LINKS.type, href: '#byType' },
          { title: INTERNAL_LINKS.age, href: '#byAge' },
          { title: INTERNAL_LINKS.authority, href: '#byEmissor' },
          { title: INTERNAL_LINKS.mun, href: '#byMun' }
        ]} />
      </div>
      <section id='byType'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <section id='byAmount'>
            <Await promise={ordersByTypePromise}>
              {
                (data: Record<string, number> | undefined) => <GridByPie data={data} label={APP_MESSAGES.ORDERS_BY_TYPE} backgroundColors={SERVICES_TYPE_RGB_COLORS} />
              }
            </Await>
          </section>
        </Suspense>
      </section>
      <section id='byAge'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <section id='byAmount'>
            <Await promise={orderByAgeRangePromise}>
              {
                (data: Record<string, number> | undefined) => <GridByBar data={data} label={APP_MESSAGES.ORDERS_BY_AGE} backgroundColors={SERVICES_TYPE_RGB_COLORS} />
              }
            </Await>
          </section>
        </Suspense>
      </section>
      <section id='byEmissor'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <section id='byAmount'>
            <Await promise={ordersByEmissorPromise}>
              {
                (data: Record<string, number> | undefined) => <GridByPie data={data} label={APP_MESSAGES.ORDERS_BY_AUTHORITY} backgroundColors={SERVICES_TYPE_RGB_COLORS} />
              }
            </Await>
          </section>
        </Suspense>
      </section>
      <section id='byMun'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <section id='byAmount'>
            <Await promise={ordersByMunPromise}>
              {
                (data: Record<string, number> | undefined) => <GridByBar data={data} label={APP_MESSAGES.ORDERS_BY_MUN} backgroundColors={SERVICES_TYPE_RGB_COLORS} />
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

export default OrdersScreen
