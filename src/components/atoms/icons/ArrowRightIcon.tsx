type ArrowRightIconProps = {
  className?: string;
};

export const ArrowRightIconIcon: React.FC<ArrowRightIconProps> = ({ className = "" }) => {
  return <img src="/icons/arrow_right.svg" alt="" className={className} />;
};
