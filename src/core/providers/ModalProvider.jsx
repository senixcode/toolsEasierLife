import React from 'react'
import ModalContext, { initialContext } from '../context/ModalContext'
import { useState } from 'react'
import { ACTIONS_MODALS } from '../const/actionsModal.cons'

function ModalProvider({ children }) {
    const [modalState, setModalState] = useState(initialContext)
    const changeActionsModal = (action) =>
        setModalState({
            open: !modalState.open,
            payload: {
                actions: {
                    ...initialContext.payload.actions,
                    [action]: !modalState.payload.actions[action]
                }
            }
        })


    const handleRegisterModal = () => changeActionsModal(ACTIONS_MODALS.register)
    const handleEditerModal = () => changeActionsModal(ACTIONS_MODALS.editer)


    const closeModal = () => setModalState(initialContext)

    return (
        <ModalContext.Provider value={{
            modalState,
            changeActionsModal,
            handleRegisterModal,
            handleEditerModal,
            closeModal
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider