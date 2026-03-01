import GaleriView from "@/components/views/galeri/galeriview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galeri",
  description:
    "Galeri dokumentasi hasil desain dan pengerjaan booth event profesional dari BiDrop Production untuk berbagai brand dan pameran.",
  keywords: [
    "galeri booth",
    "portfolio booth event",
    "hasil booth pameran",
    "desain booth exhibition",
    "kontraktor booth portfolio",
  ],
  alternates: {
    canonical: "/galeri",
  },
  openGraph: {
    title: "Galeri Booth Event | BiDrop Production",
    description:
      "Lihat hasil desain dan produksi booth pameran profesional yang telah kami kerjakan.",
    url: "/galeri",
    type: "website",
    images: [
      {
        url: "/Gallery/galeri-event (1).png",
        width: 1200,
        height: 630,
        alt: "Portfolio Booth Event",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Galeri Booth Event",
    description:
      "Portfolio hasil desain booth pameran profesional dari BiDrop Production.",
    images: ["/Gallery/galeri-event (1).png"],
  },
};

const GaleriPage = () => {
  return <GaleriView />;
};

export default GaleriPage;
