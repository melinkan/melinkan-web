import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import StyledComponentsRegistry from "./lib/registry";
import "./globals.css";

const dm_sans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Home - Melin Kan",
  description:
    "Hello, I'm Melin Kan. A detail-oriented developer dedicated to crafting visually stunning, user-friendly websites while staying updated with the latest trends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={dm_sans.className}>
        <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
      </body>
    </html>
  );
}
