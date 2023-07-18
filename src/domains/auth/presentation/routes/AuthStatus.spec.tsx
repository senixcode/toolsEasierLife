import { render } from "@testing-library/react"
import { buildQueryAndRouterWrapper } from "@/shared/test/wrappers/wrappers"
import { describe, test } from "vitest"
import AuthStatus from "./AuthStatus"
import { LocalStorage } from "../hooks/useAuth"
import storageMock from './storage.mock'

/* tslint:disable */
(window as any).localStorage = storageMock()

describe("AuthStatus", () => {
    test("should render", async () => {
        const { wrapper } = buildQueryAndRouterWrapper()
        const screen = render(<AuthStatus/>, {wrapper})
        const linkHome = screen.getByRole('link', {name: /home/i })
        expect(linkHome).toBeInTheDocument()
      })

    test("should render", async () => {
        const user = "Luis Romero"
        localStorage.setItem(LocalStorage.USER, user)
        const { wrapper } = buildQueryAndRouterWrapper()
        const screen = render(<AuthStatus/>, {wrapper})
        expect(screen.getByText(/buen dia!/i)).toBeInTheDocument()
        expect(screen.getByText(/Cerrar session/i)).toBeInTheDocument()
      })
})