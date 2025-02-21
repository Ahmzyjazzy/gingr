"use client";

import { redirect } from "next/navigation";

import { useAuth } from "@/components/auth-provider";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
    const { user } = useAuth();
    
    console.log(user);

  if (!user) redirect("/auth");

  return (
    <main className="min-h-screen container mx-auto flex">{children}</main>
  );
}
