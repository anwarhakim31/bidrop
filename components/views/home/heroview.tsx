"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroView() {
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-animate", {
        opacity: 0,
        y: 60,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
      });
    }, container);

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-screen h-100 md:min-h-screen">
      <Image
        src="/home.png"
        width={1920}
        height={1080}
        alt="BiDrop Production"
        className="absolute aspect-video w-full h-full object-cover z-10 brightness-60"
        priority
        rel="preload"
      />

      <div ref={container} className="absolute inset-0 z-20 p-4">
        <div className="w-full h-full flex flex-col items-center justify-center">
          <h1 className="hero-animate text-3xl lora md:text-6xl font-bold text-white">
            BiDrop Production
          </h1>

          <h2 className="hero-animate text-lg lora md:text-xl text-center font-semibold max-w-2xl text-white mt-4">
            Kontraktor Booth Event dan Jasa Design Booth Event
          </h2>

          <Link
            href="https://wa.me/628123456789"
            target="_blank"
            className="hero-animate  rounded-sm mt-8 shadow-[0_3px_0px_1px] shadow-orange-400 hover:shadow-green-300 border border-green-500 bg-green-500 transition-shadow duration-300 ease-in-out flex py-2 px-4 justify-center items-center gap-2"
          >
            <Image src="/wa.svg" width={20} height={20} alt="whatsapp" />
            <span className="text-white text-sm md:text-base font-semibold">
              Konsultasi Sekarang!
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
