"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ChevronRight } from "lucide-react";

import Link from "next/link";
import { useEffect, useRef } from "react";

const GaleriView = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="containers  ">
      <div className="galeri-header w-10 mb-4 h-1.5 mx-auto bg-linear-to-r  from-orange-300 to-orange-500"></div>
      <h3 className="galeri-header lora text-2xl md:text-3xl font-semibold text-sec text-center">
        Galeri
      </h3>
      <div className="mt-12 grid grid-cols-4 md:grid-cols-12  gap-2 ">
        {children}
      </div>
      <Link
        href="/galeri"
        aria-label="lihat semua galeri"
        prefetch
        className="galeri-header flex justify-end text-sm font-medium hover:text-orange-500 transition-[color] duration-300 ease-in-out text-prim  items-center mt-8"
      >
        <span>Lihat Semua</span>
        <ChevronRight size={20} />
      </Link>
    </section>
  );
};

export default GaleriView;
