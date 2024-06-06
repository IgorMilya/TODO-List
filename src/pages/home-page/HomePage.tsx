import { FC, useState } from 'react'
import { useAddTodoMutation, useGetTodosQuery } from 'store/api'
import { HomeSidebar, TodoCard } from 'components'
import { Button, Loader } from 'UI'
import { useIsModal, useUserReducerHook } from 'hooks'
import { Icon } from 'assets'
import { TodoFormType, TodoListResponseType } from 'types'
import { HomePageTitle } from './home-page-title'
import { HomePageModal } from './home-page-modal'
import { preparedData } from 'pages/home-page/homePage.utils'

const HomePage: FC = () => {
  const { userState } = useUserReducerHook()
  const { isOpen, handleToggleIsOpenModal } = useIsModal()
  const [isOpenSidebar, setIsOpenSidebar] = useState(false)
  const { data, isLoading } = useGetTodosQuery(userState.uid)
  const [createTask] = useAddTodoMutation()
  const [task, setTask] = useState<TodoListResponseType>()


  const handleSubmit = (value: TodoFormType): void => {
    const data = preparedData(userState.uid, value)
    createTask(data)
    handleToggleIsOpenModal()
  }

  const handleOpenSidebar = (todo: TodoListResponseType) => {
    setTask(todo)
    setIsOpenSidebar(true)
  }

  const handleCloseSidebar = () => setIsOpenSidebar(false)


  if (isLoading) {
    return <Loader />
  }


  return (
    <div className="w-full h-screen bg-background">
      <div className="max-w-screen-xl mx-auto p-5 flex h-full">
        <div className="w-full mx-5">
          <HomePageTitle length={data?.length} />

          <div className="drop-shadow-md hover:bg-gray-50 border-2 rounded-md">
            <Button variant="outline" startIcon={Icon.Plus} onClick={handleToggleIsOpenModal}> Add New Task</Button>
          </div>
          <ul className="mt-8 max-h-[450px] overflow-x-auto">
            {data?.map(todo =>
              <TodoCard
                todo={todo}
                key={todo.id}
                openSidebar={handleOpenSidebar} />)}
          </ul>
        </div>

        <HomeSidebar isOpen={isOpenSidebar} onClose={handleCloseSidebar} task={task} />
      </div>

      <HomePageModal
        title="Create Task"
        isOpen={isOpen}
        onClose={handleToggleIsOpenModal}
        onSubmit={handleSubmit}
        linkageToForm="create-todo"
        buttonText="Create" />

    </div>
  )
}

export default HomePage