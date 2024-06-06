import { FC } from 'react'
import { Form, Formik, FormikHelpers } from 'formik'
import { Input, Textarea } from 'UI'
import { TodoFormType } from 'types'
import { initialValues, validationSchema } from './createTaskForm.utils'

interface CreateTaskFormProps {
  linkageToForm: string
  onSubmit: (value: TodoFormType) => void
}

const CreateTaskForm: FC<CreateTaskFormProps> = ({ linkageToForm, onSubmit }) => {

  const handleSubmit = (value: TodoFormType, actions: FormikHelpers<TodoFormType>) => {
    onSubmit(value)
    actions.resetForm()
  }

  const formikConfig = {
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  }

  return (
    <Formik {...formikConfig}>
      <Form id={linkageToForm} className="flex flex-col gap-4">
        <Input name="title" placeholder="Title" />
        <Textarea name="description" placeholder="Description"/>
      </Form>
    </Formik>
  )
}

export default CreateTaskForm