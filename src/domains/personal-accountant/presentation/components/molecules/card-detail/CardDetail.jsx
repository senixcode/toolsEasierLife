import React from 'react'
import CardHeader from '../card-header/CardHeader'
import { getTypeDetail } from '../../../utils/getTypeDetail'

function CardDetail({detail, handleOpenModal}) {
    return (
        <div className='cards__item'>
           <CardHeader handleOpenModal={handleOpenModal}/>
            <div>
                <h3 className='cards__item-title'>{detail.name}
                    <small>{getTypeDetail(detail.detailTypeId)}</small>
                </h3>
            </div>
            <p>{detail.description}</p>
        </div>
    )
}

export default CardDetail