import styles from "./ImageGallery.module.css";
import { pageData } from "../../pageData";
const ImageGallery = ({ pageTitle }) => {
  const pageDetails = pageData[pageTitle];
  return (
    <div
      className={
        pageTitle === "home" || pageTitle === "notFound"
          ? styles.image
          : styles.imageGallery
      }
    >
      {pageDetails.imgs.map((img, index) =>
        pageDetails.urls ? (
          <a href={pageDetails.urls[index]} key={index} target="_blank">
            <img
              src={img}
              alt={pageDetails.alt[index]}
              className={styles[pageTitle]}
            />
          </a>
        ) : (
          <img
            src={img}
            alt={pageDetails.alt[index]}
            className={styles[pageTitle]}
          />
        )
      )}
    </div>
  );
};

export default ImageGallery;
