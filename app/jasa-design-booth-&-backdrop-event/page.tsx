import ImageGalery from "@/components/fragments/imagegallery";
import JasaDesignView from "@/components/views/product/JasaDesignView";
import getBase64 from "@/lib/getlocalbase64";
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
  return (
    <JasaDesignView>
      {Array.from({ length: 8 }).map(async (_, index) => {
        const blurData = await getBase64(
          `https://ik.imagekit.io/z2imqerkk1/bidrop/Galeri/galeri-event (${index + 1}).png`,
        );

        return (
          <div key={index} className=" col-span-2  md:col-span-6 lg:col-span-3">
            <ImageGalery
              blurData={blurData}
              index={index}
              imageURL="https://ik.imagekit.io/z2imqerkk1/bidrop/Galeri/galeri-event"
              totalIndex={8}
            />
          </div>
        );
      })}
    </JasaDesignView>
  );
}
