"use client";
import { formatPhone } from "@/utils/helpers";
import { MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-gray-200 ">
      <div className="containers md:pt-10 pb-10 md:pb-30  border-b  border-gray-300 grid grid-cols-1 md:grid-cols-3 gap-10">
        <Link href="/">
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="BiDrop Production"
            className="w-30 h-24 "
            priority
          />
        </Link>

        <div className="">
          <h5 className="text-sec font-semibold text-lg mb-4">Informasi</h5>
          <div className="flex gap-2 flex-col">
            <Link href="/tentang" className="text-sm   text-sec">
              Tentang
            </Link>
            <Link href="/galeri" className="text-sm   text-sec">
              Galeri
            </Link>
            <Link href="/kontak" className="text-sm   text-sec">
              Kontak
            </Link>
          </div>
        </div>
        <div className="">
          <h5 className="text-sec font-semibold text-lg mb-4">Kontak Kami</h5>
          <div className="flex gap-2 flex-col">
            <p className="flex gap-2 items-center">
              <Phone size={18} className="fill-[#162a67] text-white" />
              <span className="text-sm  text-sec">
                + {formatPhone((process.env.NEXT_PUBLIC_TLP as string) || "")}
              </span>
            </p>
            <p className="flex gap-2 items-center">
              <Image
                src="/wa2.svg"
                width={20}
                height={20}
                alt="whatsapp"
                className="fill-[#162a67] text-white"
              />
              <span className="text-sm  text-sec">
                + {formatPhone((process.env.NEXT_PUBLIC_WA as string) || "")}
              </span>
            </p>
            <div className="flex gap-2 ">
              <MapPin size={18} className="fill-[#162a67] text-white" />
              <p className="text-sm  text-sec block flex-1">
                {process.env.NEXT_PUBLIC_ALAMAT}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="containers py-4">
        <p className="text-xs sm:text-sm text-sec">
          Copyright &copy; {year} BiDrop Production. Hak Cipta Dilindungi
          Undang-Undang
        </p>
      </div>
    </footer>
  );
};

export default Footer;
