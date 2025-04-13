import styles from "./ContentDescription.module.css";
import { pageData } from "../../pageData";
import ActionButton from "../ActionButton/ActionButton";

const ContentDescription = ({ pageTitle, nextPage }) => {
  const pageDetails = pageData[pageTitle];

  return (
    <>
      <div className={styles.contentDescription}>
        <h1>{pageDetails.heading}</h1>
        <h3>{pageDetails.subHeading}</h3>
        <p>{pageDetails.description}</p>
        <ActionButton buttonContent={pageDetails.learnMore} nextPage={nextPage}/>
      </div>

     
    </>
  );
};

export default ContentDescription;
