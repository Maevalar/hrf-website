import { PaperPlaneIcon } from "@radix-ui/react-icons";

type TelegramIconProps = {
  className?: string;
};

export const TelegramIcon: React.FC<TelegramIconProps> = ({ className = "" }) => {
  return <PaperPlaneIcon className={className}/>;
};
