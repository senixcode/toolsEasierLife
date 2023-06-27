import { FC } from "react"
import TanstackProvider from "./TanstackProvider"
import { GoogleOAuthProvider } from "@react-oauth/google"
import { ENV } from "@/config/env"

type PropsProviders = {
    children?: React.ReactNode
}
const clientId = ENV.idClientGoogle as string
const Providers: FC<PropsProviders> = ({ children }) => {
    return (
        <TanstackProvider>
            <GoogleOAuthProvider clientId={clientId}>
                {children}
            </GoogleOAuthProvider>
        </TanstackProvider>
    )
}

export default Providers