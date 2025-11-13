import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface ScientificPublicationProps {
  url?: string;
  title: string;
}

const ScientificPublication: React.FC<ScientificPublicationProps> = ({ url: projectUrl, title }) => {
  return (
    <div>
      {projectUrl ? (
        <a href={projectUrl} className="font-light inline-flex items-center mb-1 relative group hover:opacity-90 border-l-2 border-white pl-2" target="_blank" rel="noopener noreferrer">
          <span className="relative group">
            {title}
            <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" className="mx-2" />
          </span>
        </a>
      ) : (
        <span className="text-lg mb-1">{title}</span>
      )}
    </div>
  );
};

export default ScientificPublication;
