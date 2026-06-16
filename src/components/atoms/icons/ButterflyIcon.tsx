type ButterflyIconProps = {
  className?: string;
};

export const ButterflyIcon: React.FC<ButterflyIconProps> = ({ className = "" }) => {
  return <img src="/icons/butterfly.svg" alt="" className={className} />;
};
