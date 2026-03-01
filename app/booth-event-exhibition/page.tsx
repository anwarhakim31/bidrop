import BoothExhibitionView from "@/components/views/product/BoothExhibitonView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Booth Event Exhibition",

  description:
    "Booth event exhibition profesional untuk pameran dan expo. BiDrop Production menyediakan jasa desain, produksi, dan instalasi booth pameran dengan konsep kreatif dan branding maksimal.",

  keywords: [
    "booth event exhibition",
    "booth pameran",
    "jasa booth exhibition",
    "kontraktor booth pameran",
    "vendor booth event",
    "booth expo",
    "booth display brand",
    "booth pameran profesional",
    "jasa pembuatan booth",
  ],

  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL + "booth-event-exhibition",
  },

  openGraph: {
    title: "Booth Event Exhibition Profesional | BiDrop Production",
    description:
      "Layanan pembuatan booth exhibition profesional dengan desain kreatif dan konstruksi berkualitas untuk event dan expo.",
    url: process.env.NEXT_PUBLIC_URL + "booth-event-exhibition",
    siteName: "BiDrop Production",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url:
          process.env.NEXT_PUBLIC_URL +
          "/Booth Event Exhibition/Booth Event Exhibition (1).png",
        width: 1200,
        height: 630,
        alt: "Booth Event Exhibition BiDrop Production",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Booth Exhibition Profesional | BiDrop Production",
    description:
      "Jasa pembuatan booth exhibition profesional untuk pameran, expo, dan event branding.",
    images: [
      process.env.NEXT_PUBLIC_URL +
        "/Booth Event Exhibition/Booth Event Exhibition (1).png",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const BothExhibitonPage = () => {
  return <BoothExhibitionView />;
};

export default BothExhibitonPage;
