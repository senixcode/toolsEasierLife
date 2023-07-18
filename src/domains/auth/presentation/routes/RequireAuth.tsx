import { Navigate, useLocation } from "react-router-dom";
import useAuth, { LocalStorage } from "../hooks/useAuth";
import Paths from "../const/Paths";

function RequireAuth({ children }: { children: JSX.Element }) {
    const user = localStorage.getItem(LocalStorage.USER);
    let location = useLocation()
        
    if (!user) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to={Paths.singin} state={{ from: location }} replace />
    }

    return children
}

export default RequireAuth