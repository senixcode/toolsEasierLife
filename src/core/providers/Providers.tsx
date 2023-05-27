import { FC } from "react"
import TanstackProvider from "./TanstackProvider"

type PropsProviders = {
    children?: React.ReactNode
}

const Providers: FC<PropsProviders> = ({ children }) => {
    return (
        <TanstackProvider>
            {children}
        </TanstackProvider>
    )
}

export default Providers