import { FC } from 'react'
import Modal from 'react-modal'
import ModalContext from '@/domains/personal-accountant/presentation/context/ModalRegisterContext'
import useRegisterModal from '@/domains/personal-accountant/presentation/hooks/useRegisterModal'



type Props = {
    children?: React.ReactNode
}

const ModalRegisterProvider:FC<Props> = ({ children }) => {
    const params = useRegisterModal()
    return (
        <ModalContext.Provider value={params}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalRegisterProvider