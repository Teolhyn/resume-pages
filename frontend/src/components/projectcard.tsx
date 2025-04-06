import React, { useState } from "react";
import Modal from "./modal.tsx";

interface ProjectCardProps {
  projectUrl: string;
  title: string;
  description: string;
  image_url: string;
  srcSet: string;
  width: string;
  height: string;
  sizes: string;
  alt?: string;
  preview: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectUrl, title, description, image_url, alt, preview, srcSet, width, height, sizes }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Function to open modal
  const openModal = () => {
    setIsOpen(true);
  };

  // Function to close modal
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <div className="card bg-black/30 backdrop-blur-sm w-80 md:w-96 max-w-screen h-[30rem] drop-shadow-lg outline-white text-white">
        <img className="min-h-[14rem] max-h-[14rem] object-cover overflow-hidden rounded-t-lg object-left-top aspect-384/224"
          srcSet={srcSet}
          sizes={sizes}
          src={image_url}
          width={width}
          height={height}
          alt={alt} />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={openModal} className="btn btn-outline disabled:btn-disabled" disabled={!preview}>Open Preview</button>
          </div>
        </div>
      </div>

      {isOpen && <Modal closeModal={closeModal} projectUrl={projectUrl} />}
    </div>
  );
};

export default ProjectCard;

