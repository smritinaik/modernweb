import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Modern-Web",
  description: "developed by Smriti Naik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
