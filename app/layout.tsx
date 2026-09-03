import type { Metadata } from "next";
import { GFS_Didot, JetBrains_Mono, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "./globals.css";

const sans = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const serif = GFS_Didot({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tarikgungor.com"),
  title: {
    default: "Tarik Gungor — Building. Learning. Living.",
    template: "%s | Tarik Gungor",
  },
  description:
    "Tarik Gungor's personal platform for technology, projects, learning, systems, and life in progress.",
  applicationName: "Tarik Gungor",
  authors: [{ name: "Tarik Gungor", url: "https://tarikgungor.com" }],
  creator: "Tarik Gungor",
  publisher: "Tarik Gungor",
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
    url: "https://tarikgungor.com",
    siteName: "Tarik Gungor",
    title: "Tarik Gungor — Building. Learning. Living.",
    description:
      "Tarik Gungor's personal platform for technology, projects, learning, systems, and life in progress.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tarik Gungor — Building. Learning. Living.",
    description:
      "Tarik Gungor's personal platform for technology, projects, learning, systems, and life in progress.",
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
      className={`${sans.variable} ${serif.variable} ${mono.variable}`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('tg_theme');var d=s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches);if(d){document.documentElement.classList.add('dark')}else{document.documentElement.classList.remove('dark')}}catch(e){}})();`,
          }}
        />
      </head>
      <body className="bg-paper text-ink font-sans antialiased selection:bg-olive-indicator/20 selection:text-ink min-h-screen">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
