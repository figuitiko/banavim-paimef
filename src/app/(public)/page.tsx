import Image from 'next/image'
import { getViolenceCasesByModality, getViolenceCasesByViolenceType } from '@/lib/fetchers/cases'
import { Suspense } from 'react'
import Await from '@/components/share/common/Await'
import SectionIcons from '@/components/share/common/SectionIcons'
import { type TypeViolenceCaseType, type TypeSectionIconsData, type TypeViolenceCaseModality } from '@/types'
import ViolenceTypeWrapper from '@/components/home/ViolenceTypeWrapper'
import ViolenceModalityWrapper from '@/components/home/ViolenceModalityWrapper'
import Skeleton from '@/components/ui/Skeletons/Skeleton'
import { APP_MESSAGES } from '@/constants'
import { ButtonPrimary } from '@/components/ui/Buttons'
import { getGeneralData } from '@/lib/fetchers/general'

export default async function Home () {
  const dataPromise = getGeneralData()
  const dataPromiseViolenceType = getViolenceCasesByViolenceType()
  const dataPromiseViolenceModality = getViolenceCasesByModality()
  return (
    <>
      <section id='home-hero' className='p-2 md:p-5'>
        <div className='flex md:flex-row flex-col px-0 md:px-8 justify-center items-center gap-2'>
          <h1 className='text-[36px] md:text-[48px] font-bold md:font-extrabold text-center md:text-left leading-[50px] md:leading-[60px] tracking-[-1.2px]'>
            {
              APP_MESSAGES.HEADING_HOME
            }
          </h1>
          <picture className='min-w-[200px]  md:min-w-[400px] w-full'>
            <Image src='/images/banner-image.png' width={512} height={318} alt='hero' className='object-cover' />
          </picture>
        </div>
      </section>
      <section className='mt-6 items-center py-12 px-8'>
        <h3 className='hightlight-heading'>
        {
          APP_MESSAGES.SUBHEADING_HOME_2
        }
        </h3>
        <h2 className='sub-heading'>
          {
            APP_MESSAGES.HIGHLIGHT_HEADING_HOME
          }
        </h2>
        <p className='my-6 text-center'>
         {
          APP_MESSAGES.SUBHEADING_HOME
         }
        </p>
        <Suspense fallback={<Skeleton height={208} width={1200} />}>
          <Await promise={dataPromise}>
            {
              (data: TypeSectionIconsData | undefined) => <SectionIcons data={data} />
            }
          </Await>
        </Suspense>
      </section>
      <section id='home-data'>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <Await promise={dataPromiseViolenceType}>
            {
              (data: TypeViolenceCaseType | undefined) => <ViolenceTypeWrapper data={data} />
            }
          </Await>
        </Suspense>
        <Suspense fallback={<Skeleton height={539} width={1200} />}>
          <Await promise={dataPromiseViolenceModality}>
            {
              (data: TypeViolenceCaseModality | undefined) => <ViolenceModalityWrapper data={data} />
            }
          </Await>
        </Suspense>
        <div className='flex w-full justify-center'>
        <ButtonPrimary text='ver más' className='bg-third' linkButtonFn='/indicators/cases?year=2020' />
      </div>
      </section>
    </>
  )
}
