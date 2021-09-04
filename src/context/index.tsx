import React, { ReactNode, useState } from "react";
import { AuthProvider } from "./auth-context";
interface AuthForm {
  username: string,
  password: string
}

const AuthContext = React.createContext(undefined)
AuthContext.displayName = 'AuthContext'

export const  AuthProviders = ({children}: {children: ReactNode}) => <AuthProvider> {children} </AuthProvider>

