import '@testing-library/jest-dom'
import { render } from "@testing-library/react"
import { describe, expect, test } from "vitest"
import AuthRoutes from './AuthRoutes'
import { buildQueryAndRouterWrapper } from '../../../../shared/test/wrappers/wrappers'
import userEvent from '@testing-library/user-event'

describe("AuthRoutes", () => {
  test("Should render", () => {
   const { wrapper } = buildQueryAndRouterWrapper()
    const { container } = render(
      <AuthRoutes />,
       { wrapper }
    );
    expect(container).toBeInTheDocument();
  });

  test("should render singin", async () => {
    const { wrapper } = buildQueryAndRouterWrapper()
    const screen = render(<AuthRoutes/>, {wrapper})
    userEvent.click(screen.getByRole('link', {name: /Iniciar sesión/i }))
    await screen.findByText(/ToolsEasierLife/i)
  })

  test("should render singup", async () => {
    const { wrapper } = buildQueryAndRouterWrapper()
    const screen = render(<AuthRoutes/>, {wrapper})
    const btnSingIn = screen.getByRole('link', {name: /Iniciar sesión/i })
    expect(btnSingIn).toBeInTheDocument()
    userEvent.click(btnSingIn)
    const btnSingUp = await screen.findByRole('link', {name: /Registrate/i})
    expect(btnSingUp).toBeInTheDocument()
    userEvent.click(btnSingUp)
    await screen.findByText(/Contraseña/i)
  })

  test("should render singup", async () => {
    const { wrapper } = buildQueryAndRouterWrapper()
    const screen = render(<AuthRoutes/>, {wrapper})
    const btnSingIn = screen.getByRole('link', {name: /Iniciar sesión/i })
    expect(btnSingIn).toBeInTheDocument()
    userEvent.click(btnSingIn)
    const btnSingUp = await screen.findByRole('link', {name: /Registrate/i})
    expect(btnSingUp).toBeInTheDocument()
    userEvent.click(btnSingUp)
    await screen.findByText(/Contraseña/i)
  })
});