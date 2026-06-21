import { CallToAction } from "../../organisms/CallToAction/CallToAction";
import { Features } from "../../organisms/Features/Features";
import { HeroHome } from "../../organisms/Hero/HeroHome";
import { Info } from "../../organisms/Info/Info";
import "./HomePage.scss";

export const HomePage: React.FC = () => {

  return (
    <div className="container">
      <HeroHome />
      <Features title="What you’ll get" />
      <Info />
      <CallToAction />
    </div>
  );
};
