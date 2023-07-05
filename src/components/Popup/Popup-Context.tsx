import React from "react"

interface PopupContextType {
  closeModal: () => void
  openModal: () => void
  isModalOpen: boolean
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const initialValues = {
  closeModal: () => {},
  openModal: () => {},
  isModalOpen: false,
  setIsModalOpen: () => {},
}
interface PopupProps {
  children: any
}

export const PopupContext = React.createContext<PopupContextType>(initialValues)

export const PopupContextProvider: React.FC<PopupProps> = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false)
  const openModal = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    //Scrolling problem
    document.body.classList.remove("ReactModal__Body--open")
    setIsModalOpen(false)
  }
  return (
    <PopupContext.Provider
      value={{ openModal, closeModal, isModalOpen, setIsModalOpen }}
    >
      {children}
    </PopupContext.Provider>
  )
}
