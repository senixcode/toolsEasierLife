
import Search from '../components/organisms/search/Search';
import TemplateSaveDetail from '../components/templates/modal-save-detail/TemplateSaveDetail';
import Detail from '../components/organisms/details/Detail';
import DetailProvider from '../providers/DetailProvider';

function PersonalAccountant() {

    return (
        <DetailProvider>
            <main className='App'>
                <TemplateSaveDetail />
                <div className='flex-center'>
                    <h1 className='title'>Personal Accountant</h1>
                </div>
                <Search />
                <Detail />
            </main>
        </DetailProvider>
    )
}

export default PersonalAccountant