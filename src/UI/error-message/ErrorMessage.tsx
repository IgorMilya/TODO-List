import { FC } from 'react'
import { FieldMetaProps } from 'formik/dist/types'

interface ErrorMessageProps {
  meta: FieldMetaProps<any>
}

const ErrorMessage: FC<ErrorMessageProps> = ({meta}) => {

  return (
    <>
      {meta.touched && meta.error ? (
        <p className="text-red-700 ">{meta.error}</p>
      ) : null}
    </>
  )
}

export default ErrorMessage