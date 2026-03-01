import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";
import CTAview from "@/components/views/home/cta";
import GaleriView from "@/components/views/home/galeriview";
import HeroView from "@/components/views/home/heroview";
import WwwView from "@/components/views/home/wwwview";
import { homeSchema } from "@/lib/schema";
import { Fragment } from "react/jsx-runtime";

export const metadata: Metadata = {
  title: "BiDrop Production",
  description:
    "BiDrop Production adalah kontraktor booth event profesional dan jasa desain booth pameran terpercaya di Indonesia.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "BiDrop Production",
    description:
      "Kontraktor booth event profesional dan jasa desain booth pameran terpercaya.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <Fragment>
      <main>
        <HeroView />
        <AboutView />
        <WwwView />
        <GaleriView />
        <CTAview />
      </main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeSchema),
        }}
      />
    </Fragment>
  );
}
