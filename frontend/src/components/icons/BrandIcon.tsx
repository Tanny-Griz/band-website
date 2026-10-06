export type BrandIconName = 'spotify' | 'appleMusic' | 'instagram' | 'youtube'

type BrandIconProps = {
  name: BrandIconName
}

export function BrandIcon({ name }: BrandIconProps) {
  if (name === 'spotify') {
    return (
      <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
        <path
          d="M7.5 9.2c3.5-1 6.5-.8 9.2.7"
          fill="none"
          stroke="var(--color-black)"
          strokeLinecap="round"
          strokeWidth="1.7"
        />
        <path
          d="M8.1 12c2.8-.7 5.2-.5 7.5.7"
          fill="none"
          stroke="var(--color-black)"
          strokeLinecap="round"
          strokeWidth="1.55"
        />
        <path
          d="M8.7 14.6c2-.5 3.8-.3 5.7.6"
          fill="none"
          stroke="var(--color-black)"
          strokeLinecap="round"
          strokeWidth="1.45"
        />
      </svg>
    )
  }

  if (name === 'appleMusic') {
    return (
      <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path
          d="M9.2 17.4c0 1.2-1.1 2.2-2.6 2.2S4 18.8 4 17.6s1.1-2.2 2.6-2.2c.7 0 1.3.2 1.8.5V6.2l10.6-2v9.6c0 1.2-1.1 2.2-2.6 2.2s-2.6-.8-2.6-2 1.1-2.2 2.6-2.2c.7 0 1.3.2 1.8.5V7.4l-9 1.7v8.3Z"
          fill="currentColor"
        />
      </svg>
    )
  }

  if (name === 'instagram') {
    return (
      <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <rect
          x="5"
          y="5"
          width="14"
          height="14"
          rx="4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        <circle cx="12" cy="12" r="3.2" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="16.5" cy="7.5" r="0.9" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg className="brand-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      <rect x="4" y="6.5" width="16" height="11" rx="3" fill="currentColor" />
      <path d="m10.5 9.5 5 2.5-5 2.5v-5Z" fill="var(--color-black)" />
    </svg>
  )
}
