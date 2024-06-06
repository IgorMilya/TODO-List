import { FC, PropsWithChildren, SyntheticEvent } from 'react'
import { Icon } from 'assets'
import { Button } from 'UI'

interface ModalProps extends PropsWithChildren {
  isOpen: boolean
  title: string
  buttonText: string
  linkageToForm?: string
  onClose: () => void
}

const Modal: FC<ModalProps> = ({
                                 isOpen,
                                 title,
                                 buttonText,
                                 linkageToForm,
                                 onClose,
                                 children,
                               }) => {
  const handleClose = (e: SyntheticEvent) => {
    e.stopPropagation()
    onClose()
  }
  return (
    <>
      {isOpen &&
        <div className="">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleClose} />
          <div className="min-w-[500px] bg-white rounded-lg absolute w-444 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 p-[30px]">
            <div className="flex justify-between items-center mb-[40px]">
              <h1 className="text-2xl font-bold">{title}</h1>
              <img className="cursor-pointer" onClick={handleClose} src={Icon.Cross} alt="Cross" />
            </div>
            <div className="max-h-[450px] overflow-x-auto mb-[30px]">
            {children}
            </div>
            <Button variant="secondary" linkageToForm={linkageToForm} type="submit">{buttonText}</Button>
          </div>
        </div>
      }
    </>
  )
}

export default Modal