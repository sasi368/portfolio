import { Container } from "./styles";
import { Links } from "../About/Links";
import Images from "../../assets/images";

export function Footer() {
  return (
    <Container className="footer">
      <div>
        <p>
          Designed and inspired by{" "}
          <a
            href="https://vinayaksingh.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vinayak Singh
          </a>
          {/* <span>❤️</span> */}
        </p>
      </div>
      <Links />
    </Container>
  );
}
