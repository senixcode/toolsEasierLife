import { useContext } from 'react'
import * as icon from '@coreui/icons'
import IconCustom from 'domains/personal-accountant/presentation/components/atoms/iconcustom/IconCustom'
import ModalContext from '@/domains/personal-accountant/presentation/context/ModalRegisterContext'
import useDetailSearch from 'domains/personal-accountant/presentation/hooks/services/useDetailSearch'
import './search.css'
import DetailContext from '../../../context/DetailContext'
import useDetailCreateMasive from '../../../hooks/services/useDetailCreateMasive'


const title = "Busqueda por nombre y descripción, enter para buscar"

function Search() {
    const { handleRegisterModal } = useContext(ModalContext)
    const { onChange, searchDetail } = useDetailSearch()
    const { status } = useContext(DetailContext)
    const { exportDetails } = useContext(DetailContext)
    const {handleImportFile, inputFile} = useDetailCreateMasive()
    
    if (status === 'error') return (<></>)
    return (
        <section className='section-header'>
            <input
                type="file"
                hidden
                ref={inputFile}
                onChange={handleImportFile} />
            <input
                className='search__input'
                type='search'
                onChange={onChange}
                placeholder={title}
                onKeyDown={searchDetail}
            />
            <IconCustom
                btnClass='tooltip primary button-add'
                ciconClass='icon-add'
                icon={icon.cilPlus}
                ciconOnclick={handleRegisterModal} >
                <span className="tooltiptext">Agregar data</span>
            </IconCustom>

            <IconCustom
                btnClass='tooltip button-add'
                icon={icon.cilCloudUpload}
                ciconOnclick={() => inputFile.current?.click()} >
                <span className="tooltiptext">importar data</span>
            </IconCustom>

            <IconCustom
                btnClass='tooltip button-add'
                icon={icon.cilCloudDownload}
                ciconOnclick={exportDetails} >
                <span className="tooltiptext">descargar data</span>
            </IconCustom>
        </section>
    )
}
export default Search