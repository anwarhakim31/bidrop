"use client";

import { gallerySchema } from "@/lib/schema";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import { useLayoutEffect, useRef } from "react";

const GaleriView = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".galeri-header", {
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

      gsap.from(".galeri-card", {
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
    <section ref={sectionRef} className="containers my-20 md:my-28">
      <div className="galeri-header w-10 mb-4 h-1.5  mx-auto bg-linear-to-r  from-orange-300 to-orange-500"></div>
      <h3 className="galeri-header lora text-2xl md:text-3xl font-semibold text-sec text-center">
        Galeri
      </h3>
      <p className="galeri-header text-sm md:text-base text-center  text-sec mt-4 max-w-2xl mx-auto">
        Dokumentasi hasil desain dan pengerjaan booth event yang telah kami
        kerjakan untuk berbagai brand dan kebutuhan pameran.
      </p>
      <div className="mt-12 grid grid-cols-4 md:grid-cols-12    gap-2 ">
        {children}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(gallerySchema),
        }}
      />
    </section>
  );
};

export default GaleriView;
