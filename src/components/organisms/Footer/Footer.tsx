import { GitHubIcon } from "../../atoms/icons/GitHubIcon";
import { LinkedInIcon } from "../../atoms/icons/LinkedInIcon";
import { TelegramIcon } from "../../atoms/icons/TelegramIcon";
import "./Footer.scss";

export const Footer: React.FC = () => {
  return (
    <footer className="footer-block">
      <p className="footer-block__text text">
        Made with <span className="footer-block__text__love">Love</span> and{" "}
        <span className="footer-block__text__care">Care</span>
      </p>
      <div className="footer-block__icons">
        <LinkedInIcon className="footer-block__icon" />
        <GitHubIcon className="footer-block__icon" />
        <TelegramIcon className="footer-block__icon" />
      </div>
    </footer>
  );
};
