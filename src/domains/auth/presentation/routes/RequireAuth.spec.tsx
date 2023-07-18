import { test } from "vitest"
import RequireAuth from "./RequireAuth"
import { render } from "@testing-library/react"
import { buildQueryAndRouterWrapper } from "@/shared/test/wrappers/wrappers"
import { Route, Routes } from "react-router-dom"
import Paths from "../const/Paths"
import SignInPage from "../pages/SignInPage"
import storageMock from "./storage.mock"
import { LocalStorage } from "../hooks/useAuth"


(window as any).localStorage = storageMock()

describe("RequireAuth", () => {

    const testPage = "Test Page"
    test("should render signIn", () => {
        const user = ""
        localStorage.setItem(LocalStorage.USER, user)
        const { wrapper } = buildQueryAndRouterWrapper()
        const screen = render(<Routes>
            <Route index element={<SignInPage />} />
            <Route
                path={Paths.personal_accountant}
                element={
                    <RequireAuth>
                        <h1>{testPage}</h1>
                    </RequireAuth>
                } />
        </Routes>, { wrapper })
        expect(screen.getByText(/Iniciar sesión/i)).toBeInTheDocument()
    })

    test("should render test page started session", () => {
        const user = "Luis Romero"
        localStorage.setItem(LocalStorage.USER, user)
        const { wrapper } = buildQueryAndRouterWrapper()
        const screen = render(
            <RequireAuth><h1>{testPage}</h1></RequireAuth>,
            { wrapper })
        expect(screen.getByText(testPage)).toBeInTheDocument()
    })
})