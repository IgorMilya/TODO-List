import { useState } from 'react'

export const useIsModal = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggleIsOpenModal = () => {
    setTimeout(() => setIsOpen((prevState) => !prevState))
  }

  return { isOpen, handleToggleIsOpenModal }
}
