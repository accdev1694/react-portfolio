import styles from "./Navlinks.module.css"
import { Link } from "react-router-dom";

const Navlinks = () => {
    return ( 
        <div className={styles.navlinks}>
            <Link to={"/"}>homePage</Link>
            <Link to={"/skills"}>mySkills</Link>
            <Link to={"/projects"}>myProjects</Link>
            <Link to={"/contacts"}>contactMe</Link>
        </div>
     );
}
 
export default Navlinks;