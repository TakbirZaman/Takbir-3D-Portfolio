import { CSSProperties, ReactNode } from 'react'
import { sharedStyles, colors } from '../../constants/styles'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'

interface ButtonProps {
  children: ReactNode
  variant?: ButtonVariant
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
  className?: string
  style?: CSSProperties
  title?: string
  ariaLabel?: string
}

export default function Button({
  children,
  variant = 'primary',
  onClick,
  disabled = false,
  type = 'button',
  className,
  style,
  title,
  ariaLabel,
}: ButtonProps) {
  const baseStyle: CSSProperties = {
    ...sharedStyles.buttonBase,
    opacity: disabled ? 0.6 : 1,
    pointerEvents: disabled ? 'none' : 'auto',
    position: 'relative',
    ...style,
  }

  const variantStyles: Record<ButtonVariant, CSSProperties> = {
    primary: {
      background: `linear-gradient(135deg, ${colors.accent}, ${colors.accentAlt})`,
      color: '#fff',
      boxShadow: `0 0 24px ${colors.accentGlow}`,
    },
    secondary: {
      background: colors.bgCard,
      color: colors.text,
      border: `1px solid ${colors.borderLight}`,
    },
    outline: {
      background: 'transparent',
      border: `1.5px solid ${colors.accent}`,
      color: colors.accent,
    },
    ghost: {
      background: 'transparent',
      color: colors.textMuted,
    },
  }

  const hoverStyles: Record<ButtonVariant, CSSProperties> = {
    primary: {
      transform: 'translateY(-2px)',
      boxShadow: `0 0 40px ${colors.accentGlow}`,
    },
    secondary: {
      borderColor: colors.accent,
      background: `rgba(124, 58, 237, 0.1)`,
    },
    outline: {
      background: `rgba(124, 58, 237, 0.1)`,
      borderColor: colors.accentAlt,
      color: colors.accentAlt,
    },
    ghost: {
      color: colors.accent,
    },
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    Object.assign(e.currentTarget.style, hoverStyles[variant])
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = ''
    e.currentTarget.style.boxShadow = variantStyles[variant].boxShadow || ''
    e.currentTarget.style.borderColor = ''
    e.currentTarget.style.background = variantStyles[variant].background as string
    e.currentTarget.style.color = variantStyles[variant].color as string
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={className}
      style={{ ...baseStyle, ...variantStyles[variant] }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = `${variantStyles[variant].boxShadow}, 0 0 0 3px ${colors.accentGlow}`
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = variantStyles[variant].boxShadow || ''
      }}
      title={title}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}
