import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { describe, expect, test, vi } from "vitest"
import SignInPage from './SignInPage'
import { buildQueryAndRouterWrapper } from '../../../../shared/test/wrappers/wrappers'

describe("SignInPage", () => {
  test("Should render", () => {
   const { wrapper } = buildQueryAndRouterWrapper()
    const { container } = render(
      <SignInPage />,
       { wrapper }
    );
    expect(container).toBeInTheDocument();
  });

  test("should render singin", async () => {
    const { wrapper } = buildQueryAndRouterWrapper()
    const {getByText} = render(<SignInPage/>, {wrapper})
    expect(getByText(/ToolsEasierLife/i )).toBeInTheDocument()
  })
})
