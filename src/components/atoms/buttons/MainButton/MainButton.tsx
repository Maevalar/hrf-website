import './MainButton.scss'

type MainButtonProps ={
    text: string;
    className?: string;
};

export const MainButton: React.FC<MainButtonProps> = ({ text, className }) => {

    return (
        <button className={`mainButton ${className || ''}`}>
            {text}
        </button>
    );
}
