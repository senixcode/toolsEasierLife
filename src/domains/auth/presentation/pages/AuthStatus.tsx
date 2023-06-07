import { Link, useNavigate } from 'react-router-dom'
import useAuth, { LocalStorage } from '../hooks/useAuth'
import useAuthContext from '../hooks/useAuthContext';

function AuthStatus() {
    const user = localStorage.getItem(LocalStorage.USER);
    // let navigate = useNavigate();
    console.log({ user });

    if (!user) {
        return <p>No inicio session</p>;
    }

    return (
        <p>
            Welcome {user}
            <div>
                <Link
                    className='link blue-color'
                    to="/protected">
                    protected
                </Link>
            </div>
            
            {/* <button
                onClick={() => {
                    auth.signout(() => navigate("/"));
                }}
            >
                Sign out
            </button> */}
        </p>
    )
}

export default AuthStatus