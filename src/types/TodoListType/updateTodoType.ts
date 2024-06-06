import { TodoListResponseType } from 'types'

export type UpdateTodoType = Omit<TodoListResponseType, 'uid' | 'completed'>