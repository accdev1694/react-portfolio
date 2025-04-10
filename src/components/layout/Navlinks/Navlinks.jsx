import styles from "./Navlinks.module.css"
import { Link } from "react-router-dom";

const Navlinks = () => {
    return ( 
        <div className={styles.navlinks}>
            <Link to={"/"}>homePage</Link>
            <Link to={"/"}>mySkills</Link>
            <Link to={"/"}>myProjects</Link>
            <Link to={"/"}>contactMe</Link>
        </div>
     );
}
 
export default Navlinks;