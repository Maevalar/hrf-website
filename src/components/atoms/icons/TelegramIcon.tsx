import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Link } from "react-router-dom";

type TelegramIconProps = {
  className?: string;
};

export const TelegramIcon: React.FC<TelegramIconProps> = ({ className = "" }) => {
  return (
    <Link to={"https://t.me/AveGandalf"} target="_blank">
      <PaperPlaneIcon className={className} />
    </Link>
  );
};
