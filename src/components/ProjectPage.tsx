import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

interface ProjectPageProps {
  title: string,
  repo_url?: string,
  website_url?: string,
  children: React.ReactNode,
  header_img?: string,
}

const ProjectPage: React.FC<ProjectPageProps> = ({ title, repo_url, website_url, header_img, children }) => {
  return (
    <div className='mx-3 md:mx-auto py-5 max-w-xl'>
      <h1 className='text-3xl mb-1'>{title}</h1>
      <div className='flex gap-5 mb-4'>
        {repo_url && (
          <a href={repo_url} className=" inline-flex items-center mb-1 relative group" target='_blank' rel="noopener noreferrer">
            <span className="relative group">
              Repository
              <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-sm bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" className="mx-2" />
            </span>
          </a>
        )}
        {website_url && (
          <a href={website_url} className=" inline-flex items-center mb-1 relative group" target='_blank' rel="noopener noreferrer">
            <span className="relative group">
              Website
              <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-sm bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
              <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" className="mx-2" />
            </span>
          </a>
        )}
      </div>
      <article>
        {header_img && (
          <img src={header_img} className='rounded-lg max-h-[500px] mx-auto outline-3 outline-gray-500' />
        )}
        {children}
      </article>
    </div >
  );
};

export default ProjectPage;
