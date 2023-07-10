import { Link, Route, Routes, useLocation } from "react-router-dom"
import AuthProvider from "../providers/AuthProvider"
import Layout from "./Layout"
import SignInPage from "../pages/SignInPage";
import RequireAuth from "./RequireAuth";
import SignUpPage from "../pages/SignUpPage";
import PersonalAccountant from "@/domains/personal-accountant/presentation/pages/PersonalAccountant";
import Paths from "../const/Paths";
import PublicPage from "../pages/HomePublicPage";

const RoutesAll = () => (
    <Routes>
                <Route element={<Layout />}>
                <Route index element={<SignInPage/>} />
                    <Route path={Paths.home} element={<PublicPage />} />
                    <Route
                        path={Paths.personal_accountant}
                        element={
                            <RequireAuth>
                                <PersonalAccountant />
                            </RequireAuth>
                        }
                    />
                    <Route path={Paths.singin} element={<SignInPage />} />
                    <Route path={Paths.singup} element={<SignUpPage />} />
                </Route>
            </Routes>
)

function AuthRoutes() {
    return (
        <AuthProvider>
            <RoutesAll/>
        </AuthProvider>
    )
}


export default AuthRoutes