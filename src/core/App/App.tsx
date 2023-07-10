
import Modal  from 'react-modal'
import Providers from '../providers/Providers'
//import styles
import './app.css'
import AuthRoutes from '@/domains/auth/presentation/routes/AuthRoutes'

Modal.setAppElement("#root")

function App() {

  return (
    <Providers>
      <AuthRoutes />
    </Providers>
  )
}




export default App
