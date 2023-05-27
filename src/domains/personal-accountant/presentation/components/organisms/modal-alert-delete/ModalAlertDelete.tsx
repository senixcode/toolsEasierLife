import ModalTemplate from '@/shared/presentation/components/molecules/modal-template/ModalTemplate'
import modalAlertDeleteContext from 'domains/personal-accountant/presentation/context/ModalAlertDeleteContext'
import { useContext } from 'react'
import './modalAlertDelete.css'

const ModalAlertDelete = () => {
    const { isShow, handleChangeIsShow, handleDeleted} = useContext(modalAlertDeleteContext)
    return (
        <ModalTemplate modalState={isShow} closeModal={handleChangeIsShow}>
            <div className='flex-center-column'>
                <h3>¿Estas Seguro de Eliminar? </h3>
                <div>
                    <button className='btn' onClick={handleChangeIsShow}>No</button>
                    <button className='btn primary' onClick={handleDeleted}>Si</button>
                </div>
            </div>
        </ModalTemplate>
    )
}

export default ModalAlertDelete