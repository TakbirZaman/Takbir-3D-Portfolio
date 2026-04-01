import { CSSProperties } from 'react'
import { colors } from '../../constants/styles'

interface BadgeProps {
  label: string
  color?: 'accent' | 'accentAlt' | 'success' | 'custom'
  customColor?: string
  size?: 'sm' | 'md'
  style?: CSSProperties
}

export default function Badge({ label, color = 'accentAlt', customColor, size = 'md', style }: BadgeProps) {
  const colorMap = {
    accent: colors.accent,
    accentAlt: colors.accentAlt,
    success: colors.success,
    custom: customColor || colors.accent,
  }

  const selectedColor = colorMap[color]

  const badgeStyle: CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: `${selectedColor}15`,
    border: `1px solid ${selectedColor}40`,
    borderRadius: '99px',
    padding: size === 'sm' ? `4px 12px` : `8px 16px`,
    fontSize: size === 'sm' ? '12px' : '13px',
    fontWeight: 600,
    color: selectedColor,
    fontFamily: 'var(--font-main)',
    letterSpacing: '0.02em',
    whiteSpace: 'nowrap',
    ...style,
  }

  return <span style={badgeStyle}>{label}</span>
}
