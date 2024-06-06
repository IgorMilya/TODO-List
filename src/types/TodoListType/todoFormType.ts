import { TodoListResponseType } from 'types/TodoListType/todoListResponseType'

export type TodoFormType = Pick<TodoListResponseType, 'title' | 'description'>;