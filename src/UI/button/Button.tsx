import { FC, PropsWithChildren, MouseEvent, ReactElement, ReactNode } from 'react'

interface ButtonProps extends PropsWithChildren {
  color: 'primary' | 'secondary',
  disabled?: boolean,
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
  type?: 'submit' | 'button',
  startIcon?: string,
  endIcon?: string
}

const styleOfVariant = {
  primary: 'bg-primary hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500',
  secondary: 'bg-secondary',
}


const Button: FC<ButtonProps> = ({
color,
children,
startIcon,
endIcon,
onClick,
disabled,
type,
}) => {

  const colorClasses = styleOfVariant[color]
  return (
    <button className={`flex justify-center gap-4 items-center w-full py-2 text-black font-bold rounded-md focus:outline-none  ${colorClasses} relative`}
            onClick={onClick} disabled={disabled} type={type || 'button'}>
      {startIcon && <img src={startIcon} alt="icon" className="w-[30px]" />}
      {children}
      {endIcon && <img src={endIcon} alt="icon" className="w-[30px]" />}
    </button>
  )
}

export default Button