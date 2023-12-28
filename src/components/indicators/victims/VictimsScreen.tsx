import Await from '@/components/share/common/Await'
import Disclaimer from '@/components/share/common/Disclaimer'
import GridByBar from '@/components/share/common/GridByBar'
import GridByPie from '@/components/share/common/GridByPie'
import GridHorizontalBar from '@/components/share/common/GridHorizontalBar'
import InternalSideBar from '@/components/share/common/InternalSideBar'
import { AGRESSORS_AGE_RANGES_RGB_COLORS, AMOUNT_MAPPER, APP_MESSAGES, INTERNAL_LINKS, VICTIMS_BY_GENDER_RGBA } from '@/constants'
import { getVictimsByAgeRange, getVictimsByAmountAgressors, getVictimsByCivilStatus, getVictimsByGender, getVictimsByMunicipality, getVictimsByScholarship } from '@/lib/fetchers/victims'

const VictimsScreen = async () => {
  const victimsByAgeRangePromise = getVictimsByAgeRange()
  const victimisByMunPromise = getVictimsByMunicipality()
  const victimsByGenderPromise = getVictimsByGender()
  const victimsByScholarshipPromise = getVictimsByScholarship()
  const victimisByCivilStatusPromise = getVictimsByCivilStatus()
  const victimisByAmountAgressorsPromise = getVictimsByAmountAgressors()
  return (
    <>
      <div className='fixed right-0 top-[25vh] z-10'>
        <InternalSideBar items={[
          { title: INTERNAL_LINKS.age, href: '#byAge' },
          { title: INTERNAL_LINKS.mun, href: '#byMun' },
          { title: INTERNAL_LINKS.gender, href: '#bySex' },
          { title: INTERNAL_LINKS.civilStatus, href: '#byCivilStatus' },
          { title: INTERNAL_LINKS.amount, href: '#byAmount' }
        ]} />
      </div>
      <section id='byAge'>
        <Await promise={victimsByAgeRangePromise}>
          {
            (data: Record<string, number> | undefined) => <GridByPie data={data} label={APP_MESSAGES.VICTIMS_BY_AGE} backgroundColors={AGRESSORS_AGE_RANGES_RGB_COLORS} />
          }
        </Await>
      </section>
      <section id='byMun'>
        <Await promise={victimisByMunPromise}>
          {
            (data: Record<string, number> | undefined) => <GridByBar data={data} label={APP_MESSAGES.VICTIMS_BY_MUNICIPALITY} />
          }
        </Await>
      </section>
      <section id='bySex'>
        <Await promise={victimsByGenderPromise}>
          {
            (data: Record<string, number> | undefined) => <GridByPie data={data} label={APP_MESSAGES.VICTIMS_BY_GENDER} backgroundColors={VICTIMS_BY_GENDER_RGBA} isRight />
          }
        </Await>
      </section>
      <section id='byScholarship'>
        <Await promise={victimsByScholarshipPromise}>
          {
            (data: Record<string, number> | undefined) => <GridByBar data={data} label={APP_MESSAGES.VICTIMS_BY_SCHOLARSHIP} isRight />
          }
        </Await>
      </section>
      <section id='byCivilStatus'>
        <Await promise={victimisByCivilStatusPromise}>
          {
            (data: Record<string, number> | undefined) => <GridHorizontalBar data={data} kpiTitle={APP_MESSAGES.VICTIMS_BY_CIVIL_STATUS} />
          }
        </Await>
      </section>
      <section id='byAmount'>
        <Await promise={victimisByAmountAgressorsPromise}>
          {
            (data: Record<string, number> | undefined) => <GridByBar data={data} label={APP_MESSAGES.VICTIMIS_BY_AMOUNT_AGRESSORS} isRight mapper={AMOUNT_MAPPER} />
          }
        </Await>
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

export default VictimsScreen
