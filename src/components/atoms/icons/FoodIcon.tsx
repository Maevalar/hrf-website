type FoodIconProps = {
  className?: string;
};

export const FoodIcon: React.FC<FoodIconProps> = ({ className = "" }) => {
  return <img src="/icons/food.svg" alt="" className={className} />;
};
