import React, { useState } from "react";
import Modal from "./modal.tsx";

interface ProjectCardProps {
  projectUrl: string;
  title: string;
  description: string;
  image_url: string;
  alt?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectUrl, title, description, image_url, alt }) => {
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
      <div className="card bg-black/30 backdrop-blur-sm w-96 h-[30rem] drop-shadow-lg outline-white text-white">
        <figure className="overflow-hidden">
          <img
            src={image_url}
            alt={alt} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <button onClick={openModal} className="btn btn-outline">Open Preview</button>
          </div>
        </div>
      </div>

      {isOpen && <Modal closeModal={closeModal} projectUrl={projectUrl} />}
    </div>
  );
};

export default ProjectCard;

