import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Button } from "./Button";
import { Section } from "./Section";

export const Content = () => {
  return (
    <div className="content">
      <h2 className="content__title">Laura Smith</h2>
      <p className="content__des">Frontend Developer</p>
      <p className="content__email">laurasmith.website</p>
      <div className="content__contact">
        <Button text="Email">
          <MdEmail />
        </Button>
        <Button text="LinkedIn" secondary>
          <FaLinkedin />
        </Button>
      </div>
      <Section
        head="About"
        desc="I am a frontend developer with a particular interest in making things
        simple and automating daily tasks. I try to keep up with security and
        best practices, and am always looking for new things to learn."
      />
      <Section
        head="Interests"
        desc="Food expert. Music scholar. Reader. Internet fanatic. Bacon buff.
        Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic."
      />
    </div>
  );
};
