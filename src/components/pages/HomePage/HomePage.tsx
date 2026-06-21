import { CallToAction } from "../../organisms/CallToAction/CallToAction";
import { Features } from "../../organisms/Features/Features";
import { HeroHome } from "../../organisms/HeroHome/HeroHome";
import { Info } from "../../organisms/InfoMain/InfoMain";
import "./HomePage.scss";

export const HomePage: React.FC = () => {
  return (
    <div className="container">
      <section className="homePage">
        <HeroHome />
        <Features title="What you’ll get" />
        <Info />
        <CallToAction />
      </section>
    </div>
  );
};
