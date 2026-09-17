import type { Metadata } from "next";
import "@fontsource-variable/unbounded";
import "@fontsource-variable/space-grotesk";
import "@fontsource-variable/jetbrains-mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "BYTE — Being Your Technology Experts",
  description:
    "BYTE is a three-person technology studio. Meet the team behind the work.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-ink text-paper font-body selection:bg-acid selection:text-ink">
        {children}
      </body>
    </html>
  );
}
