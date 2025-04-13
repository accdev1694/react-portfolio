import { useNavigate } from "react-router-dom";
import styles from "./ActionButton.module.css";

const ActionButton = ({ buttonContent, nextPage }) => {
  const navigate = useNavigate();
  return (
    <button
      className={styles.actionButton}
      onClick={() => {
        navigate(nextPage);
      }}
    >
      {buttonContent}
    </button>
  );
};

export default ActionButton;
