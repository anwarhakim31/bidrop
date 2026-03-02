"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";

const WwwView = ({ children }: { children: React.ReactNode }) => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".www-header", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
        },
        opacity: 0,
        x: -100,
        duration: 0.5,
        stagger: 0.1,
        ease: "power3.out",
      });

      gsap.from(".www-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
        },
        opacity: 0,
        x: -100,
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="containers mb-20 md:mb-32">
      <div className="www-header w-10 mb-4 h-1.5   bg-linear-to-r  from-orange-300 to-orange-500"></div>
      <h3 className="www-header lora text-2xl md:text-3xl font-semibold text-sec ">
        Apa yang Kami Kerjakan
      </h3>
      <div className="mt-12 grid grid-cols-1  lg:grid-cols-3 gap-6 ">
        {children}
      </div>
    </section>
  );
};

export default WwwView;
