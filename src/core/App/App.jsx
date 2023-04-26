
// imports pages
import PersonalAccountant from '../../domains/personal-accountant/presentation/pages/PersonalAccountant'
// imports providers
import ModalProvider from '../providers/ModalProvider'
//imports Libreries
import Modal from 'react-modal'
//import styles
import './app.css'

Modal.setAppElement("#root")

function App() {

  return (
    <ModalProvider>

      <PersonalAccountant />
    </ModalProvider>
  )
}



export default App
