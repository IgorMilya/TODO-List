import { FC } from 'react'
import { TodoListResponseType } from 'types'
import { Icon } from 'assets'
import { HomeSidebarForm } from './home-sidebar-form'

interface HomeSidebarProps {
  isOpen: boolean
  onClose: () => void
  task: TodoListResponseType | undefined
}

const HomeSidebar: FC<HomeSidebarProps> = ({ isOpen, onClose, task }) => {

  return (
    <>
      {isOpen &&
        <div className="bg-primary rounded-2xl p-5 w-1/2">
          <div className="flex justify-between items-center mb-7">
            <h1 className="text-2xl font-bold">Task: </h1>
            <img className="cursor-pointer" onClick={onClose} src={Icon.Cross} alt="Cross" />
          </div>
          {!!task && < HomeSidebarForm task={task} onClose={onClose}/>}
        </div>
      }
    </>
  )
}

export default HomeSidebar