import ContentDescription from "../../common/ContentDescription/ContentDescription";
import ImageGallery from "../../common/ImageGallery/ImageGallery";
import styles from "./MyProjects.module.css"

const MyProjects = () => {
    return <div className="page-container">
        <ContentDescription  pageTitle="projects" nextPage="/contacts"/>
        <ImageGallery pageTitle="projects" />
    </div>
}
 
export default MyProjects;