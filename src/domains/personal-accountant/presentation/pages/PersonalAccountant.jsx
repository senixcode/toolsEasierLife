import React, { useState } from 'react'
import Search from '../components/organisms/search/Search';
import TemplateSaveDetail from '../components/templates/modal-save-detail/TemplateSaveDetail';
import Detail from '../components/organisms/details/Detail';

function PersonalAccountant() {
    const [isOpen, isOpenState] = useState(false)
    const handleOpenModal = () => isOpenState(!isOpen)
    console.log("isOpen", isOpen);
    return (
        <div className="App">
            <TemplateSaveDetail isOpen={isOpen} handleOpenModal={handleOpenModal} />
            <div className='flex-center'>
                <h1 className='title'>Personal Accountant</h1>
            </div>
            <Search handleOpenModal={handleOpenModal} />
            <Detail />
        </div>
    )
}

export default PersonalAccountant