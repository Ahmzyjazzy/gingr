import React from "react";

// Spinner.tsx
import styles from "./loading.module.css";

const Spinner = () => {
  return <div aria-label="Loading" className={styles.spinner} />;
};

export default function AppLoading() {
  return (
    <div className="h-screen w-screen flex flex-col gap-5 items-center justify-center">
      <h1>Loading, please wait...</h1>
      <Spinner />
    </div>
  );
}
