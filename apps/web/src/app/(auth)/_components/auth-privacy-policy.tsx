import Link from "next/link";

export default function AuthPrivacyPolicy() {
  return (
    <div className="flex flex-col items-center">
      <div className="text-xs mt-4 text-center text-green-500 dark:bg-gray-900/70 bg-green-500/10 px-3 py-2 rounded-3xl">
        <span aria-label="lock" role="img">
          🔒
        </span>{" "}
        Secured by 256-bit AES and 256-bit SSL/TLS encryption
      </div>
      <div className="text-xs text-gray-500 mt-8 text-center">
        By signing up, I agree to Gingr’s{" "}
        <Link className="text-indigo-600" href="#">
          Terms of Service
        </Link>
        ,{" "}
        <Link className="text-indigo-600" href="#">
          Privacy Policy
        </Link>{" "}
        and{" "}
        <Link className="text-indigo-600" href="#">
          Data Processing Terms
        </Link>
        . Security is our top priority.{" "}
        <Link className="text-indigo-600" href="#">
          Read
        </Link>{" "}
        about the steps we take to ensure security.
      </div>
    </div>
  );
}
