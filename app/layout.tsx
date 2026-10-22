import type { Metadata } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Source_Sans_3 } from "next/font/google";
import { SmoothScroll } from "@/components/motion/SmoothScroll";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { profile } from "@/lib/content/profile";
import "./globals.css";

const sans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(profile.contact.website),
  title: {
    default: `${profile.name} — ${profile.tagline}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.positioning,
  applicationName: profile.name,
  authors: [{ name: profile.name, url: profile.contact.website }],
  creator: profile.name,
  publisher: profile.name,
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/assets/icons/tarik-gungor-favicon.png",
    apple: "/assets/icons/tarik-gungor-favicon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: profile.contact.website,
    siteName: profile.name,
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.positioning,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.tagline}`,
    description: profile.positioning,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      suppressHydrationWarning
      className={`${sans.variable} ${display.variable} ${mono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('tg_theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="font-sans antialiased min-h-screen">
        <ThemeProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </ThemeProvider>
      </body>
    </html>
  );
}
