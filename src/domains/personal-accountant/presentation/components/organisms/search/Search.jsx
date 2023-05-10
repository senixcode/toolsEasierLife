import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import "./search.css"
import IconCustom from '../../atoms/iconcustom/IconCustom';
function Search({handleOpenModal}) {
    return (
        <section className='section-header'>
            <input className='search__input' type="search" name="" placeholder='search by name and detail type' id="" />
            <IconCustom btnClass="primary button-add" ciconClass='icon-add' icon={icon.cilPlus} ciconOnclick={handleOpenModal} />
        </section>
    )
}
export default Search