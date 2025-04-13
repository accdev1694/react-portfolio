import ContentDescription from "../common/ContentDescription/ContentDescription";
import ImageGallery from "../common/ImageGallery/ImageGallery";
import styles from "./pages.module.css";

const MyProjects = () => {
  return (
    <div className={styles.pageContainer}>
      <ContentDescription pageTitle="projects" nextPage="/contacts" />
      <ImageGallery pageTitle="projects" />
    </div>
  );
};

export default MyProjects;
