import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()

function TanstackProvider({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            {/* The rest of your application */}
            { children }
            <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
    )
}

export default TanstackProvider