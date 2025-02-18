import { links } from "../../config";
import Images from "../../assets/images";

export function Links() {
  return (
    <div className="social-media">
      <a href={links.social.linkedIn} target="_blank" rel="noreferrer">
        <img src={Images.linkedin} alt="Linkedin" />
      </a>
      <a href={links.tech.github} target="_blank" rel="noreferrer">
        <img src={Images.githubIcon} alt="GitHub" />
      </a>
      <a href={links.social.whatsapp} target="_blank" rel="noreferrer">
        <img src={Images.whatsapp} alt="Whatsapp" />
      </a>
      <a href={links.social.telegram} target="_blank" rel="noreferrer">
        <img src={Images.telegram} alt="telegram" />
      </a>
    </div>
  );
}
