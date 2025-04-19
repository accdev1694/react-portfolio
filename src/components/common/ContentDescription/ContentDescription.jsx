import styles from "./ContentDescription.module.css";
import { pageData } from "../../pageData";
import ActionButton from "../ActionButton/ActionButton";

const ContentDescription = ({ pageTitle, nextPage }) => {
  const pageDetails = pageData[pageTitle];

  return (
    <>
      <div className={styles.contentDescription}>
        <h3 className={styles.subheading}>{pageDetails.subHeading}</h3>
        <h1 className={styles.heading}>{pageDetails.heading}</h1>
        <p className={styles.description}>{pageDetails.description}</p>
        <ActionButton
          buttonContent={pageDetails.learnMore}
          nextPage={nextPage}
        />
      </div>
    </>
  );
};

export default ContentDescription;
