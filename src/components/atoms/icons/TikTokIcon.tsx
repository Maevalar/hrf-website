type TikTokIconProps = {
  className?: string;
};

export const TikTokIcon: React.FC<TikTokIconProps> = ({ className = "" }) => {
  return <img src="/icons/tiktok.svg" alt="" className={className} />;
};
