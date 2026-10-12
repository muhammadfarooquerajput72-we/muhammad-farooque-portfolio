import type { Metadata } from "next";
import type { ReactNode } from "react";

import { PageShell } from "@/components/layout/PageShell";

import "./globals.css";

export const metadata: Metadata = {
  applicationName: "Muhammad Farooque Portfolio",
  title: {
    default: "Muhammad Farooque",
    template: "%s | Muhammad Farooque",
  },
  description: "Learning across tech. Building in public.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
