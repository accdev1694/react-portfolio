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

      {/* {pageDetails.id.map((heading, index) => (
        <div className={styles.contentDescription} key={index}>
          <h1>{pageDetails.heading[index]}</h1>
          <h3>{pageDetails.subHeading[index]}</h3>
          <p>{pageDetails.description[index]}</p>
          <button>{pageDetails.learnMore[index]}</button>
        </div>
      ))} */}
    </>
  );
};

export default ContentDescription;
