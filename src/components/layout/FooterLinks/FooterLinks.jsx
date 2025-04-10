import { Link } from "react-router-dom";
import "../../styles/global.css";
import github from "../../../assets/images/contact/github.png";
import linkedin from "../../../assets/images/contact/linkedin.png";
import hashnode from "../../../assets/images/contact/hashnode.png";
import mail from "../../../assets/images/contact/mail.png";
import styles from "./FooterLinks.module.css"

const FooterLinks = () => {
    return ( <div className="footer-links">
        <a href="https://github.com/accdev1694?tab=repositories" target="_blank">
          <img className="github-img contacts" src={github} alt="" />
        </a>
        <a href="https://www.linkedin.com/in/ao111/" target="_blank">
            <img src={linkedin} alt="" className="linkedin-img contacts"/>
        </a>
        <a href="https://abojeonline.com/" target="_blank">
            <img src={hashnode} alt="" className="hashnode-img contacts" />
        </a>
        <a href="mailto:diloch111@gmail.com" target="_blank">
            <img src={mail} alt="" className="mail-img contacts" />
        </a>
      </div> );
}
 
export default FooterLinks;