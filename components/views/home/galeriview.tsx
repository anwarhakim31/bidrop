"use client";
import LightBox from "@/components/fragments/lightbox";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const GaleriView = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
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
        duration: 0.5,
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
      url: `/HomeGallery/Kontraktor Booth dan Jasa Design Booth (${index + 1}).png`,
      title: `Kontraktor Booth dan Jasa Design Booth (${index + 1})`,
    });
  };

  const handleNext = (index: number) => {
    if (index < 8) {
      setData({
        index: index + 1,
        url: `/HomeGallery/Kontraktor Booth dan Jasa Design Booth (${index + 1}).png`,
        title: `Kontraktor Booth dan Jasa Design Booth (${index + 1})`,
      });
    } else {
      setData({
        index: 1,
        url: `/HomeGallery/Kontraktor Booth dan Jasa Design Booth (1).png`,
        title: `Kontraktor Booth dan Jasa Design Booth (1)`,
      });
    }
  };

  const handlePrev = (index: number) => {
    if (index > 1) {
      setData({
        index: index - 1,
        url: `/HomeGallery/Kontraktor Booth dan Jasa Design Booth (${index - 1}).png`,
        title: `Kontraktor Booth dan Jasa Design Booth (${index - 1})`,
      });
    } else {
      setData({
        index: 8,
        url: `/HomeGallery/Kontraktor Booth dan Jasa Design Booth (8).png`,
        title: `Kontraktor Booth dan Jasa Design Booth (8)`,
      });
    }
  };

  return (
    <section ref={sectionRef} className="containers  ">
      <div className="galeri-header w-10 mb-4 h-1.5 mx-auto bg-linear-to-r  from-orange-300 to-orange-500"></div>
      <h3 className="galeri-header lora text-2xl md:text-3xl font-semibold text-sec text-center">
        Galeri
      </h3>
      <div className="mt-12 grid grid-cols-4 md:grid-cols-12    gap-2 ">
        {Array.from({ length: 8 }).map((_, index) => (
          <div key={index} className=" col-span-2  md:col-span-6 lg:col-span-3">
            <button
              aria-label={`booth event (${index + 1})`}
              onClick={() => handleOpen(index)}
              className="galeri-card rounded-md border cursor-pointer shadow-sm border-gray-300 hover:border-orange-400 transition-[border] duration-300 ease-in-out p-2"
            >
              <figure className="aspect-4/3 ">
                <Image
                  src={`/HomeGallery/Kontraktor Booth dan Jasa Design Booth (${index + 1}).png`}
                  width={1200}
                  height={500}
                  alt={`Kontraktor Booth dan Jasa Design Booth (${index + 1})`}
                  className=" w-full h-full "
                  placeholder="blur"
                  blurDataURL="/blur.jpg"
                  priority
                />
              </figure>
            </button>
          </div>
        ))}
      </div>
      <Link
        href="/galeri"
        className="galeri-header flex justify-end text-sm font-medium hover:text-orange-500 transition-[color] duration-300 ease-in-out text-prim  items-center mt-8"
      >
        <span>Lihat Semua</span>
        <ChevronRight size={20} />
      </Link>
      {isOpen && (
        <LightBox
          isOpen
          total={8}
          data={data}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </section>
  );
};

export default GaleriView;
