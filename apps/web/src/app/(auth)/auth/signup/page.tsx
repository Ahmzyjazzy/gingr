"use client";

import React from "react";
import { Button } from "@gingr/ui";
import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  UserCredential,
} from "firebase/auth";
import { useLoadingCallback } from "react-loading-hook";
import {
  loginWithCredential,
  getFirebaseAuth,
  loginWithProvider,
  getGoogleProvider,
} from "@gingr/firebase";
import Image from "next/image";

import AuthDivider from "../../_components/auth-divider";

import CreateUserWithCredentialForm from "./_components/create-user-form";

import { useRedirectAfterLogin } from "@/app/shared/redirectAfterLogin";

interface PasswordFormValue {
  email: string;
  password: string;
}

export default function Page() {
  const redirectAfterLogin = useRedirectAfterLogin();

  const [registerWithEmailAndPassword, isRegisterLoading, registerError] =
    useLoadingCallback(async ({ email, password }: PasswordFormValue) => {
      const auth = getFirebaseAuth();
      const credential = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );

      await loginWithCredential(credential);
      await sendEmailVerification(credential.user);
      redirectAfterLogin();
    });

  async function handleLogin(credential: UserCredential) {
    await loginWithCredential(credential);
    redirectAfterLogin();
  }

  const [handleLoginWithGoogle, isGoogleLoading, googleError] =
    useLoadingCallback(async () => {
      const auth = getFirebaseAuth();

      await handleLogin(await loginWithProvider(auth, getGoogleProvider(auth)));
    });

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-md lg:text-2xl font-bold mb-4 flex items-center gap-3">
        <span>Create a free account</span>
      </h1>
      <p className="text-gray-600 mb-8 text-sm lg:text-base">
        Access all that Ginger has to offer with a single account.
      </p>

      <div className="my-6 space-y-4">
        <Button
          className="flex items-center justify-center w-full border-1"
          isLoading={isGoogleLoading}
          size="md"
          startContent={
            <Image
              alt="Gmail"
              className="w-5 h-5"
              height={40}
              src="/icons/socials/google.svg"
              width={40}
            />
          }
          variant="bordered"
          onPress={handleLoginWithGoogle}
        >
          Create Account with Gmail
        </Button>
      </div>
      {googleError && (
        <div className="error-message">{googleError?.message}</div>
      )}

      <AuthDivider />

      <CreateUserWithCredentialForm
        handleSubmitCallback={async (email: string, password: string) => {
          await registerWithEmailAndPassword({
            email,
            password,
          });
        }}
        isCreateLoading={isRegisterLoading}
      />
      {registerError && (
        <div className="error-message">{registerError?.message}</div>
      )}
    </div>
  );
}
