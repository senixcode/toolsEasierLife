
import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { describe, expect, vi, test } from "vitest"
import AuthRoutes from './AuthRoutes'
import { buildQueryAndRouterWrapper } from '../../../../shared/test/wrappers/wrappers'

describe("AuthRoutes", () => {
  test("Should render normally", () => {
    const { wrapper } = buildQueryAndRouterWrapper()
    const { container, debug } = render(
      <AuthRoutes />,
      { wrapper }
    );
    debug()
    expect(container).toBeInTheDocument();
  });

//   it("should go to home", async () => {
//     const { wrapper } = buildQueryAndRouterWrapper()
//     const screen = render(<AuthRoutes/>, {wrapper})
//     screen.debug()
//     // const user = userEvent.setup()

//     // // expect(linkHome).toBeInTheDocument()
//     // await user.click(screen.getByText(/ToolsEasierLife/i))
//     //  const home = await screen.findByText(/public/i)
//     // expect(home).toBeInTheDocument()
// })
});