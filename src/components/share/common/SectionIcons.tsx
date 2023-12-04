import { APP_MESSAGES, TextsSectionIcons } from '@/constants'
import { type ItemIconProps, type SectionIconsProps } from '@/types'
import React from 'react'
import InfoBox, { type IconsMapper } from './InfoBox'

const SectionIcons = ({ data }: SectionIconsProps) => {
  if (data === undefined) return <div>{APP_MESSAGES.DATA_NOT_FOUND} </div>
  return (
    <div className='flex flex-wrap flex-col md:flex-row'>
      {
      Object.keys(data).map((item: string, index: number) => {
        return (
            <ItemIcon
              key={index}
              itemVal={data[item]}
              text={TextsSectionIcons[item as keyof typeof TextsSectionIcons].text}
              iconName={TextsSectionIcons[item as keyof typeof TextsSectionIcons].icon as keyof typeof IconsMapper}/>
        )
      })
      }
    </div>
  )
}
const ItemIcon = ({ iconName, text, itemVal }: ItemIconProps) => {
  return (
    <div className='flex flex-[0_0_33%] gap-4 mt-4'>
      <InfoBox iconName={iconName} />
      <div className='flex flex-col justify-between'>
        <h3>{itemVal}</h3>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default SectionIcons
