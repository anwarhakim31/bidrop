"use client";
import { aboutSchema } from "@/lib/schema";
import {
  Award,
  CircleCheckBig,
  CircleStar,
  Flag,
  Lightbulb,
  ShieldUser,
} from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AboutView = () => {
  const params = usePathname();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 100%",
        },
      });

      tl.from(".about-animate", {
        opacity: 0,
        y: 60,
        duration: 0.5,
        ease: "power3.out",
        stagger: 0.1,
      })
        .from(".about-animate-2", {
          opacity: 0,
          x: -50,
          duration: 0.25,
          ease: "power3.out",
          stagger: 0.1,
        })
        .from(".about-animate-3", {
          opacity: 0,
          y: 60,
          duration: 0.25,
          ease: "power3.out",
          stagger: 0.1,
        })
        .from(".about-animate-4", {
          opacity: 0,
          x: +50,
          duration: 0.25,
          stagger: 0.1,
          ease: "power3.out",
        })
        .from(".about-animate-5", {
          opacity: 0,
          y: 60,
          duration: 0.5,
          ease: "power3.out",
          stagger: 0.1,
        });

      // const hl = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: sectionRef.current,
      //     start: "top 100%",
      //   },
      // });

      // hl.from(".about-animate-6", {
      //   opacity: 0,
      //   y: 60,
      //   duration: 0.5,
      //   ease: "power3.out",
      //   stagger: 0.1,
      // });

      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 90%",
        },
        opacity: 0,
        x: -1000,
        duration: 2.5,
        stagger: 0.1,
        ease: "power3.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  return (
    <Fragment>
      <section
        ref={sectionRef}
        className={`${params === "/tentang" ? "my-20 md:my-28" : "my-20 md:my-32"}`}
      >
        <div className="about-animate w-10 mb-4 h-1.5 mx-auto bg-linear-to-r from-orange-300 to-orange-500"></div>

        <h3 className="about-animate lora text-2xl md:text-3xl font-semibold text-sec text-center">
          {params === "/tentang" ? "Tentang" : " Mengenal BiDrop Production"}
          {params !== "/tentang" && <br />}
        </h3>

        <div className="containers mt-12 grid grid-cols-1 lg:grid-cols-2 items-center justify-items-center gap-12 md:gap-12 lg:gap-4">
          <div className="">
            <h4 className="about-animate-2 text-xl md:text-2xl font-semibold text-sec">
              BiDrop Production
            </h4>

            <p className="about-animate-2 mt-4 text-justify text-sm md:text-base text-sec">
              Kami adalah perusahaan{" "}
              <span className="font-medium">
                kontraktor dan jasa design booth Event
              </span>{" "}
              yang berdedikasi untuk memberikan solusi kreatif dan inovatif
              untuk
              <span className="font-medium"> pameran dan event Anda</span>.
            </p>

            <br />

            <p className="about-animate-2 text-sm text-justify md:text-base text-sec">
              Kami memiliki tim profesional yang siap untuk membantu Anda
              menciptakan pesona unik dan memaksimalkan potensi pameran Anda.
            </p>

            <div className="flex justify-center flex-col md:flex-row mt-10 gap-10 md:gap-4">
              <div className="about-animate-3 w-full shadow-lg">
                <div className="w-full flex items-center px-4 py-2 gap-2 bg-linear-to-r from-orange-400 to-orange-500">
                  <CircleStar size={20} className="text-white" />
                  <h3 className="text-white font-medium text-lg">Visi</h3>
                </div>
                <div className="mx-4 py-4">
                  <p className="text-sec text-sm md:text-base">
                    Menjadi mitra terbaik dalam pembuatan booth event yang
                    berkualitas dan memukau.
                  </p>
                </div>
              </div>

              <div className="about-animate-3 w-full shadow-lg">
                <div className="w-full flex items-center px-4 py-2 gap-2 bg-linear-to-r from-orange-400 to-orange-500">
                  <Flag size={20} className="text-white fill-white" />
                  <h3 className="text-white font-medium text-lg">Misi</h3>
                </div>

                {[
                  "Memberikan desain kreatif dan fungsional",
                  "tepat waktu dan profesional",
                  "kepuasan pelanggan adalah prioritas kami",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-2 mx-4 py-4 border-y last:border-none"
                  >
                    <div className="w-6 h-6 mt-1">
                      <CircleCheckBig className="text-sec" size={20} />
                    </div>
                    <p className="text-sec text-sm md:text-base">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Image
            src="/about1.png"
            width={1000}
            height={1000}
            alt="about"
            priority
            rel="preload"
            className="about-animate-4 w-full"
          />
        </div>

        {/* bottom cards */}
        <div className="about-card bg-prim w-full mt-20 md:mt-32 py-8 md:py-10">
          <div className=" containers grid grid-cols-1 gap-3 lg:grid-cols-3">
            {[
              {
                icon: (
                  <ShieldUser
                    size={40}
                    className="fill-orange-400 text-white"
                  />
                ),
                title: "Komitmen",
                text: "Kami berkomitmen penuh terhadap kualitas pekerjaan dan kepuasan klien di setiap proyek.",
              },
              {
                icon: <Award size={40} className="text-prim" />,
                title: "Profesional",
                text: "Dikerjakan oleh tim profesional dan berpengalaman di bidang desain & kontraktor booth event.",
              },
              {
                icon: <Lightbulb size={40} className="text-prim" />,
                title: "Solusi Terbaik",
                text: "Memberikan solusi booth event terbaik sesuai kebutuhan, konsep, dan anggaran Anda.",
              },
            ].map((item, i) => (
              <div key={i} className="about-animate-5 flex py-4 md:py-10 gap-4">
                <div className="w-20 h-20 rounded-full bg-white grid place-items-center">
                  {item.icon}
                </div>
                <div className="flex-1">
                  <h5 className="text-lg md:text-xl mb-1 font-semibold text-white">
                    {item.title}
                  </h5>
                  <p className="text-white text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {params === "/tentang" && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
        />
      )}
    </Fragment>
  );
};

export default AboutView;
