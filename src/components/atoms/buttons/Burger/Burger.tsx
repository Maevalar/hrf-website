import './Burger.scss'

type BurgerProps = {
  onClick: () => void;
  className?: string;
};

export const Burger: React.FC<BurgerProps> = ({ className = "", onClick }) => {
  return (
    <button className={`burger-button   ${className}`} onClick={onClick}>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};
