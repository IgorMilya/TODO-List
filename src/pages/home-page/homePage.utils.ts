import { Timestamp } from 'firebase/firestore'
import { TodoFormType, TodoType } from 'types'

export const preparedData =(uid: string, value: TodoFormType): TodoType => {
  const timestamp = Timestamp.now()
  const timestampObject = { seconds: timestamp.seconds }

  return  {
    uid: uid,
    completed: false,
    createdAt: timestampObject,
    ...value,
  }
}