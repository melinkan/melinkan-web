import type { Metadata } from "next";
import { Syne } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import "./globals.css";

const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Melin Kan",
  description:
    "Meet Melin, a passionate web developer & designer with expertise in technical SEO and creating user-friendly, optimized websites. Always keeping up with the latest trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
