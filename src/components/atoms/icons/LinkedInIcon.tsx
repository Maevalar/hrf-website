import { LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

type LinkedInIconProps = {
    className?: string;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ( {className = ''} ) => {
    return (
      <Link to={"https://www.linkedin.com/in/ivan-kolesnyk-68626338a/"} target="_blank">
        <LinkedInLogoIcon className={className} />
      </Link>
    );
}