import { TodoCreatedAtType } from './todoCreatedAtType'

export type TodoListResponseType = {
  id: string,
  uid: string,
  title: string,
  description: string,
  completed: boolean,
  createdAt: TodoCreatedAtType
}