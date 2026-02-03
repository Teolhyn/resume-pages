import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import GitHubStarPill from './GitHubStarPill';
import { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

export interface ProjectGridProps {
  projectUrl?: string;
  title: string;
  description: string;
  technologies: string[];
  repo_name?: string;
  user_name?: string;
}

export interface GitHubRepo {
  stargazers_count: number;
}

const ProjectGridCard: React.FC<ProjectGridProps> = ({ projectUrl, repo_name, user_name, title, description, technologies }) => {
  const [count, SetCount] = useState<number>(0);

  useEffect(() => {
    if (repo_name && user_name) {
      const projectUrl = `https://api.github.com/repos/${user_name}/${repo_name}`
      fetch(projectUrl).then((res) => res.json()).then((json: GitHubRepo) => {
        SetCount(json.stargazers_count);
      })
    }
  })

  return (
    <div>
      {projectUrl ? (
        <Link to={projectUrl} className="text-lg inline-flex items-center mb-1 relative group" target="_blank" rel="noopener noreferrer">
          <span className="relative group">
            {title}
            <span className="absolute bottom-0 left-0 w-0 h-[2px] rounded-sm bg-black dark:bg-white transition-all duration-300 group-hover:w-full"></span>
          </span>
          <FontAwesomeIcon icon={faUpRightFromSquare} size="xs" className="mx-2" />
        </Link>
      ) : (
        <span className="text-lg mb-1">{title}</span>
      )}
      {repo_name ? (
        <div className="flex gap-2 flex-wrap">
          <GitHubStarPill count={count} />
          {technologies.map((tech) => (
            <div key={tech} className="bg-gray-300 px-2 rounded-sm text-sm text-gray-600">{tech}</div>
          ))}
        </div>
      ) : (
        <div className="flex gap-2 flex-wrap">
          {technologies.map((tech) => (
            <div key={tech} className="bg-gray-300 px-2 rounded-sm text-sm text-gray-600">{tech}</div>
          ))}
        </div>
      )}
      <p className="font-light">{description}</p>
    </div>
  );
};

export default ProjectGridCard;
