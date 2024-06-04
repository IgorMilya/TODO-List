import React, { FC, useState } from 'react'
import { useField } from 'formik'
import { ErrorMessage } from 'UI'
import { Icon } from 'assets'

interface InputProps {
  name: string,
  labelText?: string,
  type?: 'text' | 'password' | 'email' | 'number',
  placeholder?: string,
  disabled?: boolean,
}

const Input: FC<InputProps> = ({ type, placeholder, name, labelText, disabled }) => {
  const [field, meta] = useField(name)
  const [showPassword, setShowPassword] = useState(false)

  const validationError = meta.touched && meta.error
  const errorStyles = validationError ? 'border-red-700 placeholder:text-red-700' : ''


  const toggleShowPassword = () => setShowPassword(!showPassword)


  return (
    <label>
      {labelText && <span>{labelText}</span>}
      <div className="relative">
        <input
          placeholder={placeholder}
          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errorStyles}`}
          type={showPassword ? 'text' : type || 'text'}
          {...field}
          disabled={disabled} />
        {type === 'password' && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3">
            <img src={showPassword ? Icon.HidePassword : Icon.ShowPassword} onClick={toggleShowPassword} alt="Icon"
                 className="cursor-pointer" />
          </div>
        )}
      </div>
      <ErrorMessage meta={meta} />
    </label>
  )
}

export default Input
