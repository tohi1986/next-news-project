import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Learning Template",
  description: "My Next.js starter template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}