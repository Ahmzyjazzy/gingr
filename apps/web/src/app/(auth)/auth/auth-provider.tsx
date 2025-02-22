"use client";

import React, { useState } from "react";
import { createContext, useContext } from "react";
import { UserInfo } from "firebase/auth";
import { Claims } from "next-firebase-auth-edge/lib/auth/claims";

export interface User extends UserInfo {
  idToken: string;
  customToken?: string;
  emailVerified?: boolean;
  customClaims?: Claims;
}

export interface AuthContextValue {
  user: User | null;
}

export interface AuthProviderProps {
  serverUser: User | null;
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextValue>({ user: null });

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  serverUser,
  children,
}) => {
  const [user] = useState<User | null>(serverUser);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
