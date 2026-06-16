
type InstagramIconProps = {
    className?: string;
}

export const InstagramIcon: React.FC<InstagramIconProps> = ( {className = ''} ) => {
    return (
        <img src="/icons/instagram.svg" alt="" className={className}/>
    )
}