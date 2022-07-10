import profile from "../images/profile.png";
import { Content } from "./Content";
import { Footer } from "./Footer";

export const Card = () => {
  return (
    <div className="card">
      <img src={profile} alt="Picture of a girl" />
      <Content />
      <Footer />
    </div>
  );
};
