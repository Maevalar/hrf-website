import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

type GitHubIconProps = {
  className?: string;
};

export const GitHubIcon: React.FC<GitHubIconProps> = ({ className = "" }) => {
  return (
    <Link to="https://github.com/Maevalar" target="_blank">
      <GitHubLogoIcon className={className} />
    </Link>
  );
};
