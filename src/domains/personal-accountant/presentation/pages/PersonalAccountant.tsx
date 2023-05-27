
import Search from '../components/organisms/search/Search';
import TemplateSaveDetail from '../components/templates/modal-save-detail/TemplateSaveDetail';
import Detail from '../components/organisms/details/Detail';
import ModalAlertDelete from '../components/organisms/modal-alert-delete/ModalAlertDelete';
import Providers from '../providers/Providers';

const title = "Contador Personal"

function PersonalAccountant() {

    return (
        <Providers>
            <main className='App'>
                <TemplateSaveDetail />
                <ModalAlertDelete/>
                <div className='flex-center'>
                    <h1 className='title'>{title}</h1>
                </div>
                <Search />
                <Detail />
            </main>
        </Providers>
    )
}

export default PersonalAccountant