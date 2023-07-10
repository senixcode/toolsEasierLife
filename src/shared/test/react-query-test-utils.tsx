import { ENV } from "@/config/env";
import TanstackProvider from "@/core/providers/TanstackProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactElement } from "react";

export const buildQueryWrapper = () => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });
  return {
    client,
    wrapper: ({ children }: { children: ReactElement }) => (
      <QueryClientProvider client={client}>{children}</QueryClientProvider>
    ),
  };
};

export const buildAuthQueryWrapper = () => {
  const clientId = ENV.idClientGoogle as string
  return {
    clientId,
    wrapper: ({ children }: { children: ReactElement }) => (
      <TanstackProvider>
        <GoogleOAuthProvider clientId={clientId}>
          {children}
        </GoogleOAuthProvider>
      </TanstackProvider>
    ),
  };
};
