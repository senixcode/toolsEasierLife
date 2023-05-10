import { useContext } from 'react'
import * as icon from '@coreui/icons'
import IconCustom from 'domains/personal-accountant/presentation/components/atoms/iconcustom/IconCustom'
import ModalContext from 'core/context/ModalContext'
import useDetailSearch from 'domains/personal-accountant/presentation/hooks/services/useDetailSearch'
import './search.css'

function Search() {
    const { handleRegisterModal } = useContext(ModalContext)
    const { onChange, searchDetail } = useDetailSearch()
    return (
        <section className='section-header'>
            <input
                className='search__input'
                type='search'
                onChange={onChange}
                placeholder='search by name'
                onKeyDown={searchDetail}
            />
            <IconCustom
                btnClass='primary button-add'
                ciconClass='icon-add'
                icon={icon.cilPlus}
                ciconOnclick={handleRegisterModal} />
        </section>
    )
}
export default Search