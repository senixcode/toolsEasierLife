
import Providers from '../providers/Providers'
//import styles
import './app.css'
import AuthRoutes from '@/domains/auth/presentation/pages/AuthRoutes'

function App() {

  return (
    <Providers>
      <AuthRoutes />
    </Providers>
  )
}




export default App
