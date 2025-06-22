"use client";
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import Header from "../layout/header";
import { cn } from "@/lib/utils";


// Interface for the ThemeProvider component
interface ExtendedThemeProvider extends ThemeProviderProps {
    containerClassName?: string;   
}

// ThemeProvider component
export function ThemeProvider({ children, containerClassName, ...props }: ExtendedThemeProvider) {
  return (
    <NextThemesProvider {...props}>
        <Header />
            <main className={cn("container mx-auto px-4", containerClassName )}>
                {children}
            </main>
        {/* <Footer /> */}
    </NextThemesProvider>
  );
}
