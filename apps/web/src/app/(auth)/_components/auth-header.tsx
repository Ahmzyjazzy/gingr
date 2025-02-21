import Image from "next/image";

export default function AuthHeader() {
  return (
    <div className="flex items-center justify-between flex-wrap mb-5">
      <Image
        alt="App Logo"
        className="w-20 h-20 lg:w-24 lg:h-24 rounded-full"
        height={24}
        src="/icons/logos/gingr-purple.svg"
        width={24}
      />
      <div className="text-right">
        <span className="text-sm">I already have an account? </span>
        <a className="text-sm text-indigo-600 font-medium" href="/login">
          Login
        </a>
      </div>
    </div>
  );
}
