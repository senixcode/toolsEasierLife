import * as icon from '@coreui/icons';
import "./search.css"
import IconCustom from '../../atoms/iconcustom/IconCustom';
import { useContext } from 'react';
import ModalContext from '../../../../../../core/context/ModalContext';
import useDetailSearch from '../../../hooks/services/useDetailSearch';
function Search() {
    const { handleRegisterModal } = useContext(ModalContext)
    const { onChange, searchDetail } = useDetailSearch()
    return (
        <section className='section-header'>
            <input 
                className='search__input'
                type="search"
                onChange={onChange}
                placeholder='search by name'
                onKeyDown={searchDetail}
            />
            <IconCustom btnClass="primary button-add" ciconClass='icon-add' icon={icon.cilPlus} ciconOnclick={handleRegisterModal} />
        </section>
    )
}
export default Search