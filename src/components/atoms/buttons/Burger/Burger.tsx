import './Burger.scss'

type BurgerProps = {
  className?: string;
};

export const Burger: React.FC<BurgerProps> = ({ className = "" }) => {
  return (
    <button className={`burger-button   ${className}`}>
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </button>
  );
};
