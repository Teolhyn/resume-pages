import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

interface GitHubStarPillProps {
  count: number,
}

const formatStarCount = (count: number | undefined): string => {
  if (count === undefined) {
    return '-';
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}k`;
  }
  return count.toString();
};

const GitHubStarPill: React.FC<GitHubStarPillProps> = ({ count }) => {
  return (
    <div>
      <div className="bg-gray-300 pl-2 rounded-sm text-sm text-gray-600">
        {formatStarCount(count)}
        <FontAwesomeIcon icon={faStar} className="mr-2 ml-1" />
      </div>
    </div>
  );
};

export default GitHubStarPill;
