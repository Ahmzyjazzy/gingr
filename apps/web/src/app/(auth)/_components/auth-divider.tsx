import React from "react";

export default function AuthDivider() {
  return (
    <div className="flex items-center justify-between space-x-3 mb-6">
      <hr className="h-1 flex-1 border-gray-200 dark:border-gray-600" />
      <span className="text-gray-600 text-sm">Or Continue With</span>
      <hr className="h-1 flex-1 border-gray-200 dark:border-gray-600" />
    </div>
  );
}
