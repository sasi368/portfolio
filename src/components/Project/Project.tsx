import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import Images from "../../assets/images";
import { projects } from "../../config";

export function Project() {
  return (
    <Container id="project">
      <h2>Some Working Projects</h2>
      <div className="projects">
        {projects?.map((item, index) => {
          return (
            <ScrollAnimation animateIn="flipInX">
              <div className="project">
                <header>
                  <div className="project-links">
                    {item.playstore != "" && (
                      <a href={item.playstore} target="_blank" rel="noreferrer">
                        <img src={Images.playstore} alt="Visit site" />
                      </a>
                    )}
                    {item.appstore != "" && (
                      <a href={item.appstore} target="_blank" rel="noreferrer">
                        <img src={Images.applewhite} alt="Visit site" />
                      </a>
                    )}
                    {item.site != "" && (
                      <a href={item.site} target="_blank" rel="noreferrer">
                        <img src={Images.externalLink} alt="Visit site" />
                      </a>
                    )}
                  </div>
                </header>
                <div className="body">
                  <h3>{item.title}</h3>
                  <p> {item.description}</p>
                </div>
                <footer>
                  <ul className="tech-list">
                    {item.techUses.map((tecItem, tecIndex) => {
                      return <li>{tecItem}</li>;
                    })}
                  </ul>
                </footer>
              </div>
            </ScrollAnimation>
          );
        })}
      </div>
    </Container>
  );
}
