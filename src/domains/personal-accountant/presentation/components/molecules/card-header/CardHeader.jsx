import React from 'react'
import * as icon from '@coreui/icons'
import IconCustom from '../../atoms/iconcustom/IconCustom'
import './cardHeader.css'

function CardHeader({ handleOpenModal }) {

    return (
        <div className='card__header'>
            <IconCustom
                btnClass="btn-icon"
                ciconOnclick={handleOpenModal}
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