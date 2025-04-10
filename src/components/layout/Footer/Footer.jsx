
import styles from "./Footer.module.css";
import "../../styles/global.css";
import FooterLinks from "../FooterLinks/FooterLinks";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        &copy; {new Date().getFullYear()} Oloche Aboje. All rights reserved.
      </p>
      <FooterLinks />
    </div>
  );
};

export default Footer;
