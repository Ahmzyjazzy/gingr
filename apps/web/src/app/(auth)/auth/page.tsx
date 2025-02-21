"use client";

import { Button } from "@gingr/ui";
import { useTheme } from "next-themes";
import Image from "next/image";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

import { auth } from "@/config/firebase";

export default function Page() {
  const { theme } = useTheme();

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-lg lg:text-3xl font-bold mb-4">
        Simplify your payment collection
      </h1>
      <p className="text-gray-600 mb-8 text-sm lg:text-base">
        Receive and remit payment, redeem reward and gift.
      </p>

      <div className="mt-6 space-y-4">
        <Button
          className="flex items-center justify-center w-full border-1"
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
          onPress={signInWithGoogle}
        >
          Continue with Gmail
        </Button>

        <Button
          className="flex items-center justify-center w-full border-1"
          startContent={
            <Image
              alt="Email"
              className="w-5 h-5"
              height={40}
              src={
                theme === "light"
                  ? "/icons/socials/mail-fill.svg"
                  : "/icons/socials/mail-fill-light.svg"
              }
              width={40}
            />
          }
          variant="bordered"
        >
          Continue with Email
        </Button>
      </div>
    </div>
  );
}
