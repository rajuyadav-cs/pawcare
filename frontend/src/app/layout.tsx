import React from "react";
import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body>
        {children}
        <Link href={""}>Home</Link>
        <br />
        <Link href={"/patient"}>Go to Patient</Link>
      </body>
    </html>
  );
}
