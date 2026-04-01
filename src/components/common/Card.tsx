import { CSSProperties, ReactNode } from 'react'
import { sharedStyles, colors, transitions } from '../../constants/styles'

interface CardProps {
  children: ReactNode
  hoverable?: boolean
  className?: string
  style?: CSSProperties
}

export default function Card({ children, hoverable = true, className, style }: CardProps) {
  const cardStyle: CSSProperties = {
    ...sharedStyles.glassCard,
    transition: `all ${transitions.smooth}`,
    cursor: hoverable ? 'pointer' : 'default',
    ...style,
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverable) {
      e.currentTarget.style.transform = 'translateY(-4px)'
      e.currentTarget.style.borderColor = colors.borderLight
      e.currentTarget.style.boxShadow = sharedStyles.glassCardHover.boxShadow as string
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (hoverable) {
      e.currentTarget.style.transform = ''
      e.currentTarget.style.borderColor = colors.border
      e.currentTarget.style.boxShadow = ''
    }
  }

  return (
    <div
      className={className}
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}
