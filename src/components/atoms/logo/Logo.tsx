
type LogoProps = {
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = ''}) => {
    return (
        <img src="logo.svg" alt="" className = { className }/>
    )
}