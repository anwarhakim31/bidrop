import ImageGalery from "@/components/fragments/imagegallery";
import GaleriView from "@/components/views/galeri/galeriview";
import getBase64 from "@/lib/getlocalbase64";
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
  return (
    <GaleriView>
      {Array.from({ length: 20 }).map(async (_, index) => {
        const blurData = await getBase64(
          `https://ik.imagekit.io/z2imqerkk1/bidrop/Galeri/galeri-event (${index + 1}).png`,
        );

        return (
          <div key={index} className="col-span-2  md:col-span-6 lg:col-span-3">
            <ImageGalery
              index={index}
              imageURL="https://ik.imagekit.io/z2imqerkk1/bidrop/Galeri/galeri-event"
              totalIndex={20}
              blurData={blurData}
            />
          </div>
        );
      })}
    </GaleriView>
  );
};

export default GaleriPage;
