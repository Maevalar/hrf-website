import "./HeroAbout.scss";

type HeroAboutProps = {
  className?: string;
};

export const HeroAbout: React.FC<HeroAboutProps> = ({ className = "" }) => {
  return (
    <section className={`heroAbout-block ${className}`}>
      <div className="heroAbout-block__info">
        <p className="heroAbout-block__tag title">Our mission</p>
        <h2 className="heroAbout-block__title title">
          Help more people cook nourishing meals, more often.
        </h2>
        <div className="heroAbout-block__text text">
          <p>
            Healthy Recipe Finder was created to prove that healthy eating can
            be convenient, affordable, and genuinely delicious.
          </p>
          <p>
            We showcase quick, whole-food dishes that anyone can master—no fancy
            equipment, no ultra-processed shortcuts—just honest ingredients and
            straightforward steps.
          </p>
        </div>
      </div>
      <img
        src="/img/hero_about.png"
        alt=""
        className="heroAbout-block__image"
      />
      <img src="/icons/hero_about_line.svg" alt="" className="heroAbout-block__line" />
    </section>
  );
};
