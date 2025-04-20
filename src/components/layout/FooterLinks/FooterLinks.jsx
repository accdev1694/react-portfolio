import { Link } from "react-router-dom";
import styles from "./FooterLinks.module.css";
import { pageData } from "../../pageData";

const FooterLinks = ({ pageTitle }) => {
  return (
    <div className={styles.footerLinks}>
      {pageData[pageTitle].imgs.map((img, index) => (
        <a
          href={pageData[pageTitle].urls?.[index] || "#"}
          key={index}
          target="_blank"
        >
          <img src={img} alt="" className={styles[pageData[pageTitle].id]} />
        </a>
      ))}
    </div>
  );
};

export default FooterLinks;
