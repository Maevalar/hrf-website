import { GitHubLogoIcon } from "@radix-ui/react-icons";

type GitHubIconProps = {
  className?: string;
};

export const GitHubIcon: React.FC<GitHubIconProps> = ({ className = "" }) => {
  return <GitHubLogoIcon className={className}/>;
};
