
import Providers from '../providers/Providers'
// imports pages
import PersonalAccountant from 'domains/personal-accountant/presentation/pages/PersonalAccountant'
//import styles
import './app.css'

function App() {

  return (
    <Providers>
        <PersonalAccountant />
    </Providers>
  )
}



export default App
