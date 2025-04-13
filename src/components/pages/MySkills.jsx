import ContentDescription from "../common/ContentDescription/ContentDescription";
import ImageGallery from "../common/ImageGallery/ImageGallery";
import styles from "./pages.module.css";

const MySkills = () => {
    return <div className={styles.pageContainer}>
        <ContentDescription  pageTitle="skills" nextPage="/projects"/>
        <ImageGallery pageTitle="skills" />
    </div>
}
 
export default MySkills;