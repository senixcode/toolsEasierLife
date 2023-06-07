// import { useLocation, useNavigate } from 'react-router-dom'
// import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import './singIn.css'
import Paths from '../const/Paths'

function SignUpPage() {
    // let navigate = useNavigate()
    // let location = useLocation()
    // let auth = useAuth()

    // let from = location.state?.from?.pathname || "/"

    // function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    //     event.preventDefault();

    //     let formData = new FormData(event.currentTarget)
    //     let username = formData.get("username") as string

    //     auth.signin(username, () => {
    //         // Send them back to the page they tried to visit when they were
    //         // redirected to the login page. Use { replace: true } so we don't create
    //         // another entry in the history stack for the login page.  This means that
    //         // when they get to the protected page and click the back button, they
    //         // won't end up back on the login page, which is also really nice for the
    //         // user experience.
    //         navigate(from, { replace: true })
    //     })
    // }

    return (
        <div className='container-login'>
            <form className='card'>
                <h1 className='text-center'>ToolsEasierLife</h1>
                <div>
                    <label className='text-md'>Usuario</label>
                    <input className='input' name="name" type="text" />
                </div>
                <div>
                    <label className='text-md'>Email</label>
                    <input className='input' name="email" type="email" />
                </div>
                <div>
                    <label className='text-md'>Contraseña</label>
                    <input className='input' name="password" type="password" />
                </div>
                <div className='flex-center mt'>
                    <button type="submit" className='btn blue-bg text-md'>Registrarte</button>
                </div>
                <p className='text-md'>¿Tienes una cuenta? <Link className='link blue-color' to={Paths.singin}> Iniciar sesión </Link></p>
            </form>
        </div>
    )
}
export default SignUpPage