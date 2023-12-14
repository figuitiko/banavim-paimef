import { type AccordionComponentProps } from '@/types'
import { Accordion, AccordionContent, AccordionPanel, AccordionTitle } from 'flowbite-react'

export const AccordionComponent = ({ accordionItems }: AccordionComponentProps) => {
  return (
    <Accordion className='overflow-hidden rounded-none rounded-t-lg'>
      <>
      {
        accordionItems.map((item, index) => {
          return (
            <AccordionPanel key={index} >
              <AccordionTitle className='font-bold bg-slate-100 p-4'>{item.title}</AccordionTitle>
              <AccordionContent className='p-4'>
                <p className='mb-2 text-gray-500 dark:text-gray-400'>
                  {item.content}
                </p>
              </AccordionContent>
            </AccordionPanel>
          )
        })
      }
      </>
    </Accordion>
  )
}
