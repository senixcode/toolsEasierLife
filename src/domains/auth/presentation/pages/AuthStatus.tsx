import { Link } from 'react-router-dom'
import { LocalStorage } from '../hooks/useAuth'
import Paths from '../const/Paths'
import firstCapitalLetter from '@/shared/infrastructure/adapters/firstCapitalLetter';
import './authStatus.css'
import useAuthContext from '../hooks/useAuthContext';

function AuthStatus() {
    const user = localStorage.getItem(LocalStorage.USER)
    const {signOut} = useAuthContext()

    if (!user) {
        return <div>
            <Link
                className='link blue-color'
                to="/">
                ToolsEasierLife
            </Link>
        </div>
    }

    return (
        <header className='header-container'>
            <h2>Hola {firstCapitalLetter(user)}, buen dia!</h2>
            <section className='header-navs'>
                <nav>
                    <Link
                        className='link blue-color'
                        to="/protected">
                        Protected
                    </Link>
                </nav>
                <nav>
                    <Link
                        className='link blue-color'
                        to={Paths.personal_accountant}>
                        Contador personal
                    </Link>
                </nav>
                <nav>
                    <button
                        className='btn link blue-color'
                        onClick={signOut}>
                        Cerrar session
                    </button>
                </nav>
            </section>

        </header>
    )
}

export default AuthStatus