
// imports pages

import PersonalAccountant from '../../domains/personal-accountant/presentation/pages/PersonalAccountant'
//imports Libreries
 import Modal from 'react-modal'
//import styles
import './app.css'

 Modal.setAppElement("#root")

function App() {
  
  return <PersonalAccountant/>
}



export default App
