import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const greatVibes = Great_Vibes({
  variable: "--font-script-vibes",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://aarif-nafla.com'), // Base URL for resolving absolute paths
  title: "Wedding Invitation | Aarif & Nafla · 19.09.2026",
  description: "Together with their families, Aarif Hussain A Nassar and Nafla Nazar request the honor of your presence to celebrate their wedding on Saturday, September 19, 2026.",
  keywords: ["Aarif Hussain", "Nafla Nazar", "Wedding Invitation", "Wedding Website", "Nehru Memorial Town Hall", "M K Convention Centre", "Islamic Wedding"],
  authors: [{ name: "Aarif & Nafla" }],
  openGraph: {
    title: "Wedding Invitation | Aarif & Nafla",
    description: "Celebrate the union of Aarif Hussain A Nassar & Nafla Nazar on Saturday, September 19, 2026. View ceremony details, venue location and RSVP.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/gallery-1.png",
        width: 1200,
        height: 630,
        alt: "Aarif & Nafla Wedding Invitation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wedding Invitation | Aarif & Nafla",
    description: "Celebrate the union of Aarif Hussain A Nassar & Nafla Nazar on September 19, 2026.",
    images: ["/images/gallery-1.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png", sizes: "512x512" },
      { url: "/favicon.ico" },
    ],
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${greatVibes.variable} ${jakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-luxury-cream text-luxury-emerald font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
