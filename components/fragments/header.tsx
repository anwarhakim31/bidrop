"use client";
import { navheader, whatwework } from "@/utils/constants";
import { formatPhone } from "@/utils/helpers";
import { AlignJustify, ChevronDown, Phone, Send, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment, useEffect, useRef, useState } from "react";

const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isDelay, setIsDelay] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const [isDropDown, setIsDropDown] = useState(false);
  const [fixed, setFixed] = useState(false);

  const handleToggle = () => {
    setIsDelay(true);

    if (isDelay) return;

    const timeout = setTimeout(() => {
      setFixed(!fixed);
      setIsOpen(!isOpen);
      setIsDelay(false);
    }, 200);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsOpen(false);
      setFixed(false);
      if (currentScrollY > 60) {
        setIsActive(true);
      }

      if (currentScrollY < 100 && currentScrollY < lastScrollY) {
        setIsActive(false);
      }

      if (currentScrollY < 60 && currentScrollY < lastScrollY) {
        setIsActive(false);

        setFixed(false);
      }

      lastScrollY = currentScrollY;
    };
    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        setFixed(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <Fragment>
      <div className={` hidden md:block bg-prim  w-full `}>
        <div className="containers px-4 flex justify-between items-center py-2">
          <div className="flex gap-1 justify-center items-center">
            <Phone className="text-prim fill-white" size={16} />
            <span className="text-xs text-white font-medium">
              (+62) {formatPhone(process.env.NEXT_PUBLIC_TLP || "22").slice(2)}
            </span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <span className="text-xs text-white font-medium">
              Kontraktor Booth Event & Jasa Design Booth Event
            </span>
          </div>
          <div className="flex gap-1 justify-center items-center">
            <Send className="text-prim fill-white" size={18} />
            <span className="text-xs text-white font-medium">
              {process.env.NEXT_PUBLIC_EMAIL}
            </span>
          </div>
        </div>
      </div>

      <header
        ref={headerRef}
        className={`bg-white py-1 left-0 w-full z-50 ${fixed ? " fixed top-0 " : ""}    ${isActive && !fixed ? "shadow-md fixed top-0 " : ""} ${isActive ? "transition-all duration-300 ease-in-out animate-[drop_0.3s_ease-in-out]" : ""}  `}
      >
        <div className="containers relative flex items-center justify-between gap-3.5">
          <Link
            href="/"
            className="flex items-center justify-center "
            onClick={() => {
              setIsOpen(false);
              setFixed(false);
            }}
          >
            <Image
              src="/logo2.png"
              alt="BiDrop Logo"
              width={70}
              height={20}
              priority
              className="h-12 w-20 "
            />
            <span className="text-md text-[#0b3851] mt-1  font-bold">
              BiDrop Production
            </span>
          </Link>
          <nav
            className={`shadow-lg md:shadow-none flex items-center justify-center gap-6 fixed md:static transition-all z-999 duration-300 ease-in-out flex-col md:flex-row w-full md:w-auto   ${isOpen ? "bg-white top-13.75 z-10 left-0 " : "-left-full top-13.75"}  `}
          >
            {navheader.map((item) =>
              item.name === "Produk" ? (
                <div
                  onClick={() => {
                    if (innerWidth < 768) setIsDropDown(!isDropDown);
                  }}
                  onMouseEnter={() => setIsDropDown(true)}
                  onMouseLeave={() => setIsDropDown(false)}
                  className={`text-xs md:text-sm px-6 md:px-0 mt-4 md:ml-0 select-none w-full md:mt-0 cursor-pointer text-sec after:content-[''] after:w-12 after:h-6  after:absolute after:-bottom-6 after:left-0 after:-z-10 mr-auto font-semibold  relative`}
                  key={item.name}
                >
                  <div className="flex items-center justify-between">
                    <span>{item.name}</span>
                    <div className="block md:hidden">
                      <ChevronDown
                        className={`text-sec ${isDropDown ? "rotate-180" : ""} transform transition-all duration-500 ease-in-out`}
                        size={16}
                      />
                    </div>
                  </div>

                  <div
                    id="dropdown"
                    className={`md:absolute flex flex-col top-9.5 left-0 md:border md:before:absolute border-slate-800 md:before:w-4 md:before:h-4 md:before:bg-white md:before:-rotate-45 md:before:left-1.5 md:before:-top-[8.75px] md:before:0 z-10 md:before:border-t md:before:border-r md:before:border-black bg-white   gap-8 md:gap-4 md:p-2.5 min-w-48 w-full transition-all duration-700 md:duration-300 ease-in-out overflow-hidden md:overflow-visible ${
                      isDropDown
                        ? "md:opacity-100 md:translate-y-0 md:scale-100 pointer-events-auto max-h-screen"
                        : "md:opacity-0 md:-translate-y-2 md:scale-95 pointer-events-none max-h-0"
                    }`}
                  >
                    {whatwework.map((item, index) => (
                      <Link
                        key={index}
                        href={`/${item.slug}`}
                        aria-label={item.title}
                        prefetch
                        onClick={() => {
                          setIsOpen(false);
                          setFixed(false);
                        }}
                        className={`
                      hover:text-orange-400  
                      ${index === 0 ? "mt-8 md:mt-0 " : "mt-0"}
                      
                    `}
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  href={item.path}
                  key={item.name}
                  prefetch
                  onClick={() => {
                    setIsOpen(false);
                    setFixed(false);
                  }}
                  className={`text-xs md:text-sm pl-6 md:pl-0 mt-4 md:ml-0 md:mt-0  w-full mr-auto font-semibold block relative ${
                    pathname === item.path
                      ? "text-prim"
                      : "text-sec transition-colors duration-300 ease-in-out hover:text-orange-400 md:hover:text-slate-800 md:after:h-0.5 md:after:w-0 md:after:bg-orange-500 md:after:absolute md:after:-bottom-0.5 md:after:left-0 md:after:transition-all md:after:duration-300 md:after:ease-in-out hover:after:w-full "
                  }`}
                >
                  {item.name}
                </Link>
              ),
            )}
            <div className="bg-prim  w-full block md:hidden">
              {" "}
              <span className="text-xs text-white font-medium block text-center p-2.5">
                Kontraktor Booth Event & Jasa Design Booth Event
              </span>
            </div>
          </nav>
          <button
            type="button"
            aria-label="toggle menu"
            aria-expanded={isOpen}
            onClick={handleToggle}
            className="flex md:hidden justify-center items-center w-6 h-6 cursor-pointer"
          >
            {isOpen ? (
              <X className="text-prim" size={22} />
            ) : (
              <AlignJustify className="text-prim" size={20} />
            )}
          </button>
        </div>
      </header>
      <div
        className={`${isActive || isOpen ? `${pathname === "/" ? "mb-14" : "mb-34"}` : ""}`}
      ></div>
    </Fragment>
  );
};

export default Header;
