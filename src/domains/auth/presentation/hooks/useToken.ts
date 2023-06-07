import { useState } from "react"
const TOKEN = "TOKEN"
const useToken = () => {

    const [token, setToken] = useState<string | null>(localStorage.getItem(TOKEN) ?? null)
    const changeToken = (getToken: string) => {
        localStorage.setItem(TOKEN, getToken)
        setToken(getToken)
    }
    return {token, changeToken}
}
export default useToken