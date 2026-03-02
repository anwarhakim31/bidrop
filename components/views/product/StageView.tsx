"use client";

import CTAview from "@/components/views/home/cta";
import { product2Schema } from "@/lib/schema";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Fragment, useEffect, useRef } from "react";

const StageView = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
        },
        opacity: 0,
        y: 60,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
        },
        opacity: 0,
        y: 60,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Fragment>
      <section ref={sectionRef} className="containers my-20 md:my-28">
        <div className="header w-10 mb-4 h-1.5  mx-auto bg-linear-to-r  from-orange-300 to-orange-500"></div>
        <h3 className="header lora text-2xl md:text-3xl font-semibold text-sec text-center">
          Stage & Backdrop Event
        </h3>
        <p className="header text-sm md:text-base text-center font-base text-sec mt-10 md:mt-8 max-w-2xl mx-auto">
          Stage dan backdrop menjadi pusat visual sekaligus pusat aktivitas
          dalam sebuah acara. Stage berfungsi sebagai panggung utama tempat
          berlangsungnya aktivitas inti seperti presentasi, seminar, talkshow,
          hiburan, peluncuran produk, hingga seremoni resmi. Backdrop sendiri
          adalah elemen visual di belakang panggung yang berfungsi sebagai
          identitas acara, media branding sponsor, sekaligus memperkuat tema
          visual.
        </p>
        <div className="mt-12 grid grid-cols-4 md:grid-cols-12    gap-2 ">
          {children}
        </div>

        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(product2Schema),
          }}
        />
      </section>
      <CTAview />
    </Fragment>
  );
};

export default StageView;
