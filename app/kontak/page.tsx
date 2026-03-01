import KontakView from "@/components/views/contact/kontakview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontak",
  description:
    "Hubungi BiDrop Production untuk informasi lebih lanjut tentang layanan desain dan produksi booth pameran profesional.",
  alternates: {
    canonical: "/kontak",
  },
  openGraph: {
    title: "Kontak BiDrop Production",
    description:
      "Hubungi BiDrop Production untuk informasi lebih lanjut tentang layanan desain dan produksi booth pameran profesional.",
    url: "/kontak",
    type: "article",
  },
  keywords: [
    "kontak bidrop production",
    "kontak kontraktor booth",
    "kontak jasa booth pameran",
    "kontak vendor booth event",
  ],
};

const KontakPage = () => {
  return <KontakView />;
};

export default KontakPage;
