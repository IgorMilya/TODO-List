import { FC } from 'react'
import { useChangeTodoStatusMutation } from 'store/api'
import { Checkbox } from 'UI'
import { TodoListResponseType } from 'types'
import { Icon } from 'assets'

interface TodoCardProps {
  todo: TodoListResponseType,
  openSidebar: (todo: TodoListResponseType) => void,
}

const TodoCard: FC<TodoCardProps> = ({ todo, openSidebar }) => {
  const [change] = useChangeTodoStatusMutation()
  const { completed, id, title } = todo
  const handleChangeStatusOfTodo = () => change({ id, completed })

  const handleOpenSidebar = () => openSidebar(todo)

  return (
    <li className="flex items-center justify-between p-4 mb-2 bg-white shadow-sm rounded-lg">
      <div className="flex items-center">
        <Checkbox completed={completed} onChange={handleChangeStatusOfTodo} />
        <span className={`ml-5 ${completed && 'line-through text-gray-500'}`}>{title}</span>
      </div>
      <img className="cursor-pointer" onClick={handleOpenSidebar} src={Icon.TodoCardArrow} alt="Arrow" />
    </li>
  )
}

export default TodoCard