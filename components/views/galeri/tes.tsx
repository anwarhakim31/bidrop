"use client";

import { gallerySchema } from "@/lib/schema";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const GaleriView = () => {
  const sectionRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    index: 0,
    url: "",
    title: "",
  });

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
        duration: 1,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleOpen = (index: number) => {
    if (!isOpen) setIsOpen(true);
    setData({
      index: index + 1,
      url: `/Gallery/galeri-event (${index + 1}).png`,
      title: `galeri-event (${index + 1})`,
    });
  };

  const handleNext = (index: number) => {
    if (index < 20) {
      setData({
        index: index + 1,
        url: `/Gallery/galeri-event (${index + 1}).png`,
        title: `galeri-event (${index + 1})`,
      });
    } else {
      setData({
        index: 1,
        url: `/Gallery/galeri-event (1).png`,
        title: `galeri-event (20)`,
      });
    }
  };

  const handlePrev = (index: number) => {
    if (index > 1) {
      setData({
        index: index - 1,
        url: `/Gallery/galeri-event (${index - 1}).png`,
        title: `galeri-event (${index - 1})`,
      });
    } else {
      setData({
        index: 20,
        url: `/Gallery/galeri-event (20).png`,
        title: `galeri-event (20)`,
      });
    }
  };
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
        {Array.from({ length: 20 }).map((_, index) => (
          <div key={index} className=" col-span-2  md:col-span-6 lg:col-span-3">
            <button
              aria-label={`galeri event (${index + 1})`}
              onClick={() => handleOpen(index)}
              className="galeri-card w-full rounded-md border cursor-pointer shadow-sm border-gray-300 hover:border-orange-400 transition-[border] duration-300 ease-in-out p-2"
            >
              <figure className="aspect-4/3">
                <Image
                  src={`/Gallery/galeri-event (${index + 1}).png`}
                  width={1200}
                  height={400}
                  alt={`galeri-event (${index + 1})`}
                  className=" w-full h-full"
                  priority
                  placeholder="blur"
                  blurDataURL="/blur.jpg"
                />
              </figure>
            </button>
          </div>
        ))}
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
