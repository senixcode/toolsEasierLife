import React, { useContext } from 'react'
import CardHeader from '../card-header/CardHeader'
import { getTypeDetail } from '../../../utils/getTypeDetail'
import Detail from '../../../../infrastructure/models/Details';


function CardDetail({detail}) {

    return (
        <div className='cards__item'>
           <CardHeader id={detail[Detail.id]} />
            <div>
                <h3 className='cards__item-title'>{detail[Detail.name]}
                    <small>{getTypeDetail(detail[Detail.detailType])}</small>
                </h3>
            </div>
            <p>{detail.description}</p>
        </div>
    )
}

export default CardDetail