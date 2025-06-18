import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Random Quote Spitter - Daily Inspiration",
  description:
    "Discover inspiring quotes from great minds throughout history. Get motivated with random quotes at the click of a button.",
  keywords: "quotes, inspiration, motivation, wisdom, daily quotes, random quotes",
  authors: [{ name: "Quote Spitter" }],
  creator: "Quote Spitter",
  publisher: "Quote Spitter",
  robots: "index, follow",
  openGraph: {
    title: "Random Quote Spitter - Daily Inspiration",
    description: "Discover inspiring quotes from great minds throughout history.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Quote Spitter - Daily Inspiration",
    description: "Discover inspiring quotes from great minds throughout history.",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
