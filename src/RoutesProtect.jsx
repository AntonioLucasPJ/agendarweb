import { useContext } from "react";
import { Navigate } from "react-router";
import { UserContext } from "./context/UserLogin";

export function RoutesProtect({children}){
    const {authorizate,token} = useContext(UserContext)
    return authorizate && token? children: <Navigate to='/'></Navigate>
}