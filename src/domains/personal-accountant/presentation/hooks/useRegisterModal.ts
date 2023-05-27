import { useState } from 'react'
import { ParamsModal, initialModalState } from '@/domains/personal-accountant/presentation/context/ModalRegisterContext'
import { ACTIONS_REGISTER_MODALS } from '@/domains/personal-accountant/presentation/conts/actionsRegisterModal.const'

const useRegisterModal = () => {
    const [modalState, setModalState] = useState(initialModalState)
    const changeActionsModal = (action: ACTIONS_REGISTER_MODALS, params: ParamsModal = false) =>
        setModalState({
            open: !modalState.open,
            actions: {
                ...initialModalState.actions,
                [action]: !modalState.actions[action]
            },
            params,
        })

    const handleRegisterModal = () => changeActionsModal(ACTIONS_REGISTER_MODALS.register)
    const handleEditerModal = (params:ParamsModal) => changeActionsModal(ACTIONS_REGISTER_MODALS.editer, params)
    const closeModal = () => setModalState(initialModalState)

    return {
        modalState,
        changeActionsModal,
        handleRegisterModal,
        handleEditerModal,
        closeModal
    }
}

export default useRegisterModal