import styles from "./ContactMe.module.css";
import ContentDescription from "../../common/ContentDescription/ContentDescription";
import ImageGallery from "../../common/ImageGallery/ImageGallery";
const ContactMe = () => {
  return (
    <div className="page-container">
      <ContentDescription />
      <ImageGallery pageTitle="contacts" />
    </div>
  );
};

export default ContactMe;
