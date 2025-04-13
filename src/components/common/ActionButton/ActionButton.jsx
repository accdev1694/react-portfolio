import { useNavigate } from 'react-router-dom';
import styles from './ActionButton.module.css'; 

const ActionButton = ({buttonContent, nextPage}) => {
    const navigate = useNavigate()
    return ( 
        <div className={styles.actionButton}><button onClick={()=>{navigate(nextPage)}}>{buttonContent}</button></div>
     );
}
 
export default ActionButton;