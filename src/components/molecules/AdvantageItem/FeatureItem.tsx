import { SquareIcon } from "../../atoms/icons/SquareIcon/SquareIcon";
import './FeatureItem.scss'

type FeatureItemProps = {
  title: string;
  text: string;
  iconPath: string;
  classname?: string;
};

export const FeatureItem: React.FC<FeatureItemProps> = ({ title, text, iconPath, classname }) => {
    return (
      <div className={`feature-item ${classname}`}>
        <SquareIcon src={iconPath} className="feature-item__icon" />
        <h3 className="feature-item__title title">{title}</h3>
        <p className="feature-item__text text">{text}</p>
      </div>
    );
}