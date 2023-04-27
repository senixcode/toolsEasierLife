import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const queryClient = new QueryClient()
/* 
https://tanstack.com/query/v4/docs/react/devtools#devtools-in-production
Detools in production
*/
const ReactQueryDevtoolsProduction = React.lazy(() =>
    import('@tanstack/react-query-devtools/build/lib/index.prod.js').then(
        (d) => ({
            default: d.ReactQueryDevtools,
        }),
    ),
)

function TanstackProvider({ children }) {
    const [showDevtools, setShowDevtools] = React.useState(false)
    React.useEffect(() => {
        // @ts-ignore
        window.toggleDevtools = () => setShowDevtools((old) => !old)
    }, [])

    return (
        <QueryClientProvider client={queryClient}>
            {/* The rest of your application */}
            {children}
            <ReactQueryDevtools initialIsOpen />
            {showDevtools && (
                <React.Suspense fallback={null}>
                    <ReactQueryDevtoolsProduction />
                </React.Suspense>
            )}
        </QueryClientProvider>
    )
}

export default TanstackProvider