import React from 'react'

const getTypeDetail = (value) => {
    if(value === 1) return "Income"
    if(value === 2) return "Egress"
    return ""
  }

function CardDetail({detail}) {
    return (
        <div className='cards__item'>
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