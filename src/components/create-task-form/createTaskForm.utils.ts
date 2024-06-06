import { object, string } from 'yup'
import { TodoFormType } from 'types'

export const initialValues: TodoFormType = {
  title: '',
  description: '',
}

export const validationSchema = object().shape({
  title: string()
    .required('Title is required')
    .max(50, 'Title must not exceed 50 characters'),
  description: string()
    .max(200, 'Description must not exceed 200 characters'),
})