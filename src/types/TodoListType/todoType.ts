import { TodoListResponseType } from 'types'

export type TodoType = Omit<TodoListResponseType, 'id'>