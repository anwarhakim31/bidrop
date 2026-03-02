"use client";
import Image from "next/image";
import { Fragment, useState } from "react";
import LightBox from "./lightbox";

const ImageGalery = ({
  index,
  imageURL,
  totalIndex,
  blurData,
}: {
  index: number;
  imageURL: string;
  totalIndex: number;
  blurData: string | undefined;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    index: 0,
    url: `${imageURL} (1).png`,
    title: "",
  });

  const handleOpen = (index: number) => {
    if (!isOpen) setIsOpen(true);

    setData({
      index: index + 1,
      url: `${imageURL} (${index + 1}).png`,
      title: `galeri-event (${index + 1})`,
    });
  };

  const handleNext = (index: number) => {
    if (index < totalIndex) {
      setData({
        index: index + 1,
        url: `${imageURL} (${index + 1}).png`,
        title: `galeri-event (${index + 1})`,
      });
    } else {
      setData({
        index: 1,
        url: `${imageURL} (1).png`,
        title: `galeri-event (1)`,
      });
    }
  };

  const handlePrev = (index: number) => {
    if (index > 1) {
      setData({
        index: index - 1,
        url: `${imageURL} (${index - 1}).png`,
        title: `galeri-event (${index - 1})`,
      });
    } else {
      setData({
        index: totalIndex,
        url: `${imageURL} (${totalIndex}).png`,
        title: `galeri-event (${totalIndex})`,
      });
    }
  };
  return (
    <Fragment>
      <button
        aria-label={`galeri event (${index + 1})`}
        onClick={() => handleOpen(index)}
        className="galeri-card   w-full rounded-md border cursor-pointer shadow-sm border-gray-300 hover:border-orange-400 transition-[border] duration-300 ease-in-out p-2"
      >
        <figure className="aspect-4/3">
          <Image
            src={`${imageURL} (${index + 1}).png`}
            width={1200}
            height={400}
            alt={`galeri-event (${index + 1})`}
            placeholder={"blur"}
            blurDataURL={blurData}
            priority
            className=" w-full h-full"
          />
        </figure>
      </button>
      {isOpen && (
        <LightBox
          total={totalIndex}
          blurData={blurData}
          isOpen
          data={data}
          handleNext={handleNext}
          handlePrev={handlePrev}
          handleClose={() => {
            setIsOpen(false);
          }}
        />
      )}
    </Fragment>
  );
};

export default ImageGalery;
