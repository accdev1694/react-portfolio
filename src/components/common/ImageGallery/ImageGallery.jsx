import styles from "./ImageGallery.module.css";
import { pageData } from "../../pageData";
const ImageGallery = ({ pageTitle }) => {
  const pageDetails = pageData[pageTitle];
  return (
    <div className="image-gallery">
      {pageDetails.imgs.map((img, index) => (
        <a
          href={pageDetails.urls ? pageDetails.urls[index] : "#"}
          key={index}
          target="_blank"
        >
          <img
            src={img}
            alt={pageDetails.alt[index]}
            className={styles[pageTitle]}
          />
        </a>
      ))}
    </div>
  );
};

export default ImageGallery;
