import { LinkedInLogoIcon } from "@radix-ui/react-icons";

type LinkedInIconProps = {
    className?: string;
}

export const LinkedInIcon: React.FC<LinkedInIconProps> = ( {className = ''} ) => {
    return (
        <LinkedInLogoIcon className={className}/>
    )
}