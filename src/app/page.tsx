import { ButtonPrimary } from '@/components/ui/Buttons'
import Icon from '@/components/ui/Icon'
import { Icons } from '@/components/ui/icons'

export default function Home () {
  return (
    <>
    <section className='flex justify-center w-full flex-col'>
      <h3>hello</h3>
      <ButtonPrimary text='sample' />
      <Icon>
        <Icons.Mail />
      </Icon>
    </section>
    </>
  )
}
