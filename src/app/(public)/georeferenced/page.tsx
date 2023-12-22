import TooltipLocator from '@/components/geo/TooltipLocator'
import Disclaimer from '@/components/share/common/Disclaimer'
import { APP_MESSAGES, COOR_MAPS } from '@/constants'
import { getVictimsByMunicipality } from '@/lib/fetchers/victims'
import Image from 'next/image'
const Georeferenced = async () => {
  const casesByMun = await getVictimsByMunicipality()
  return (
    <>
    <section className='p-0 md:p-12 overflow-x-scroll snap-x items-center mr-[-40px]'>
      <picture className='flex w-full justify-center relative min-w-[750px] max-w-[1200px] px-10 h-full scale-75 md:scale-100'>
        {
          Object.keys(casesByMun as Record<string, number>).map((mun, index) => {
            return (
              <TooltipLocator
                key={index}
                tooltipContent={`Número de casos de ${mun}: ${casesByMun?.[mun]}`}
                left={COOR_MAPS[index][0]}
                top={COOR_MAPS[index][1]}
                delay={Number(`0.${index}`)} />
            )
          })
        }
        {/* <TooltipLocator tooltipContent='Tooltip content' left={'18%'} top={'44%'} /> */}
      <Image src='/images/map.png' alt='Georeferenced' width={740} height={740} className='w-full h-full object-contain md:object-cover snap-center' />
      </picture>
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

export default Georeferenced
