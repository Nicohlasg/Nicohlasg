import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Premier GIS - Singapore General Insurance Agency",
  description:
  "Singapore's most comprehensive range of general insurance. Expert advice on home, motor, travel, childcare, and business insurance from trusted professionals.",
  keywords:
  "Singapore insurance, general insurance agency, home insurance Singapore, motor insurance, travel insurance, business insurance, childcare insurance",
  authors: [{ name: "Premier GIS" }],
  viewport: "width=device-width, initial-scale=1"
};

export default function RootLayout({
  children
}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en" data-oid="b1jifow">
      <body className="antialiased" data-oid="hqec2:a">
        {children}
        <Script
          type="module"
          strategy="afterInteractive"
          src="https://cdn.jsdelivr.net/gh/onlook-dev/onlook@main/apps/web/client/public/onlook-preload-script.js"
          data-oid="zxbuq9a" />

      </body>
    </html>);

}