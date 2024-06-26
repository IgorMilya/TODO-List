import { FC, PropsWithChildren, MouseEvent } from 'react'

interface ButtonProps extends PropsWithChildren {
  variant: 'primary' | 'secondary' | 'outline',
  disabled?: boolean,
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void,
  type?: 'submit' | 'button',
  startIcon?: string,
  endIcon?: string,
  linkageToForm?: string
}

const styleOfVariant = {
  primary: 'justify-center bg-primary hover:bg-gray-200 focus:ring-2 focus:ring-gray-300',
  secondary: `justify-center bg-secondary hover:bg-yellow-400 focus:ring-2 focus:ring-yellow-500`,
  outline: 'justify-start font-medium',
}


const Button: FC<ButtonProps> = ({
                                   variant,
                                   children,
                                   startIcon,
                                   endIcon,
                                   onClick,
                                   disabled,
                                   type,
                                   linkageToForm,
                                 }) => {

  const colorClasses = styleOfVariant[variant]
  return (
    <button
      form={linkageToForm}
      className={`flex gap-4 items-center w-full p-2.5 text-black font-bold rounded-md focus:outline-none  ${colorClasses} relative`}
      onClick={onClick} disabled={disabled} type={type || 'button'}
    >
      {startIcon && <img src={startIcon} alt="icon" className="w-8" />}
      {children}
      {endIcon && <img src={endIcon} alt="icon" className="w-8" />}
    </button>
  )
}

export default Button