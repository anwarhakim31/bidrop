"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/schema";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { Instagram, Mail, Phone } from "lucide-react";

import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";

const KontakView = () => {
  const sectionRef = React.useRef(null);
  const [formData, setFormData] = useState<{
    email: string;
    subject: string;
    message: string;
  }>({
    email: "",
    subject: "",
    message: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(".contact-header", {
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

      gsap.from(".contact-card", {
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

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setLoading(true);
    e.preventDefault();

    try {
      const res = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }
      setSuccess(data.message);
      const timeout = setTimeout(() => {
        setSuccess(null);
      }, 5000);
      setFormData({ email: "", subject: "", message: "" });
      return () => clearTimeout(timeout);
    } catch (error) {
      setError(error as string);
      const timeout = setTimeout(() => {
        setError(null);
      }, 5000);
      return () => clearTimeout(timeout);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Fragment>
      <section ref={sectionRef} className="containers my-20 md:my-28">
        <div className=" contact-header w-10 mb-4 h-1.5  mx-auto bg-linear-to-r  from-orange-300 to-orange-500"></div>
        <h3 className="contact-header lora text-2xl md:text-3xl font-semibold text-sec text-center">
          Kontak
        </h3>
        <p className="contact-header text-sm md:text-base text-center  text-sec mt-4 max-w-2xl mx-auto">
          Tim kami siap membantu Anda merencanakan dan mewujudkan booth event
          terbaik sesuai kebutuhan brand dan anggaran Anda. Hubungi kami
          sekarang untuk konsultasi gratis.
        </p>
        <div className="flex flex-col  lg:flex-row justify-center gap-4 mt-10 break-all">
          <div className="grid grid-cols-2 md:grid-cols-2   gap-4 w-full lg:w-1/2  text-center">
            <div className="contact-card grid place-items-center w-full bg-prim p-4 md:p-8 rounded-xl shadow-lg">
              <div className="grid place-items-center">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sec grid place-items-center cursor-pointer group"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      process.env.NEXT_PUBLIC_TLP || "",
                    );
                  }}
                >
                  <Phone className="fill-white text-sec h-10 w-10 md:h-12 md:w-12 group-hover:rotate-15 transition-all duration-300 ease-in-out" />
                </div>
                <h5 className="text-white text-sm md:text-base font-bold mt-2">
                  Telepon
                </h5>
                <p className="text-white text-xs md:text-base font-medium mt-1 break-all text-center">
                  +{process.env.NEXT_PUBLIC_TLP}
                </p>
              </div>
            </div>

            <div className="contact-card grid place-items-center w-full bg-prim p-4 md:p-8 rounded-xl shadow-lg">
              <div className="grid place-items-center">
                <button
                  aria-label="Salin Whatsapp"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sec grid place-items-center cursor-pointer group"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      process.env.NEXT_PUBLIC_WA || "",
                    );
                  }}
                >
                  <Image
                    src="/wa.svg"
                    width={20}
                    height={20}
                    alt="whatsapp"
                    className="fill-white text-sec h-10 w-10 md:h-12 md:w-12 group-hover:rotate-15 transition-all duration-300 ease-in-out"
                  />
                </button>
                <h5 className="text-white text-sm md:text-base font-bold mt-2">
                  Whatsapp
                </h5>
                <p className="text-white text-xs md:text-base font-medium mt-1 break-all text-center">
                  {process.env.NEXT_PUBLIC_WA}
                </p>
              </div>
            </div>
            <div className="contact-card grid place-items-center w-full bg-prim p-4 md:p-8 rounded-xl shadow-lg">
              <div className="grid place-items-center">
                <button
                  aria-label="Salin Email"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sec grid place-items-center cursor-pointer group"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      process.env.NEXT_PUBLIC_EMAIL || "",
                    );
                  }}
                >
                  <Mail className=" text-white h-10 w-10 md:h-12 md:w-12 group-hover:rotate-15 transition-all duration-300 ease-in-out" />
                </button>
                <h5 className="text-white text-sm md:text-base font-bold mt-2">
                  Email
                </h5>
                <p className="text-white text-xs md:text-base font-medium mt-1 break-all text-center">
                  {process.env.NEXT_PUBLIC_EMAIL}
                </p>
              </div>
            </div>
            <div className="contact-card grid place-items-center w-full bg-prim p-4 md:p-8 rounded-xl shadow-lg">
              <div className="grid place-items-center">
                <button
                  aria-label="Salin Instagram"
                  className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-sec grid place-items-center cursor-pointer group"
                  onClick={() => {
                    navigator.clipboard.writeText(
                      process.env.NEXT_PUBLIC_IG || "",
                    );
                  }}
                >
                  <Instagram className="fill-white text-sec h-10 w-10 md:h-12 md:w-12 group-hover:rotate-15 transition-all duration-300 ease-in-out" />
                </button>
                <h5 className="text-white text-sm md:text-base font-bold mt-2">
                  Instagram
                </h5>
                <p className="text-white text-xs md:text-base font-medium mt-1 break-all text-center">
                  {process.env.NEXT_PUBLIC_IG}
                </p>
              </div>
            </div>
          </div>
          <div className="contact-card w-full lg:w-1/2 bg-prim   p-4 md:p-8 rounded-xl shadow-lg">
            <h5 className="text-white text-base md:text-lg font-medium">
              Kirim Pesan
            </h5>
            <form onSubmit={handleSubmit}>
              <Input
                type="email"
                name="email"
                disabled={loading}
                id="email"
                onChange={changeHandler}
                value={formData.email}
                placeholder="Email Anda"
                className="mt-4 bg-white h-12 placeholder:text-sm md:placeholder:text-sm text-sm md:text-sm"
                autoComplete="off"
                required
              />
              <Input
                type="text"
                name="subject"
                id="subject"
                disabled={loading}
                onChange={changeHandler}
                value={formData.subject}
                placeholder="Subject"
                className="mt-4 bg-white h-12 placeholder:text-sm md:placeholder:text-sm text-sm md:text-sm"
                autoComplete="off"
                required
              />
              <Textarea
                name="message"
                id="message"
                onChange={changeHandler}
                value={formData.message}
                disabled={loading}
                placeholder="Pesan Anda"
                className="mt-4 bg-white resize-none h-40 placeholder:text-sm md:placeholder:text-sm text-sm md:text-sm"
                autoComplete="off"
                required
              />
              {success || error ? (
                <div
                  role="notification"
                  className={`bg-green-500 rounded-md p-2 mt-4  w-full `}
                >
                  <span className="text-center block text-white">
                    {success ? "Berhasil Mengirim Pesan" : error}
                  </span>
                </div>
              ) : null}
              <Button
                type="submit"
                aria-label="kirim pesan"
                disabled={loading}
                className="w-full bg-sec h-12 mt-4 hover:bg-slate-700 cursor-pointer transition-all duration-300 ease-in-out"
              >
                {loading ? "Loading..." : "Kirim"}
              </Button>
            </form>
          </div>
        </div>
      </section>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactSchema),
        }}
      />
    </Fragment>
  );
};

export default KontakView;
