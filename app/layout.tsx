import type { Metadata } from "next";
import { ReactNode } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vinay Bhogal | Developer Portfolio",
  description:
    "Android app developer and full stack developer building fast, scalable digital systems that feel effortless to use.",
  metadataBase: new URL("https://vinaybhogal.dev"),
  openGraph: {
    title: "Vinay Bhogal | Developer Portfolio",
    description:
      "Android app developer and full stack developer building fast, scalable digital systems.",
    url: "https://vinaybhogal.dev",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinay Bhogal | Developer Portfolio",
    description:
      "Android app developer and full stack developer building fast, scalable digital systems."
  }
};

export default function RootLayout(props: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-neo-white text-neo-black font-sans antialiased selection:bg-neo-yellow selection:text-neo-black dark:bg-neo-dark-bg dark:text-neo-white dark:selection:bg-neo-blue dark:selection:text-neo-black">
        <ThemeProvider>{props.children}</ThemeProvider>
      </body>
    </html>
  );
}
