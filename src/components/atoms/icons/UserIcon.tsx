type UserIconProps = {
  className?: string;
};

export const UserIcon: React.FC<UserIconProps> = ({ className = "" }) => {
  return <img src="/icons/user.svg" alt="" className={className} />;
};
