// Shared style constants for consistent, maintainable styling across portfolio

export const spacing = {
  xs: '4px',
  sm: '8px',
  md: '16px',
  lg: '24px',
  xl: '32px',
  '2xl': '48px',
  '3xl': '64px',
} as const

export const colors = {
  bg: '#05010f',
  bgCard: '#0d0920',
  bgGlass: 'rgba(13, 9, 32, 0.6)',
  accent: '#7c3aed',
  accentAlt: '#06b6d4',
  accentGlow: 'rgba(124, 58, 237, 0.35)',
  text: '#f1f0f5',
  textMuted: '#8b8499',
  border: 'rgba(255,255,255,0.08)',
  borderLight: 'rgba(255,255,255,0.15)',
  success: '#22c55e',
  warning: '#facc15',
  error: '#ef4444',
} as const

export const transitions = {
  fast: '0.15s cubic-bezier(0.4, 0, 0.2, 1)',
  base: '0.2s cubic-bezier(0.4, 0, 0.2, 1)',
  smooth: '0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  slowSmooth: '0.5s cubic-bezier(0.4, 0, 0.2, 1)',
} as const

export const shadows = {
  sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
  base: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
  glow: `0 0 20px ${colors.accentGlow}`,
  glowAlt: `0 0 20px rgba(6, 182, 212, 0.2)`,
} as const

export const sharedStyles = {
  glassCard: {
    background: colors.bgGlass,
    backdropFilter: 'blur(16px)',
    border: `1px solid ${colors.border}`,
    borderRadius: '16px',
  },
  glassCardHover: {
    borderColor: colors.borderLight,
    boxShadow: shadows.glow,
  },
  buttonBase: {
    fontFamily: 'var(--font-main)',
    fontWeight: 600,
    fontSize: '14px',
    padding: `10px 24px`,
    borderRadius: '99px',
    border: 'none',
    cursor: 'pointer',
    transition: `all ${transitions.base}`,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.sm,
  },
  focusRing: {
    outline: `2px solid ${colors.accent}`,
    outlineOffset: '2px',
  },
} as const

export const mediaQueries = {
  mobile: '@media (max-width: 640px)',
  tablet: '@media (max-width: 1024px)',
  desktop: '@media (min-width: 1025px)',
} as const
