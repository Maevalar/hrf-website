import "./InfoAbout.scss";

type InfoAboutProps = {
  className?: string;
};

export const InfoAbout: React.FC<InfoAboutProps> = ({ className = "" }) => {
  return (
    <section className={`infoAbout-block ${className}`}>
      <div className="infoAbout-block__info">
        <h2 className="infoAbout-block__title title">Beyond the plate</h2>
        <div className="infoAbout-block__text text">
          <p>
            We believe food is a catalyst for community and well-being. By
            sharing approachable recipes, we hope to:
          </p>
          <ul className="infoAbout-block__list">
            <li>Encourage family dinners and social cooking.</li>
            <li>Reduce reliance on single-use packaging and delivery waste.</li>
            <li>
              Spark curiosity about seasonal produce and local agriculture.
            </li>
          </ul>
        </div>
      </div>
      <img src="/img/info_about_image.png" alt="" className="infoAbout-block__image" />
    </section>
  );
};
