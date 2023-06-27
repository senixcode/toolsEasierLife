import { Link } from 'react-router-dom'
import './singIn.css'
import Paths from '../const/Paths'
import { GoogleLogin } from '@react-oauth/google'
import useAuthContext from '../hooks/useAuthContext'
import { TypeSignUp } from '../../domain/User'



function SignUpPage() {
    const { handleSignUp, errorMenssage } = useAuthContext()

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()

        let formData = new FormData(event.currentTarget)
        let name = formData.get("name") as string
        let email = formData.get("email") as string
        let password = formData.get("password") as string
        if (name && email && password) handleSignUp({ name, email, password } as TypeSignUp)
    }

    return (
        <div className='container-login'>
            <form className='card' onSubmit={handleSubmit}>
                <h1 className='text-center'>ToolsEasierLife</h1>
                <GoogleLogin
                    onSuccess={credentialResponse => {
                        const token = credentialResponse?.credential
                        console.log("credentialResponse", credentialResponse);

                        if (token) handleSignUp({ token } as TypeSignUp)
                    }}
                    onError={() => {
                        console.log('Login Failed');
                    }}
                    useOneTap
                />
                <p className='text-center'> Ó </p>
                <div>
                    <label className='text-md'>Usuario</label>
                    <input
                        className='input'
                        name="name" />
                </div>
                <div>
                    <label className='text-md'>Correo</label>
                    <input className='input'
                        name="email"
                        type="email" />
                </div>
                <div>
                    <label className='text-md'>Contraseña</label>
                    <input className='input' name="password" type="password" />
                </div>
                {errorMenssage && (<p className='text-center red'>{errorMenssage}</p>)}
                <div className='flex-center mt'>
                    <button type="submit" className='btn blue-bg text-md'>Registrarte</button>
                </div>
                <p className='text-md'>¿Tienes una cuenta? <Link className='link blue-color' to={Paths.singin}> Iniciar sesión </Link></p>
            </form>
        </div>
    )
}
export default SignUpPage