import { FeatureItem } from "../../molecules/FeatureItem/FeatureItem";
import { FEATURES } from "../../../utilities/constants";
import './Features.scss'

type FeaturesProps = {
    title: string;
}

export const Features: React.FC<FeaturesProps> = ({ title }) => {
    return (
      <section className="features-block">
        <h2 className="features-block__title title">{title}</h2>
        <div className="features-block__items">
          {FEATURES.map((feature) => (
            <FeatureItem
              title={feature.title}
              text={feature.text}
              iconPath={feature.iconPatn}
            />
          ))}
        </div>
      </section>
    );
}