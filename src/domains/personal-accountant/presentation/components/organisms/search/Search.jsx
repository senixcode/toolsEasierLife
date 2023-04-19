import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import "./search.css"
function Search({handleOpenModal}) {
    return (
        <section className='section-header'>
            <input className='search__input' type="search" name="" placeholder='search by name and detail type' id="" />
            <button className=' primary button-add' onClick={handleOpenModal} >
                <CIcon icon={icon.cilPlus} className='icon-add' onClick={handleOpenModal} size="custom-size" />
            </button>
        </section>
    )
}
export default Search