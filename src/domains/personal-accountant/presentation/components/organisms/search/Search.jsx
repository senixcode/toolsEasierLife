import * as icon from '@coreui/icons';
import "./search.css"
import IconCustom from '../../atoms/iconcustom/IconCustom';
import { useContext } from 'react';
import ModalContext from '../../../../../../core/context/ModalContext';
function Search() {
    const { handleRegisterModal } = useContext(ModalContext)
    return (
        <section className='section-header'>
            <input className='search__input' type="search" name="" placeholder='search by name and detail type' id="" />
            <IconCustom btnClass="primary button-add" ciconClass='icon-add' icon={icon.cilPlus} ciconOnclick={handleRegisterModal} />
        </section>
    )
}
export default Search