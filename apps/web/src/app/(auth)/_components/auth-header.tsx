"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuthHeader() {
  const path = usePathname();
  const isLoginRoute = path === "/auth/login";

  return (
    <div className="flex items-center justify-between flex-wrap mb-5">
      <Link href="/">
        <Image
          alt="App Logo"
          className="w-20 h-20 lg:w-24 lg:h-24 rounded-full"
          height={24}
          src="/icons/logos/gingr-purple.svg"
          width={24}
        />
      </Link>
      {!isLoginRoute && (
        <div className="text-right">
          <span className="text-sm">I already have an account? </span>
          <Link
            className="text-sm text-indigo-600 font-medium"
            href="/auth/login"
          >
            Login
          </Link>
        </div>
      )}
      {isLoginRoute && (
        <div className="text-right">
          <span className="text-sm">Don&apos;t have an account? </span>
          <Link
            className="text-sm text-indigo-600 font-medium"
            href="/auth/signup"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
}
