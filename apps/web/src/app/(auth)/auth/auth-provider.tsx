"use client";

import React, { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { onAuthStateChanged, UserInfo } from "firebase/auth";
import { Claims } from "next-firebase-auth-edge/lib/auth/claims";
import { getFirebaseAuth } from "@gingr/firebase";

export interface User extends UserInfo {
  idToken?: string;
  customToken?: string;
  emailVerified?: boolean;
  customClaims?: Claims;
}

export interface AuthContextValue {
  user: User | null;
  loading: boolean;
}

export interface AuthProviderProps {
  serverUser: User | null;
  children: React.ReactNode;
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  loading: true,
});

export const AuthProvider: React.FunctionComponent<AuthProviderProps> = ({
  serverUser,
  children,
}) => {
  const [user, setUser] = useState<User | null>(serverUser);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getFirebaseAuth();
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      const syncUser = {
        ...firebaseUser,
        ...user,
        idToken: serverUser?.idToken,
        customToken: serverUser?.idToken,
        emailVerified: serverUser?.idToken,
        customClaims: serverUser?.idToken,
      } as unknown as User;

      setUser(syncUser);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
