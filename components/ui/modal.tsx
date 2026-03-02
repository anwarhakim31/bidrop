import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { Fragment, useEffect } from "react";
import { createPortal } from "react-dom";

const BackDropOverlay = ({
  showModal,
  onClose,
}: {
  showModal: boolean;
  onClose: () => void;
}) => {
  return (
    <div
      onClick={onClose}
      role="presentation"
      className={`fixed inset-0 z-1001  w-full h-full ${showModal ? "bg-black/50 transition-all duration-500 ease-in-out" : "bg-transparent transition-all duration-500 ease-in-out"}`}
    ></div>
  );
};

const ModalOverlay = ({
  children,
  showModal,
  onClose,
  index,
  handlePrev,
  handleNext,
}: {
  children: React.ReactNode;
  showModal: boolean;
  onClose: () => void;
  index: number;
  handlePrev: (index: number) => void;
  handleNext: (index: number) => void;
}) => {
  useEffect(() => {
    if (!showModal) return;

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") handleNext(index);
      if (e.key === "ArrowLeft") handlePrev(index);
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showModal, index, handleNext, handlePrev, onClose]);

  return (
    <Fragment>
      <button
        onClick={() => {
          handlePrev(index);
        }}
        className={`cursor-pointer fixed top-1/2 left-4 z-1002 flex items-center justify-center w-10 h-10 bg-slate-800/50 rounded-full hover:bg-slate-800 transition-all duration-300 ease-in-out ${
          showModal ? "opacity-100" : "opacity-0"
        }`}
        aria-label="gambar sebelumnya"
      >
        <ChevronLeft className="w-10 h-10 text-white " />
      </button>
      <div
        role="dialog"
        onClick={onClose}
        className={
          `fixed inset-0 z-1001 flex items-center bg-transparent justify-center w-full h-full  ` +
          (showModal
            ? "opacity-100 scale-100 transition-all duration-500 ease-in-out"
            : "opacity-0 scale-90 transition-all duration-500 ease-in-out")
        }
      >
        {children}
      </div>
      <button
        onClick={() => {
          handleNext(index);
        }}
        className={`cursor-pointer fixed top-1/2 right-4 z-1002 flex items-center justify-center w-10 h-10 bg-slate-800/50 rounded-full hover:bg-slate-800 transition-all duration-300 ease-in-out ${
          showModal ? "opacity-100" : "opacity-0"
        }`}
        aria-label="gambar selanjutnya"
      >
        <ChevronRight className="w-10 h-10 text-white" />
      </button>
    </Fragment>
  );
};

const Modal = ({
  onClose,
  children,
  index,
  handlePrev,
  handleNext,
}: {
  onClose: () => void;
  children: React.ReactNode;
  index: number;
  handlePrev: (index: number) => void;
  handleNext: (index: number) => void;
}) => {
  const [showModal, setShowModal] = React.useState(false);
  const [isMounted, setIsMounted] = React.useState(false);

  const [portalElement, setPortalElement] = React.useState<Element | null>(
    null,
  );

  React.useEffect(() => {
    const element = document.getElementById("modal-root");
    setPortalElement(element);
    setIsMounted(true);

    const timeout = setTimeout(() => {
      setShowModal(true);
    }, 200);

    return () => {
      clearTimeout(timeout);
      setShowModal(false);
    };
  }, []);

  const handleClose = () => {
    setShowModal(false);

    setTimeout(() => {
      onClose();
    }, 300);
  };
  React.useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.removeAttribute("style");
    };
  }, []);
  if (!isMounted || !portalElement) return null;

  return (
    <React.Fragment>
      {isMounted &&
        createPortal(
          <BackDropOverlay showModal={showModal} onClose={handleClose} />,
          portalElement,
        )}

      {isMounted &&
        createPortal(
          <ModalOverlay
            index={index}
            handlePrev={handlePrev}
            handleNext={handleNext}
            showModal={showModal}
            onClose={handleClose}
          >
            {children}
          </ModalOverlay>,
          portalElement,
        )}
    </React.Fragment>
  );
};
export default Modal;
