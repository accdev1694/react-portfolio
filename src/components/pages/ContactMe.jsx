import ContentDescription from "../common/ContentDescription/ContentDescription";
import ImageGallery from "../common/ImageGallery/ImageGallery";
import styles from "./pages.module.css";

const ContactMe = () => {
  return (
    <div className={styles.pageContainer}>
      <ContentDescription pageTitle="contacts"  nextPage="/"/>
      <ImageGallery pageTitle="contacts" />
    </div>
  );
};

export default ContactMe;
