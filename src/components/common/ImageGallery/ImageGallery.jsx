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
        pageDetails.urls && pageDetails.urls !==null ? (
          <a href={pageDetails.urls[index]} key={index} target="_blank">
            <>
            <img
              src={img}
              alt={pageDetails.alt[index]}
              className={styles[pageTitle]}
              title={pageDetails.alt[index]}
            />
            <p className={styles.imageTitle}>{pageDetails.alt[index]}</p>
            </>
            
          </a>
        ) : (
          <a href='' key={index} target="_blank">
            <>
            <img
              src={img}
              alt={pageDetails.alt[index]}
              className={styles[pageTitle]}
              title={pageDetails.alt[index]}
            />
            <p className={styles.imageTitle}>{pageDetails.alt[index]}</p>
            </>
            
          </a>
        )
      )}
    </div>
  );
};

export default ImageGallery;
