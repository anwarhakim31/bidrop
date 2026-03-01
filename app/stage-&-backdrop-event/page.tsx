import StageView from "@/components/views/product/StageView";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jasa Stage & Backdrop Event Profesional | BiDrop Production",

  description:
    "Jasa pembuatan stage dan backdrop event profesional untuk seminar, launching produk, konser, dan acara perusahaan. BiDrop Production menyediakan desain kreatif, konstruksi kuat, dan instalasi rapi.",

  keywords: [
    "jasa stage event",
    "jasa backdrop event",
    "pembuatan panggung acara",
    "kontraktor stage event",
    "stage event profesional",
    "backdrop panggung",
    "vendor panggung acara",
    "sewa panggung event",
    "stage dan backdrop pameran",
  ],

  alternates: {
    canonical: process.env.NEXT_PUBLIC_URL + "/stage-&-backdrop-event",
  },

  openGraph: {
    title: "Stage & Backdrop Event Profesional | BiDrop Production",
    description:
      "Layanan pembuatan panggung dan backdrop event profesional dengan desain visual menarik dan konstruksi berkualitas.",
    url: process.env.NEXT_PUBLIC_URL + "/stage-&-backdrop-event",
    siteName: "BiDrop Production",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url:
          process.env.NEXT_PUBLIC_URL +
          "/Stage & Backdrop/Stage dan Backdrop Event (1).png",
        width: 1200,
        height: 630,
        alt: "Stage dan Backdrop Event BiDrop Production",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Jasa Stage & Backdrop Event | BiDrop Production",
    description:
      "Vendor profesional pembuatan stage dan backdrop event untuk berbagai acara.",
    images: [
      process.env.NEXT_PUBLIC_URL +
        "/Stage & Backdrop/Stage dan Backdrop Event (1).png",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const StagePage = () => {
  return <StageView />;
};

export default StagePage;
