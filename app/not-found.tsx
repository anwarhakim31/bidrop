import Link from "next/link";

const NotFoundPage = () => {
  return (
    <section className="h-screen w-full flex justify-center items-center flex-col text-center">
      <h1 className="text-9xl select-none font-[1000] text-transparent bg-clip-text  bg-[url('/background-text.jpeg')]">
        Oops!
      </h1>
      <h5 className="text-sec text-lg md:text-2xl my-4 font-bold">
        404 - Halaman Tidak Ditemukan
      </h5>
      <p className="text-sec text-sm md:text-base text-center font-semibold">
        Kami tidak dapat menemukan halaman yang Anda cari. <br /> Silakan cek
        alamat URL Anda dan coba lagi.
      </p>
      <Link
        href="/"
        className="bg-[#143555] mt-6 px-10 transition-all duration-300 ease-in-out hover:bg-slate-800 cursor-pointer py-3 rounded-md text-sm  text-white font-semibold"
      >
        Kembali ke Beranda
      </Link>
    </section>
  );
};

export default NotFoundPage;
