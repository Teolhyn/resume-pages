
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface GitHubStarPillProps {
  count: number,
}

const GitHubStarPill: React.FC<GitHubStarPillProps> = ({ count }) => {
  return (
    <div>
      <div className="bg-gray-300 pl-2 rounded-sm text-sm text-gray-600">
        {count}
        <FontAwesomeIcon icon={faStar} className="mr-2 ml-1" />
      </div>
    </div>
  );
};

export default GitHubStarPill;
