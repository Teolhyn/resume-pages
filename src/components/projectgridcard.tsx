import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface ProjectGridProps {
  projectUrl?: string;
  title: string;
  description: string;
  technologies: string[];
}

const ProjectGridCard: React.FC<ProjectGridProps> = ({ projectUrl, title, description, technologies }) => {
  return (
    <div>
      {projectUrl ? (
        <a href={projectUrl} className="text-lg inline-flex items-center mb-1 relative group" target="_blank" rel="noopener noreferrer">
          <span className="relative group">
            {title}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-sm bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
          <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" className="mx-2" />
        </a>
      ) : (
        <span className="text-lg mb-1">{title}</span>
      )}
      <div className="flex gap-2 ">
        {technologies.map((tech) => (
          <div key={tech} className="bg-gray-300 px-2 rounded-sm text-sm text-gray-600">{tech}</div>
        ))}
      </div>
      <p className="font-light">{description}</p>
    </div>
  );
};

export default ProjectGridCard;
