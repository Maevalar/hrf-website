type SearchSimpleIconProps = {
  className?: string;
};

export const SearchSimpleIcon: React.FC<SearchSimpleIconProps> = ({ className = "" }) => {
  return <img src="/icons/search_simple.svg" alt="" className={className} />;
};
