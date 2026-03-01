import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/fragments/header";
import Footer from "@/components/fragments/footer";
import Navigation from "@/components/fragments/navigation";
import { organizationSchema } from "@/lib/schema";
import { Analytics } from "@vercel/analytics/next";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_URL || "https://bidropproduction.com",
  ),

  title: {
    default: "BiDrop Production",
    template: "%s | BiDrop Production",
  },

  description:
    "BiDrop Production adalah kontraktor booth event profesional dan jasa desain booth pameran terpercaya di Indonesia.",

  keywords: [
    "bidrop production",
    "bidrop production jakarta",
    "jasa booth pameran jakarta",
    "jasa desain pameran jakarta",
    "jasa booth pameran jabodetabek",
    "jasa desain pameran jabodetabek",
    "jasa booth murah",
    "jasa desain murah",
    "jasa booth murah jakarta",
    "jasa desain murah jakarta",
    "produksi booth murah",
    "produksi booth murah jakarta",
    "produksi pameran murah",
    "produksi pameran murah jakarta",
    "produksi event murah",
    "produksi event murah jakarta",
    "produksi booth jakarta",
    "produks pameran",
    "produksi event",
    "produksi booth",
    "kontraktor booth",
    "booth pameran",
    "stand pameran",
    "stand event",
    "pameran event",
    "panggung event",
    "panggung acara",
    "papan pameran",
    "stage event",
    "event pameran",
    "jasa desain pameran",
    "backdrop pameran",
    "backdrop event",
    "jasa desain booth",
    "event contractor",
    "booth exhibition",
  ],

  authors: [{ name: "BiDrop Production" }],
  creator: "BiDrop Production",
  publisher: "BiDrop Production",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "BiDrop Production",
    description:
      "Kontraktor booth event profesional dan jasa desain booth pameran terpercaya.",
    url: process.env.NEXT_PUBLIC_URL || "https://bidropproduction.com",
    siteName: "BiDrop Production",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Booth Event Production",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "BiDrop Production",
    description:
      "Kontraktor booth event profesional dan jasa desain booth pameran terpercaya.",
    images: ["/og.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${poppins.variable}  ${lora.variable} antialiased overflow-x-hidden`}
      >
        <Header />
        {children}
        <Navigation />
        <Footer />
        <div id="modal-root"></div>
        <Analytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
      </body>
    </html>
  );
}
