import type { ButtonHTMLAttributes, ReactNode } from 'react'
import './Button.css'

type ButtonVariant = 'primary' | 'outline' | 'media' | 'ticket'

type ButtonProps = {
  children: ReactNode
  className?: string
  href?: string
  icon?: ReactNode
  showArrow?: boolean
  variant?: ButtonVariant
} & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  className = '',
  href,
  icon,
  showArrow = false,
  type = 'button',
  variant = 'primary',
  ...buttonProps
}: ButtonProps) {
  const buttonClassName = ['ui-button', `ui-button--${variant}`, className]
    .filter(Boolean)
    .join(' ')

  const buttonContent = (
    <>
      {icon && (
        <span className="ui-button__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="ui-button__label">{children}</span>
      {showArrow && <span className="ui-button__arrow" aria-hidden="true" />}
    </>
  )

  if (href) {
    return (
      <a className={buttonClassName} href={href}>
        {buttonContent}
      </a>
    )
  }

  return (
    <button className={buttonClassName} type={type} {...buttonProps}>
      {buttonContent}
    </button>
  )
}
