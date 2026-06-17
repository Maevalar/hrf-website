import { MainButton } from '../../atoms/buttons/MainButton/MainButton';
import './HeroHome.scss'

type HeroHomeProps = {
    className?: string;
}

export const HeroHome: React.FC<HeroHomeProps> = ({ className }) => {
    return (
      <section className={`heroHome-block ${className}`}>
        <h1 className="heroHome-block__title title">
          <span className="heroHome-block__title__highlite">Healthy</span> meals, zero
          fuss
        </h1>
        <p className="heroHome-block__text text">
          Discover eight quick, whole-food recipes that you can cook tonight—no
          processed junk, no guesswork.
        </p>
        <MainButton text="Start exploring" className="heroHome-block__button" />
        <img
          src="/img/hero_home.png"
          alt=""
          className="heroHome-block__image"
        />
      </section>
    );
}