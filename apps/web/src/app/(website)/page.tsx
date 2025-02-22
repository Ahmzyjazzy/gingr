"use client";

import { Button } from "@gingr/ui";
import { Avatar, Card, CardBody } from "@heroui/react";
import { signOut } from "firebase/auth";
import React from "react";
import { getFirebaseAuth, serverLogout } from "@gingr/firebase";
import { useLoadingCallback } from "react-loading-hook";
import { useRouter } from "next/navigation";

import { ThemeSwitch } from "@/components/theme-switch";
import { useAuth } from "@/app/(auth)/auth/auth-provider";

export default function Dashboard() {
  const { user } = useAuth();
  const router = useRouter();

  const [handleLogout, isLogoutLoading] = useLoadingCallback(async () => {
    const auth = getFirebaseAuth();

    await signOut(auth);
    await serverLogout();

    router.refresh();
  });

  return (
    <main className="h-screen w-screen grid place-items-center">
      <Card className="max-w-sm p-4 shadow-lg rounded-xl">
        <CardBody className="flex flex-col items-center text-center">
          <Avatar
            alt={user?.displayName}
            className="mb-4"
            size="lg"
            src={user?.photoURL}
          />
          <h2 className="text-lg font-bold">{user?.displayName}</h2>
          <p className="text-lg font-medium">{user?.email}</p>
          <Button
            className="my-4 w-full"
            color="default"
            isLoading={isLogoutLoading}
            onPress={handleLogout}
          >
            Logout
          </Button>
          <ThemeSwitch />
        </CardBody>
      </Card>
    </main>
  );
}
