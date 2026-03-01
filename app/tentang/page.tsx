import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";

export const metadata: Metadata = {
  title: "Tentang",
  description:
    "Kenali BiDrop Production, kontraktor booth event profesional yang berpengalaman dalam desain dan produksi booth pameran berkualitas tinggi.",
  alternates: {
    canonical: "/tentang",
  },
  openGraph: {
    title: "Tentang BiDrop Production",
    description:
      "Profil BiDrop Production sebagai kontraktor booth event terpercaya dengan layanan desain dan produksi booth pameran profesional.",
    url: "/tentang",
    type: "article",
  },
  keywords: [
    "tentang bidrop production",
    "profil kontraktor booth",
    "jasa booth pameran",
    "vendor booth event",
  ],
};

const TentangPage = () => {
  return (
    <main>
      <AboutView />
    </main>
  );
};

export default TentangPage;
