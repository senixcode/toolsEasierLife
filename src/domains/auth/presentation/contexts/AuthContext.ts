import { createContext } from "react";
import { TypeSignIn, TypeSignUp, TypeUser } from "../../domain/User";

export interface AuthContextType {
    user: TypeUser | null
    errorMenssage: string | null
    handleSignIn: (body: TypeSignIn) => void
    handleSignUp: (body: TypeSignUp) => void
    signOut: () => void;
}


let AuthContext = createContext<AuthContextType>(null!)

export default AuthContext