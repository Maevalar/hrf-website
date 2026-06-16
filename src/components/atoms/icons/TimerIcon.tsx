type TimerIconProps = {
  className?: string;
};

export const TimerIcon: React.FC<TimerIconProps> = ({ className = "" }) => {
  return <img src="/icons/timer.svg" alt="" className={className} />;
};
