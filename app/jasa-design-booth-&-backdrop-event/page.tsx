import JasaDesignView from "@/components/views/product/JasaDesignView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Design Booth & Backdrop Event",

  description:
    "Jasa design booth dan backdrop event profesional untuk pameran, exhibition, dan event branding. BiDrop Production menghadirkan desain kreatif, konstruksi berkualitas, dan instalasi tepat waktu.",

  keywords: [
    "jasa design booth",
    "jasa desain booth pameran",
    "kontraktor booth event",
    "desain booth exhibition",
    "jasa backdrop event",
    "booth pameran profesional",
    "vendor booth pameran",
    "jasa booth custom",
    "booth exhibition indonesia",
  ],

  alternates: {
    canonical:
      process.env.NEXT_PUBLIC_URL + "/Jasa-Design-Booth-&-Backdrop-Event",
  },

  openGraph: {
    title: "Jasa Design Booth Event Profesional | BiDrop Production",
    description:
      "Layanan desain dan produksi booth pameran profesional dengan konsep kreatif dan konstruksi berkualitas untuk event dan exhibition.",
    url: process.env.NEXT_PUBLIC_URL + "/Jasa-Design-Booth-&-Backdrop-Event",
    siteName: "BiDrop Production",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: process.env.NEXT_PUBLIC_URL + "/Gallery/galeri-event (1).png",
        width: 1200,
        height: 630,
        alt: "Jasa Design Booth Event BiDrop Production",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa Design Booth Event | BiDrop Production",
    description:
      "Jasa desain booth pameran profesional untuk event dan exhibition branding.",
    images: [process.env.NEXT_PUBLIC_URL + "Gallery/galeri-event (1).png"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function Page() {
  return <JasaDesignView />;
}
