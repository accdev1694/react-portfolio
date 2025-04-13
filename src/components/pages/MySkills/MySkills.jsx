import ContentDescription from "../../common/ContentDescription/ContentDescription";
import ImageGallery from "../../common/ImageGallery/ImageGallery";
import styles from "./MySkills.module.css"

const MySkills = () => {
    return <div className="page-container">
        <ContentDescription  pageTitle="skills" nextPage="/projects"/>
        <ImageGallery pageTitle="skills" />
    </div>
}
 
export default MySkills;