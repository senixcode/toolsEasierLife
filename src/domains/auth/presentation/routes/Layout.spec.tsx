import { buildQueryAndRouterWrapper } from "@/shared/test/wrappers/wrappers"
import { render } from "@testing-library/react"
import Layout from "./Layout"
import { describe, test } from "vitest"

describe("Layout", () => {
    test("should render", async () => {
        const { wrapper } = buildQueryAndRouterWrapper()
        const screen = render(<Layout />, { wrapper })
        const linkHome = screen.getByRole('link', { name: /home/i })
        expect(linkHome).toBeInTheDocument()
    })
})