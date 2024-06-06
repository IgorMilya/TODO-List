import React, { FC } from 'react'
import { useField } from 'formik'
import { ErrorMessage } from 'UI/error-message'

interface TextareaProps {
  name: string,
  placeholder?: string,
  disabled?: boolean,
}

const Textarea: FC<TextareaProps> = ({ name, disabled, placeholder }) => {
  const [field, meta] = useField(name)
  const validationError = meta.touched && meta.error
  const errorStyles = validationError ? 'border-error placeholder:text-error' : ''
  const disabledStyles = disabled && 'border-error'

  return (
    <label>
    <textarea
      placeholder={placeholder}
      className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500 ${errorStyles} ${disabledStyles}`}
      {...field}
      disabled={disabled}
    />
      <ErrorMessage meta={meta} />
    </label>
  )
}

export default Textarea