import ContentDescription from "../../common/ContentDescription/ContentDescription";
import styles from "./HomePage.module.css"
import ImageGallery from "../../common/ImageGallery/ImageGallery";
const HomePage = () => {
    return ( <div className="page-container">
        <ContentDescription />
        <ImageGallery pageTitle="home" />
    </div> );
}
 
export default HomePage;