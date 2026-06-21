import type { Feature } from "../../../types/Feature";
import { SquareIcon } from "../../atoms/icons/SquareIcon/SquareIcon";
import './FeatureItem.scss'

type FeatureItemProps = {
  feature: Feature;
  className?:string;
};

export const FeatureItem: React.FC<FeatureItemProps> = ({ feature, className }) => {
    return (
      <div className={`feature-item ${className}`}>
        <SquareIcon src={feature.iconPath} className="feature-item__icon" />
        <h3 className="feature-item__title title">{feature.title}</h3>
        <p className="feature-item__text text">{feature.text}</p>
      </div>
    );
}