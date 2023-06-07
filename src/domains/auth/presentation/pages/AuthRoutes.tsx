import { Link, Route, Routes } from "react-router-dom"
import AuthProvider from "../providers/AuthProvider"
import Layout from "./Layout"
import SignInPage from "./SignInPage";
import RequireAuth from "./RequireAuth";
import SignUpPage from "./SignUpPage";
import PersonalAccountant from "@/domains/personal-accountant/presentation/pages/PersonalAccountant";
import Paths from "../const/Paths";

function PublicPage() {
    return (
        <div>
            <h1>Public</h1>
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

function ProtectedPage() {
    return (
        <div>

            <h3>Protected</h3>
            <div>
                <Link
                    className='link blue-color'
                    to={Paths.personal_accountant}>
                    Contador Personal
                </Link>
            </div>
        </div>
    )
}

function AuthRoutes() {
    return (
        <AuthProvider>
            <Routes>
                <Route element={<Layout />}>
                    <Route path={Paths.home} element={<PublicPage />} />
                    <Route path={Paths.singin} element={<SignInPage />} />
                    <Route path={Paths.singup} element={<SignUpPage />} />
                    <Route
                        path="/protected"
                        element={
                            <RequireAuth>
                                <ProtectedPage />
                            </RequireAuth>
                        }
                    />
                    <Route
                        path={Paths.personal_accountant}
                        element={
                            <RequireAuth>
                                <PersonalAccountant />
                            </RequireAuth>
                        }
                    />
                </Route>
            </Routes>
        </AuthProvider>
    )
}


export default AuthRoutes