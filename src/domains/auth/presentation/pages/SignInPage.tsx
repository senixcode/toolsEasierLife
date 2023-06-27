import { Link } from 'react-router-dom'
import Paths from '../const/Paths'
import useAuthContext from '../hooks/useAuthContext'
import { TypeSignIn } from '../../domain/User'
import { GoogleLogin } from '@react-oauth/google';
import './singIn.css'

function SignInPage() {
    const { handleSignIn, errorMenssage } = useAuthContext()

    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();

        let formData = new FormData(event.currentTarget)
        let email = formData.get("email") as string
        let password = formData.get("password") as string
        if (email && password) handleSignIn({ email, password } as TypeSignIn)
    }

    return (
        <>
            <div className='container-login'>
                <form onSubmit={handleSubmit} className='card'>
                    <h1 className='text-center'>ToolsEasierLife</h1>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            const token = credentialResponse?.credential
                            if (token) handleSignIn({ token } as TypeSignIn)                          
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                     <hr className='line'></hr>
                    <div>
                        <label className='text-md'>Correo</label>
                        <input className='input' name="email" type="email" />
                    </div>
                    <div>
                        <label className='text-md'>Contraseña</label>
                        <input className='input' name="password" type="password" />
                    </div>
                    {errorMenssage && (<p className='text-center red'>{errorMenssage}</p>)}
                    <div className='flex-center mt'>
                        <button type="submit" className='btn blue-bg text-md'>Iniciar sesión</button>
                    </div>
                    <p className='text-md'>¿No tienes una cuenta? <Link className='link blue-color' to={Paths.singup}> Registrate </Link></p>
                </form>
            </div>
        </>
    )
}
export default SignInPage