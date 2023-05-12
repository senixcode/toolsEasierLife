import { useContext } from 'react'
import * as icon from '@coreui/icons'
import IconCustom from 'domains/personal-accountant/presentation/components/atoms/iconcustom/IconCustom'
import ModalContext from 'core/context/ModalContext'
import useDetailSearch from 'domains/personal-accountant/presentation/hooks/services/useDetailSearch'
import './search.css'
import DetailContext from '../../../context/DetailContext'

const title = "Busqueda por nombre"

function Search() {
    const { handleRegisterModal } = useContext(ModalContext)
    const { onChange, searchDetail } = useDetailSearch()
    const { status } = useContext(DetailContext)
    if (status === 'error') return (<></>)

    return (
        <section className='section-header'>
            <input
                className='search__input'
                type='search'
                onChange={onChange}
                placeholder={title}
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