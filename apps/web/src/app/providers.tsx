"use client";

import type { ThemeProviderProps } from "next-themes";

import { HeroUIProvider } from "@heroui/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export interface ProvidersProps {
  themeProps?: ThemeProviderProps;
  children?: React.ReactNode;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <HeroUIProvider>
      <NextThemesProvider {...themeProps}>{children}</NextThemesProvider>
    </HeroUIProvider>
  );
}
