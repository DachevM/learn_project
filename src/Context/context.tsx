import {createContext} from "react";
export type AuthContextProp = {
    isAuth: (boolean | null)
    setIsAuth:(c: boolean) => void
}
export const AuthContext=createContext<AuthContextProp>({
    isAuth: null,
} as AuthContextProp)