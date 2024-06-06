import { FC } from 'react'
import { Form, Formik } from 'formik'
import { useDeleteTodoMutation, useGetOneUserQuery, useUpdateTodoMutation } from 'store/api'
import { Button, Input, Textarea } from 'UI'
import { TodoFormType, TodoListResponseType } from 'types'
import { preparedUpdatedTodo, validationSchema } from './homeSidebarForm.utils'

interface HomeSidebarFormProps {
  task: TodoListResponseType
  onClose: () => void
  isEdit?: boolean
}

const HomeSidebarForm: FC<HomeSidebarFormProps> = ({ task, onClose, isEdit }) => {
  const { data } = useGetOneUserQuery(task.uid)
  const [deleteTask] = useDeleteTodoMutation()
  const [update] = useUpdateTodoMutation()

  const handleSubmit = (value: TodoFormType) => {
    const data = preparedUpdatedTodo(task.id, value)
    update(data)
    onClose()
  }


  const initialValues: TodoFormType = {
    title: task?.title || '',
    description: task?.description || '',
  }

  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
  }

  const handleDeleteTask = () => {
    if (task?.id) deleteTask(task?.id)
    onClose()
  }

  return (
    <Formik {...formikConfig}>
      <Form className="flex flex-col justify-between h-[calc(100%_-_63px)]">
        <div className="grid gap-3">
          <Input name="title" placeholder="Title" disabled={!data?.[0]?.permission} />
          <Textarea name="description" placeholder="Description" disabled={!data?.[0]?.permission} />
          {!data?.[0]?.permission && <span className="text-error">You don't have a permission to edit</span>}
        </div>
        <div className="flex gap-4">
          <div className="drop-shadow-md w-full">
            <Button variant="primary" onClick={handleDeleteTask} disabled={!data?.[0]?.permission}>Delete task</Button>
          </div>
          <div className="w-full">
            <Button variant="secondary" type="submit" disabled={!data?.[0]?.permission}>Save Changes</Button>
          </div>
        </div>
      </Form>
    </Formik>
  )
}

export default HomeSidebarForm