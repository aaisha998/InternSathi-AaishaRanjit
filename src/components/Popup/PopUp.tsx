import React, { useContext } from "react"
import Modal from "react-modal"

// import { DocumentContext } from "../BillPage/Document-Context"
import { PopupContext } from "./Popup-Context"
import "./PopUp.scss"

export interface PopUpProps {
  title?: string
  popupWidth?: string | number
  popupHeight?: string | number
  popupType?: "full" | "cover"
  content?: string
  renderComponent?: JSX.Element | string
  showHeader?: boolean
  showCrossIcon?: boolean
  closeOnClickOutside?: boolean
  createBill?: string
}
export const PopUp: React.FC<PopUpProps> = ({
  title = "",
  content,
  popupWidth,
  popupHeight,
  renderComponent,
  showHeader = true,
  popupType = "",
  showCrossIcon = true,
  closeOnClickOutside = true,
  createBill = "",
}) => {
  const { isModalOpen, closeModal, setIsModalOpen } = useContext(PopupContext)
  return (
    <Modal
      isOpen={isModalOpen}
      ariaHideApp={false}
      onRequestClose={closeOnClickOutside ? closeModal : undefined}
      style={{
        content: {
          width: popupWidth,
          zIndex:50,
        },
      }}
      contentLabel="Example Modal"
    >
      <div
        className={`custom-card popup-board ${
          popupType === "full" && "full-width"
        }`}
      >
        <div className={`${showHeader && "popup-page"}`}>
          {showHeader && (
            <div className="d-space-between title-bar side-spacing">
              <h4 className="small-title">{title}</h4>
              {showCrossIcon && (
                <div
                  onClick={(e) => {
                    closeModal()
                  }}
                  className="cancel-icon"
                >
                  <img
                    src={require("../../assets/images/cross.png")}
                    alt="cancel"
                  />
                </div>
              )}
            </div>
          )}
          {renderComponent}
        </div>
      </div>
    </Modal>
  )
}
