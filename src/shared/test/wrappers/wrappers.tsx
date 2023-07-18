import { render } from "@testing-library/react";
import  userEvent from "@testing-library/user-event";
import { ReactElement } from "react";
import { MemoryRouter, BrowserRouter } from "react-router-dom";
import { buildAuthQueryWrapper, buildQueryWrapper } from "shared/test/react-query-test-utils";

export const buildRouterWrapper = () => {
  return {
    wrapper: ({ children }: { children: ReactElement }) => (
      <MemoryRouter initialEntries={['/']} >
        {children}
      </MemoryRouter>
    ),
  };
};

export const renderWithRouter = (ui : ReactElement, {route = '/'} = {}) => {
  window.history.pushState({}, 'Test page', route)

  return {
    user: userEvent.setup(),
    ...render(ui, {wrapper: BrowserRouter}),
  }
}

export const buildQueryAndRouterWrapper = () => {
  const { wrapper: RouterWrapper } = buildRouterWrapper();
  const { wrapper: QueryWrapper } = buildQueryWrapper();
  const { wrapper: AuthWrapper } = buildAuthQueryWrapper()

  return {
    wrapper: ({ children }: { children: ReactElement }) => (
      <RouterWrapper>
       <QueryWrapper>
          <AuthWrapper>
            {children}
          </AuthWrapper>
       </QueryWrapper>
      </RouterWrapper>
    ),
  };
};
