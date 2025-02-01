"use client";

import type { ThemeProviderProps } from "next-themes";

import { HeroUIProviderProps } from "@heroui/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const HeroUIProvider: React.FC<React.PropsWithChildren<HeroUIProviderProps>> = (
  props,
) => {
  return <div {...props}>{props.children}</div>;
};

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
