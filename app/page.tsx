import type { Metadata } from "next";
import AboutView from "@/components/views/AboutView";
import CTAview from "@/components/views/home/cta";
import GaleriView from "@/components/views/home/galeriview";
import HeroView from "@/components/views/home/heroview";
import WwwView from "@/components/views/home/wwwview";
import { homeSchema } from "@/lib/schema";
import { Fragment } from "react/jsx-runtime";
import ImageGalery from "@/components/fragments/imagegallery";
import getBase64 from "@/lib/getlocalbase64";
import Image from "next/image";
import Link from "next/link";
import { whatwework } from "@/utils/constants";

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

export default async function Home() {
  const blurDataHome = await getBase64(
    "https://ik.imagekit.io/z2imqerkk1/bidrop/home.webp",
  );

  return (
    <Fragment>
      <main>
        <HeroView>
          <Image
            src="https://ik.imagekit.io/z2imqerkk1/bidrop/home.webp"
            placeholder="blur"
            blurDataURL={blurDataHome}
            alt="Background BiDrop Production"
            fill
            priority
            className="object-cover brightness-60"
          />
        </HeroView>
        <AboutView />
        <WwwView>
          {whatwework.map(async (item, index) => {
            const blurData = await getBase64(item.image);

            return (
              <Link
                href={`/${item.slug}`}
                key={index}
                aria-label={item.title}
                prefetch
                className=" www-card rounded-md w-full h-full border shadow-sm border-gray-300 hover:border-orange-400 transition-[border] duration-300 ease-in-out p-2"
              >
                <figure className="aspect-4/3">
                  <Image
                    src={item.image}
                    width={1200}
                    height={200}
                    priority
                    placeholder="blur"
                    blurDataURL={blurData}
                    alt="Kerajinan tangan tradisional buatan pengrajin lokal"
                    className=" w-full h-full "
                  />
                  <figcaption className="mt-2.5 text-sm font-semibold text-orange-400">
                    {item.title}
                  </figcaption>
                </figure>
              </Link>
            );
          })}
        </WwwView>
        <GaleriView>
          {Array.from({ length: 8 }).map(async (_, index) => {
            const blurData = await getBase64(
              `https://ik.imagekit.io/z2imqerkk1/bidrop/home/kontraktor Booth dan Jasa Design Booth (${index + 1}).png`,
            );
            return (
              <div
                key={index}
                className=" col-span-2  md:col-span-6 lg:col-span-3"
              >
                <ImageGalery
                  blurData={blurData}
                  index={index}
                  imageURL="https://ik.imagekit.io/z2imqerkk1/bidrop/home/kontraktor Booth dan Jasa Design Booth"
                  totalIndex={8}
                />
              </div>
            );
          })}
        </GaleriView>
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
