import { createContext } from "react";
import { TypeSignIn, TypeSignUp, TypeUser } from "../../domain/User";

export interface AuthContextType {
    user: string
    errorMenssage: string 
    handleSignIn: (body: TypeSignIn) => void
    handleSignUp: (body: TypeSignUp) => void
    signOut: () => void;
}


export const initialAuthContext = {
    user: "",
    errorMenssage: "",
    handleSignIn: () => null,
    handleSignUp: () => null,
    signOut: () => null,
}

let AuthContext = createContext<AuthContextType>(initialAuthContext)

export default AuthContext