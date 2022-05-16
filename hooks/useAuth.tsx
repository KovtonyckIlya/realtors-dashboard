import React, {createContext, useContext, useState, useEffect} from "react";
import {IUser} from '../interface/user'
import {useDispatch} from "react-redux";
import {getUserRequest, loginRequest, logout} from "../redux/users/actions";
import {useLocation, useHistory} from "react-router-dom";

// @ts-ignore
const authContext = createContext();

export function ProvideAuth({ children }: any) {
    const auth = useProvideAuth();

    return (
        <authContext.Provider value={auth}>
            {children}
        </authContext.Provider>
    );
}
interface AuthContextType {
    user: IUser;
    signOut: () => void;
    signIn: () => void;
}
export const useAuth = () => React.useContext(authContext) as AuthContextType;


function useProvideAuth() {
    const dispatch = useDispatch();
    const history = useHistory();


    const signIn = () => {
        dispatch(loginRequest())
    };

    const signOut = () => {
        history.push('/login')
        dispatch(logout())
        localStorage.setItem('user', '')
    };

    return {
        signIn,
        signOut
    };
}
