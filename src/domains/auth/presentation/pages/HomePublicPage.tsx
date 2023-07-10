import { Link } from "react-router-dom";
import Paths from "../const/Paths";

function PublicPage() {
    return (
        <div>
            <h1>Primira Pagina</h1>
            <div>
                <Link
                    className='link blue-color'
                    to={Paths.singin}>
                    Iniciar sesión
                </Link>
            </div>
            <div>
                <Link
                    className='link blue-color'
                    to={Paths.singup}>
                    Registrate
                </Link>
            </div>
        </div>
    )
}

export default PublicPage