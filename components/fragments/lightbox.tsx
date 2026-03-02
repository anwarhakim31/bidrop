import React from "react";
import Modal from "../ui/modal";
import Image from "next/image";
import { Download, X } from "lucide-react";

const LightBox = ({
  handleClose,
  data,
  handleNext,
  handlePrev,
  total,
}: {
  total: number;
  handleClose: () => void;
  handleNext: (index: number) => void;
  handlePrev: (index: number) => void;
  data: {
    index: number;
    url: string;
    title: string;
  };
  isOpen: boolean;
}) => {
  const handleDownload = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = data.url;
    link.download = data.title;
    link.click();
  };
  return (
    <Modal
      onClose={handleClose}
      index={data.index}
      handleNext={handleNext}
      handlePrev={handlePrev}
    >
      <div className="w-full h-full flex items-center justify-center flex-col  p-4">
        <div>
          {" "}
          <div className="flex items-center justify-between ">
            <span
              className="text-sm  text-white w-full pb-2"
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {data.index} dari {total}
            </span>
            <div className="flex items-center gap-2 pb-2">
              <button
                aria-label="download"
                title="Download"
                className="cursor-pointer flex items-center justify-center h-8 w-8 rounded-full hover:bg-slate-800/50 transition-all duration-300 ease-in-out "
                onClick={handleDownload}
              >
                <Download
                  className="w-6
               h-6 text-white "
                />
              </button>
              <button
                aria-label="close"
                title="Tutup"
                className="cursor-pointer flex items-center justify-center h-8 w-8 rounded-full hover:bg-slate-800/50 transition-all duration-300 ease-in-out "
              >
                <X
                  className="w-6
               h-6 text-white "
                />
              </button>
            </div>
          </div>
          <figure
            className="aspect-video"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <Image
              priority
              width={600}
              height={500}
              src={data.url}
              placeholder="blur"
              blurDataURL={`${data.url}?tr=bl-30,w-1280,q-20`}
              alt={data.title}
              className="w-full h-auto object-cover"
            />
            <figcaption className="mt-2.5 text-sm font-semibold text-white">
              {data.title}
            </figcaption>
          </figure>
        </div>
      </div>
    </Modal>
  );
};

export default LightBox;
