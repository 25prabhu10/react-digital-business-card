import { IconContext } from "react-icons";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";

export const Footer = () => {
  return (
    <IconContext.Provider
      value={{ color: "#918E9B", className: "footer__icons" }}>
      <div className="footer">
        <FaTwitterSquare />
        <FaFacebookSquare />
        <FaInstagramSquare />
        <FaGithubSquare />
      </div>
    </IconContext.Provider>
  );
};
