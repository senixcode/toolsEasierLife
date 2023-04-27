
// imports pages
import PersonalAccountant from '../../domains/personal-accountant/presentation/pages/PersonalAccountant'
// imports providers
import ModalProvider from '../providers/ModalProvider'
//import styles
import './app.css'
import TanstackProvider from '../providers/TanstackProvider'

function App() {

  return (
    <TanstackProvider>
      <ModalProvider>
        <PersonalAccountant />
      </ModalProvider>
    </TanstackProvider>
  )
}



export default App
