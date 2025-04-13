import ContentDescription from "../common/ContentDescription/ContentDescription";
import ImageGallery from "../common/ImageGallery/ImageGallery";
import styles from "./pages.module.css";

const NotFound = () => {
  return (
    <div className={styles.pageContainer}>
      <ContentDescription pageTitle="notFound" nextPage="/"/>
      <ImageGallery pageTitle="notFound" />
    </div>
  );
};

export default NotFound;
