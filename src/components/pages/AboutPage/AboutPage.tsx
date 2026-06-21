import type { ItemList } from "../../../types/ItemList";
import {
  OUR_FOOD_PHILOSOPHY,
  WHY_WE_EXIST,
} from "../../../utilities/constants";
import { CallToAction } from "../../organisms/CallToAction/CallToAction";
import { HeroAbout } from "../../organisms/HeroAbout/HeroAbout";
import { InfoAbout } from "../../organisms/InfoAbout/InfoAbout";
import { MainList } from "../../organisms/MainList/MainList";
import "./AboutPage.scss";

export const AboutPage: React.FC = () => {
  const firstListItems: ItemList[] = [...WHY_WE_EXIST];
  const secondListItems: ItemList[] = [...OUR_FOOD_PHILOSOPHY];

  return (
    <div className="container">
      <section className="aboutPage">
        <HeroAbout />
        <MainList title="Why we exist" items={firstListItems} />
        <MainList title="Our food philosophy" items={secondListItems} />
        <InfoAbout />
        <CallToAction />
      </section>
    </div>
  );
};
