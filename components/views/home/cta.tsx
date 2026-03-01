"use client";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const CTAview = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });

      tl.from(".contact-box", {
        scale: 0.7,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      })
        .from(
          ".cta-text",
          {
            x: -80,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.3",
        )
        .from(
          ".cta-btn",
          {
            x: 80,
            opacity: 0,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.5",
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mt-16 md:mt-32 pb-18 md:pb-24 p-4">
      <div className="contact-box containers p-8 md:py-8 md:px-28  gap-8 bg-linear-to-r flex items-center justify-between flex-col  lg:flex-row  from-orange-500 to-orange-400  rounded-2xl w-full">
        <div className="cta-text">
          <h3 className="text-white text-xl md:text-2xl font-bold">
            Siap Mewujudkan Event Impian Anda?
          </h3>
          <h4 className="text-sm md:text-base text-white mt-2">
            Konsultasikan kebutuhan desain dan pembangunan booth event Anda{" "}
            <br />
            bersama tim profesional kami.
          </h4>
        </div>
        <div className="cta-btn relative z-10 h-38 lg:h-48 grid place-items-center ">
          <Image
            src="/cta.png"
            className="absolute object-contain w-32 h-32 -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  "
            width={96}
            height={96}
            alt="whatsapp"
            priority
          />
          <Link
            href={"https://wa.me/" + process.env.NEXT_PUBLIC_WA}
            target="_blank"
            className="bg-[#143555] px-10 transition-all duration-300 ease-in-out hover:bg-slate-700 cursor-pointer py-3 rounded-md text-sm md:text-base text-white font-semibold"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTAview;
