import React from 'react'
import Search from '../components/organisms/search/Search';
import TemplateSaveDetail from '../components/templates/modal-save-detail/TemplateSaveDetail';
import Detail from '../components/organisms/details/Detail';

function PersonalAccountant() {
    

    return (
        <div className="App">
            <TemplateSaveDetail />
            <div className='flex-center'>
                <h1 className='title'>Personal Accountant</h1>
            </div>
            <Search  />
            <Detail  />
        </div>
    )
}

export default PersonalAccountant