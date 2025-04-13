import ContentDescription from "../common/ContentDescription/ContentDescription";
import ImageGallery from "../common/ImageGallery/ImageGallery";
import styles from "./pages.module.css";

const HomePage = () => {
  return (
    <div className={styles.pageContainer}>
      <ContentDescription pageTitle="home" nextPage="/skills" />
      <ImageGallery pageTitle="home" />
    </div>
  );
};

export default HomePage;
