"use client";
import { ChevronUp, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";

const Navigation = () => {
  const [isScroll, setIsScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsOpen(window.scrollY > 0);
      setIsScroll(window.scrollY > 100);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Fragment>
      {isOpen && (
        <div
          className={`fixed top-1/2  right-0  z-10 transition-opacity duration-300 ease-in-out  ${
            isScroll
              ? "opacity-100 pointer-events-auto"
              : " opacity-0 pointer-events-none"
          }`}
        >
          <Link
            href={"https://wa.me/" + process.env.NEXT_PUBLIC_WA}
            target="__blank"
            className={`mb-2 bg-green-400 p-2 rounded-md flex items-center shadow-xl justify-center`}
          >
            <Image
              priority
              src="/wa.svg"
              width={25}
              height={25}
              alt="whatsapp"
            />
          </Link>
          <Link
            href={"tel:" + process.env.NEXT_PUBLIC_TLP}
            target="__blank"
            className={`mb-2 bg-blue-600 flex items-center  rounded-md p-2  shadow-xl justify-center`}
          >
            <Phone className=" w-6 h-6 fill-white text-blue-600" />
          </Link>
        </div>
      )}
      {isOpen && (
        <button
          className={`fixed bottom-4  right-4 bg-sec transition-opacity duration-300 ease-in-out p-3 cursor-pointer rounded-full z-50 ${
            isScroll
              ? "opacity-100 pointer-events-auto"
              : " opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll to top"
          onClick={scrollToTop}
        >
          <ChevronUp className="w-6 h-6 text-white" />
        </button>
      )}
    </Fragment>
  );
};

export default Navigation;
