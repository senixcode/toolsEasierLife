import React from 'react'
import Modal from 'react-modal'
import ModalContext from '../context/ModalContext'
import useModal from '../hooks/useModal'

Modal.setAppElement("#root")

function ModalProvider({ children }) {
    const params = useModal()
    return (
        <ModalContext.Provider value={params}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider