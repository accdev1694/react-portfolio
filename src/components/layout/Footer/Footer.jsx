
import styles from "./Footer.module.css";
import FooterLinks from "../FooterLinks/FooterLinks";

const Footer = () => {
  return (
    <>
      <p>
        &copy; {new Date().getFullYear()} All rights reserved.
      </p>
      <FooterLinks pageTitle="contacts"/>
    </>
  );
};

export default Footer;
