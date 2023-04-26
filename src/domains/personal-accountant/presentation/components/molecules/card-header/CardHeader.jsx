import React, { useContext } from 'react'
import * as icon from '@coreui/icons'
import IconCustom from '../../atoms/iconcustom/IconCustom'
import './cardHeader.css'
import ModalContext from '../../../../../../core/context/ModalContext'

function CardHeader() {
    const { handleEditerModal } = useContext(ModalContext)
    return (
        <div className='card__header'>
            <IconCustom
                btnClass="btn-icon"
                ciconOnclick={handleEditerModal}
                icon={icon.cilPencil}
            />
            <IconCustom
                btnClass="btn-icon"
                ciconClass=""
                ciconOnclick=""
                icon={icon.cilCut}
            />
        </div>
    )
}

export default CardHeader