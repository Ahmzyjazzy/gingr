"use client";

import AuthIntroSlider from "./_components/auth-intro-slider";
import AppPolicy from "./_components/auth-privacy-policy";
import AuthHeader from "./_components/auth-header";

import { ThemeSwitch } from "@/components/theme-switch";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen container mx-auto flex">
      {/* Left Section */}
      <div className="w-full h-full sm:min-h-screen sm:w-1/2 flex flex-col justify-between p-5 lg:p-20">
        {/* App Logo */}
        <AuthHeader />
        {children}
        <AppPolicy />
        <ThemeSwitch />
      </div>
      {/* Right Section */}
      <AuthIntroSlider />
    </main>
  );
}
