import { useState } from "react"
import { initialContext } from "../context/ModalContext"
import { ACTIONS_MODALS } from "../const/actionsModal.cons"

function useModal() {
    const [modalState, setModalState] = useState(initialContext)
    const changeActionsModal = (action, params = false) =>
        setModalState({
            open: !modalState.open,
            payload: {
                actions: {
                    ...initialContext.payload.actions,
                    [action]: !modalState.payload.actions[action]
                }
            },
            params
        })

    const handleRegisterModal = () => changeActionsModal(ACTIONS_MODALS.register)
    const handleEditerModal = (params) => changeActionsModal(ACTIONS_MODALS.editer, params)
    const closeModal = () => setModalState(initialContext)

    return {
        modalState,
        changeActionsModal,
        handleRegisterModal,
        handleEditerModal,
        closeModal
    }
}

export default useModal