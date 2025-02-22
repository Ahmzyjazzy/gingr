"use server";

import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { refreshCookiesWithIdToken } from "next-firebase-auth-edge/lib/next/cookies";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { authConfig, getFirebaseAuth } from "@gingr/firebase";

export async function signUpWithEmailAndPassword(
  email: string,
  password: string,
) {
  const credential = await createUserWithEmailAndPassword(
    getFirebaseAuth(),
    email,
    password,
  );

  const idToken = await credential.user.getIdToken();

  await refreshCookiesWithIdToken(
    idToken,
    await headers(),
    await cookies(),
    authConfig,
  );
  redirect("/");
}

export async function loginWithEmailAndPasswordAction(
  email: string,
  password: string,
) {
  const credential = await signInWithEmailAndPassword(
    getFirebaseAuth(),
    email,
    password,
  );

  const idToken = await credential.user.getIdToken();

  await refreshCookiesWithIdToken(
    idToken,
    await headers(),
    await cookies(),
    authConfig,
  );
  redirect("/");
}

export async function logoutAction() {
  await refreshCookiesWithIdToken(
    null,
    await headers(),
    await cookies(),
    authConfig,
  );
  redirect("/auth");
}
