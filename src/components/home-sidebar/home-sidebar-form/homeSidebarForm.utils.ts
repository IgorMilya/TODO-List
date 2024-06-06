import { object, string } from 'yup'
import { Timestamp } from 'firebase/firestore'
import { TodoFormType, UpdateTodoType } from 'types'

export const validationSchema = object().shape({
  title: string()
    .required('Title is required')
    .max(50, 'Title must not exceed 50 characters'),
  description: string()
    .max(200, 'Description must not exceed 200 characters'),
})

export const preparedUpdatedTodo = (id: string, value: TodoFormType): UpdateTodoType => {
  const timestamp = Timestamp.now()
  const timestampObject = { seconds: timestamp.seconds }

  return {
    id: id,
    title: value.title,
    description: value.description,
    createdAt: timestampObject,
  }
}