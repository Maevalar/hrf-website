import { MainButton } from "../../atoms/buttons/MainButton/MainButton";
import "./HeroHome.scss";

type HeroHomeProps = {
  className?: string;
};

export const HeroHome: React.FC<HeroHomeProps> = ({ className = "" }) => {
  return (
    <section className={`heroHome-block ${className}`}>
      <h2 className="heroHome-block__title title">
        <span className="heroHome-block__title__highlite">Healthy</span> meals,
        zero fuss
      </h2>
      <p className="heroHome-block__text text">
        Discover eight quick, whole-food recipes that you can cook tonight—no
        processed junk, no guesswork.
      </p>
      <MainButton text="Start exploring" className="heroHome-block__button" />
      <div className="test">
        <img
          src="/img/hero_home.png"
          alt=""
          className="heroHome-block__image"
        />
        <img
          src="/icons/hero_home_line.svg"
          alt=""
          className="heroHome-block__line"
        />
      </div>
    </section>
  );
};
