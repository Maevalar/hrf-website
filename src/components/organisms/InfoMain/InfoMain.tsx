import "./InfoMain.scss";

type InfoProps = {
  className?: string;
};

export const Info: React.FC<InfoProps> = ( {className = ''} ) => {
  return (
    <section className={`info-block ${className}`}>
      <div className="info-block__info">
        <h2 className="info-block__title title">Built for real life</h2>
        <div className="info-block__text text">
          <p>
            Cooking shouldn’t be complicated. These recipes come in under
            <span> 30 minutes </span>
            of active time, fit busy schedules, and taste good enough to repeat.
          </p>
          <p>
            Whether you’re new to the kitchen or just need fresh ideas, we’ve
            got you covered.
          </p>
        </div>
      </div>
      <img src="/img/info_image.png" alt="" className="info-block__image" />
    </section>
  );
};
