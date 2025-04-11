import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface BlogGridProps {
  title: string;
  published: Date;
  url: string;
}

const BlogGridCard: React.FC<BlogGridProps> = ({ title, published, url }) => {
  return (
    <div>
      <a href={url} className="text-lg inline-flex items-center mb-1" target="_blank" rel="noopener noreferrer">
        <span className="relative group">
          {title}
          <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-sm bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
        </span>
        <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" className="mx-2" />
      </a>
      <p className="font-light text-sm">{published.toLocaleDateString('fi-FI')}</p>
    </div>
  );
};

export default BlogGridCard;
