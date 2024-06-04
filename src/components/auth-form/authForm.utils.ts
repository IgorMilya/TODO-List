import { LoginFormType } from 'types'
import { object, string } from 'yup'
import { REGEX } from 'utils'

export const initialValues: LoginFormType = {
  email: '',
  password: '',
}

export const validationSchema = object().shape({
  email: string()
    .email('Invalid email format')
    .matches(REGEX.EMAIL, 'Email must be a valid email address',)
    .required('Required email address'),
  password: string()
    .min(8, 'Password must be at least 8 characters long')
    .max(20, 'Password must not exceed 20 characters')
    .matches(REGEX.ONE_LOWERCASE, 'Password must contain at least one lowercase letter')
    .matches(REGEX.ONE_UPPERCASE, 'Password must contain at least one uppercase letter')
    .matches(REGEX.ONE_NUMBER, 'Password must contain at least one number')
    .matches(REGEX.NO_SPACES, 'Password must not contain spaces')
    .required('Password is required'),
})