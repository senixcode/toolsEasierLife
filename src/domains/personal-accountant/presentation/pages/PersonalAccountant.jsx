import React, { useState } from 'react'
import Search from '../components/organisms/search/Search';
import TemplateSaveDetail from '../components/templates/modal-save-detail/TemplateSaveDetail';
import Detail from '../components/organisms/details/Detail';
import { typeModal } from '../conts/typeModal.conts';

function PersonalAccountant() {
    const [isOpen, isOpenState] = useState({
        [typeModal.register]: false,
        [typeModal.editer]: false,
        open: false,
    })

    const handleOpenModal = (type) => {
console.log("type",type);
        if (type === typeModal.register) {
            return isOpenState({ ...isOpen, register: !isOpen.register, open: true })
        }

        if (type === typeModal.editer) {
          return  isOpenState({ ...isOpen, editer: !isOpen.editer, open: true })
        }

        return isOpenState({
            [typeModal.register]: false,
            [typeModal.editer]: false,
            open: false,
        })
    }

    return (
        <div className="App">
            <TemplateSaveDetail isOpen={isOpen}  handleOpenModal={handleOpenModal} />
            <div className='flex-center'>
                <h1 className='title'>Personal Accountant</h1>
            </div>
            <Search handleOpenModal={() => handleOpenModal(typeModal.register)} />
            <Detail handleOpenModal={() => handleOpenModal(typeModal.editer)} />
        </div>
    )
}

export default PersonalAccountant