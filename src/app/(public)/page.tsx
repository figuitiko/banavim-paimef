import InfoBox from '@/components/share/common/InfoBox'
import Image from 'next/image'
import Login from '@/components/share/common/Login'

export default function Home () {
  return (
    <>
      <section id='home-hero' className='p-5'>
        <div className='flex px-8 justify-center items-center gap-2'>
          <h1 className='grow-[2]  text-[48px] font-extrabold  leading-[60px] -tracking-[-1.2px]'>
            Programa de Apoyo a las Instancias de Mujeres en las Entidades Federativas (PAIMEF).
          </h1>
          <picture className='min-w-[400px]'>
            <Image src='/images/banner-image.png' width={512} height={318} alt='hero' className='object-cover' />
          </picture>
        </div>
      </section>
      <section className='mt-6 items-center py-12 px-8'>
        <h3 className='hightlight-heading'>
          Datos a Destacar
        </h3>
        <h2 className='sub-heading'>
          Lorem ipsum
        </h2>
        <p className='my-6 text-center'>
          Nuestro programa tiene como objetivo principal el análisis y aprovechamiento de la información capturada en el Banco Nacional de Datos e Información sobre Casos de Violencia contra las Mujeres (BANAVIM). A través de esta plataforma, proporcionamos herramientas para el diseño y evaluación de políticas públicas que aborden la violencia contra las mujeres en una localidad específica, siempre con una perspectiva de género y derechos humanos.
        </p>
        <div>
          <InfoBox />
        </div>
        <div>
          <Login />
        </div>
      </section>
      <section className='h-[600px]'>

      </section>
    </>
  )
}
