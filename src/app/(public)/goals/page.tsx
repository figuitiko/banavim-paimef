import Disclaimer from '@/components/share/common/Disclaimer'
import { APP_MESSAGES } from '@/constants'
import { type Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Banavim - Objetivos del programa'
}

const goals = () => {
  return (
   <>
    <section className='p-0 md:p-12 overflow-x-scroll snap-x items-center mr-[-40px]'>
      <h2 className='sub-heading'>{APP_MESSAGES.GOALS_TITLE}</h2>
      <p>
        {APP_MESSAGES.GOALS_CONTENT_INTRO}
      </p>
      <p>
        {APP_MESSAGES.GOALS_CONTENT_P1}
      </p>
      <p>
        {APP_MESSAGES.GOALS_CONTENT_P2}
      </p>
      <p>
        {APP_MESSAGES.GOALS_CONTENT_P3}
      </p>
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

export default goals
