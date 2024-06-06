import { FC } from 'react'
import { CreateTaskForm } from 'components'
import { Modal } from 'UI'
import { TodoFormType } from 'types'

interface HomePageModalProps {
  isOpen: boolean
  title: string
  buttonText: string
  linkageToForm: string
  onClose: () => void
  onSubmit: (value: TodoFormType) => void
}

const HomePageModal: FC<HomePageModalProps> = ({
                                                 isOpen,
                                                 title,
                                                 buttonText,
                                                 linkageToForm,
                                                 onClose,
                                                 onSubmit,
                                               },
) => {

  return (
    <Modal
      title={title}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={buttonText}
      linkageToForm={linkageToForm}>
      <CreateTaskForm linkageToForm={linkageToForm} onSubmit={onSubmit} />
    </Modal>
  )
}

export default HomePageModal