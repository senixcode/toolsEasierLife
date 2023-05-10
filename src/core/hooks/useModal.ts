import { useState } from 'react'
import { ParamsModal, initialModalState } from 'core/context/ModalContext'
import { ACTIONS_MODALS } from 'core/const/actionsModal.const'

const useModal = () => {
    const [modalState, setModalState] = useState(initialModalState)
    const changeActionsModal = (action: ACTIONS_MODALS, params: ParamsModal = false) =>
        setModalState({
            open: !modalState.open,
            actions: {
                ...initialModalState.actions,
                [action]: !modalState.actions[action]
            },
            params,
        })

    const handleRegisterModal = () => changeActionsModal(ACTIONS_MODALS.register)
    const handleEditerModal = (params:ParamsModal) => changeActionsModal(ACTIONS_MODALS.editer, params)
    const closeModal = () => setModalState(initialModalState)

    return {
        modalState,
        changeActionsModal,
        handleRegisterModal,
        handleEditerModal,
        closeModal
    }
}

export default useModal