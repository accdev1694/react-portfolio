import ContentDescription from "../../common/ContentDescription/ContentDescription";
import ImageGallery from "../../common/ImageGallery/ImageGallery";
import styles from "./NotFound.module.css"

const NotFound = () => {
    return <div className="page-container">
    <ContentDescription />
    <ImageGallery pageTitle="notFound" />
</div>
}
 
export default NotFound;