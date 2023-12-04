import IconWrapper from '@/components/ui/IconWrapper'
import { Icons } from '@/components/ui/icons'
import { type IconsBoxProps } from '@/types'
import { COLORS } from '@/constants'

export const IconsMapper = {
  mail: (color = COLORS.main) => <Icons.Mail fill={color} />,
  world: (color = COLORS.main) => <Icons.World fill={color}/>,
  arrowUp: (color = COLORS.main) => <Icons.ArrowUp fill={color}/>,
  arrowDown: (color = COLORS.main) => <Icons.ArrowDown fill={color} />,
  user: (color = COLORS.main) => <Icons.User fill={color} />,
  lightBolt: (color = COLORS.main) => <Icons.LightBolt fill={color} />,
  comment: (color = COLORS.main) => <Icons.Comment fill={color} />,
  scale: (color = COLORS.main) => <Icons.Scale fill={color} />
}

const InfoBox = ({ iconName }: IconsBoxProps) => {
  return (
      <IconWrapper>
        {
        IconsMapper[iconName]()
        }
      </IconWrapper>
  )
}

export default InfoBox
