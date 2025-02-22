"use effect";

import React, { useState, useEffect } from "react";

export default function AuthErrorDisplay({
  code,
  message,
}: {
  code?: string;
  message?: string;
}) {
  const errorMessages = {
    "auth/popup-blocked":
      "Popup blocked by the browser. Please enable popups and try again.",
    "auth/user-not-found": "No account found with this email. Please sign up.",
    "auth/wrong-password": "Incorrect password. Please try again.",
    "auth/email-already-in-use":
      "This email is already associated with another account.",
    "auth/invalid-email":
      "The email address is not valid. Please enter a valid email.",
    "auth/operation-not-allowed":
      "This authentication method is not enabled. Please contact support.",
    "auth/weak-password":
      "The password is too weak. Please choose a stronger password.",
    "auth/too-many-requests": "Too many attempts. Please try again later.",
    // Add more error codes and messages as needed
  };

  function getErrorMessage(errorCode) {
    return (
      errorMessages[errorCode] ||
      "An unexpected error occurred. Please try again."
    );
  }

  const [errorMessage, setErrorMessage] = useState<string>(null);

  useEffect(() => {
    if (code || message) {
      const errMsg = getErrorMessage(code);

      setErrorMessage(errMsg);
    }
  }, [code, message]);

  return <div className="text-sm text-danger-400">{errorMessage}</div>;
}
