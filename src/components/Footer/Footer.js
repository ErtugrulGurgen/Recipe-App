import "./FooterStyle.css";
import designSvg from "../../assets/design.svg";

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/ErtugrulGurgen"
        target="_blank"
        style={{ textDecoration: "none" }}
      >
        <code className="brand">{"<Ertugrul/> "}</code>
      </a>
      <img
        src={designSvg}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
      <span
        >Copyright 2022
      </span>
    </div>
  );
};

export default Footer;