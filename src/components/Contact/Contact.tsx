import { Container } from "./styles";
import { Form } from "../Form/Form";
import { links } from "../../config";
import Images from "../../assets/images";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:{{links.social.mobileNo}}">
            <img src={Images.emailIcon} alt="Email" />
          </a>
          <a
            href="mailto:{{links.social.mobileNo}}"
            style={{
              fontFamily: "Fira Code",
              fontWeight: 550,
            }}
          >
            {links.social.email}
          </a>
        </div>
        <div>
          <a href="tel:+91{{links.social.mobileNo}}">
            <img src={Images.phoneIcon} alt="Phone No" />
          </a>
          <a
            href="tel:+91{{links.social.mobileNo}}"
            style={{
              fontFamily: "Fira Code",
              fontWeight: 550,
            }}
          >
            (+91) {links.social.mobileNo}
          </a>
        </div>
      </div>
      <Form></Form>
    </Container>
  );
}
