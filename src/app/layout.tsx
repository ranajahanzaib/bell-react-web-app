import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { site } from "@/content/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — Website Starter`, template: `%s — ${site.name}` },
  description: site.description,
  applicationName: site.name,
  icons: { icon: "/icon.svg" },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: site.url,
    siteName: site.name,
    title: `${site.name} — Website Starter`,
    description: site.description,
    images: [{ url: "/opengraph-image.svg", width: 1200, height: 630, alt: `${site.name} — A theme with personality` }],
  },
  twitter: { card: "summary_large_image", title: `${site.name} — Website Starter`, description: site.description, images: ["/opengraph-image.svg"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [{ media: "(prefers-color-scheme: light)", color: "#f5f8f7" }, { media: "(prefers-color-scheme: dark)", color: "#111b1e" }],
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
