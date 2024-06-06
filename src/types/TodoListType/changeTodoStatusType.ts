import { TodoListResponseType } from 'types'

export type ChangeTodoStatusType = Pick<TodoListResponseType, 'id' | 'completed'>;