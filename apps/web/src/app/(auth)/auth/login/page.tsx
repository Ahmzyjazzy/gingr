"use client";

import React from "react";
import { Button } from "@gingr/ui";
import { useTheme } from "next-themes";
import Image from "next/image";
import { signInWithEmailAndPassword, UserCredential } from "firebase/auth";
import { useLoadingCallback } from "react-loading-hook";
import { useRouter } from "next/navigation";
import {
  loginWithCredential,
  getGoogleProvider,
  loginWithProvider,
  getFirebaseAuth,
} from "@gingr/firebase";

import LoginWithCredentialForm from "./_components/login-user-form";

import { useRedirectAfterLogin } from "@/app/shared/redirectAfterLogin";
import AuthDivider from "../../_components/auth-divider";

interface PasswordFormValue {
  email: string;
  password: string;
}

export default function Page() {
  const { theme } = useTheme();
  const router = useRouter();

  const redirectAfterLogin = useRedirectAfterLogin();

  async function handleLogin(credential: UserCredential) {
    await loginWithCredential(credential);
    redirectAfterLogin();
  }

  const [handleLoginWithEmailAndPassword, isEmailLoading, emailPasswordError] =
    useLoadingCallback(async ({ email, password }: PasswordFormValue) => {
      const auth = getFirebaseAuth();

      await handleLogin(
        await signInWithEmailAndPassword(auth, email, password),
      );
    });

  const [handleLoginWithGoogle, isGoogleLoading, googleError] =
    useLoadingCallback(async () => {
      const auth = getFirebaseAuth();

      await handleLogin(await loginWithProvider(auth, getGoogleProvider(auth)));
    });

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-md lg:text-2xl font-bold mb-4">
        Simplify your payment collection
      </h1>
      <p className="text-gray-600 mb-8 text-sm lg:text-base">
        Receive and remit payment, redeem reward and gift.
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
          Sign in with Gmail
        </Button>
      </div>

      <AuthDivider />

      <LoginWithCredentialForm
        handleSubmitCallback={async (email: string, password: string) => {
          await handleLoginWithEmailAndPassword({
            email,
            password,
          });
        }}
        isCreateLoading={isEmailLoading}
      />
    </div>
  );
}
