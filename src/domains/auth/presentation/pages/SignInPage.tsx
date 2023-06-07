import { Link, useLocation, useNavigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import './singIn.css'
import Paths from '../const/Paths'
import useAuthContext from '../hooks/useAuthContext'
import { TypeSignIn } from '../../domain/User'

function SignInPage() {
    let navigate = useNavigate()
    let location = useLocation()
    const {handleSignIn} = useAuthContext()

    let from = location.state?.from?.pathname || "/"

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget)
        let email = formData.get("email") as string
        let password = formData.get("password") as string
        handleSignIn({ email, password } as TypeSignIn)
        console.log("from", from);
        
        navigate(Paths.personal_accountant, { replace: true })
    }

    return (
        <div className='container-login'>
            <form onSubmit={handleSubmit} className='card'>
                <h1 className='text-center'>ToolsEasierLife</h1>
                <div>
                    <label className='text-md'>Email</label>
                    <input className='input' name="email" type="email" />
                </div>
                <div>
                    <label className='text-md'>Contraseña</label>
                    <input className='input' name="password" type="password" />
                </div>
                <div className='flex-center mt'>
                    <button type="submit" className='btn blue-bg text-md'>Iniciar sesión</button>
                </div>
                <p className='text-md'>¿No tienes una cuenta? <Link className='link blue-color' to={Paths.singup}> Registrate </Link></p>
            </form>
        </div>
    )
}
export default SignInPage