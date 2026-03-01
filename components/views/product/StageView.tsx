"use client";
import LightBox from "@/components/fragments/lightbox";
import CTAview from "@/components/views/home/cta";
import { product2Schema } from "@/lib/schema";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import Image from "next/image";

import { Fragment, useEffect, useRef, useState } from "react";

const StageView = () => {
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

  const handleOpen = (index: number) => {
    if (!isOpen) setIsOpen(true);
    setData({
      index: index + 1,
      url: `/Stage dan Backdrop/Stage dan Backdrop Event (${index + 1}).png`,
      title: `Stage dan Backdrop Event (${index + 1})`,
    });
  };

  const handleNext = (index: number) => {
    if (index < 8) {
      setData({
        index: index + 1,
        url: `/Stage dan Backdrop/Stage dan Backdrop Event (${index + 1}).png`,
        title: `Stage dan Backdrop Event (${index + 1})`,
      });
    } else {
      setData({
        index: 1,
        url: `/Stage dan Backdrop/Stage dan Backdrop Event (1).png`,
        title: `Stage dan Backdrop Event (1)`,
      });
    }
  };

  const handlePrev = (index: number) => {
    if (index > 1) {
      setData({
        index: index - 1,
        url: `/Stage dan Backdrop/Stage dan Backdrop Event (${index - 1}).png`,
        title: `Stage dan Backdrop Event (${index - 1})`,
      });
    } else {
      setData({
        index: 8,
        url: `/Stage dan Backdrop/Stage dan Backdrop Event (8).png`,
        title: `Stage dan Backdrop Event (8)`,
      });
    }
  };
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
          {Array.from({ length: 8 }).map((_, index) => (
            <div
              key={index}
              className=" col-span-2  md:col-span-6 lg:col-span-3"
            >
              <button
                aria-label={`booth event (${index + 1})`}
                onClick={() => handleOpen(index)}
                className="card rounded-md border w-full h-full cursor-pointer shadow-sm border-gray-300 hover:border-orange-400 transition-[border] duration-300 ease-in-out p-2"
              >
                <figure className="aspect-4/3 ">
                  <Image
                    src={`/Stage dan Backdrop/Stage dan Backdrop Event (${index + 1}).png`}
                    width={1200}
                    height={500}
                    alt={`Stage dan Backdrop Event (${index + 1})`}
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

        {isOpen && (
          <LightBox
            total={8}
            isOpen
            data={data}
            handleNext={handleNext}
            handlePrev={handlePrev}
            handleClose={() => {
              setIsOpen(false);
            }}
          />
        )}
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
