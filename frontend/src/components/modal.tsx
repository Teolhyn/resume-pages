import React, { useEffect, useRef } from "react";

interface ModalProps {
  closeModal: () => void;
  projectUrl: string;
}

const Modal: React.FC<ModalProps> = ({ closeModal, projectUrl }) => {
  const modalRef = useRef<HTMLDivElement | null>(null);

  // Close the modal when clicked outside
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [closeModal]);

  return (
    <div className="font-manrope fixed inset-0 bg-black/50 backdrop-blur-sm flex justify-center items-center z-50">
      <div
        ref={modalRef}
        className="bg-white p-4 rounded-lg w-10/12 md:w-10/12 relative"
      >
        <button
          className="absolute top-2 right-2 text-xl font-bold text-black"
          onClick={closeModal}
        >
          &times;
        </button>

        <h2 className="text-xl text-black mb-4">Project Showcase</h2>

        <iframe
          src={projectUrl}
          className="w-full h-[60vh] rounded-lg"
          title="Project Demo"
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;

