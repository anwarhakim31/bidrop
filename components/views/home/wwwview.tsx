"use client";
import { whatwework } from "@/utils/constants";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

const WwwView = () => {
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
        {whatwework.map((item, index) => (
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
                blurDataURL="/blur.jpg"
                alt="Kerajinan tangan tradisional buatan pengrajin lokal"
                className=" w-full h-full "
              />
              <figcaption className="mt-2.5 text-sm font-semibold text-orange-400">
                {item.title}
              </figcaption>
            </figure>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default WwwView;
