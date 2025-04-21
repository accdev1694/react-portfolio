import styles from "./Navlinks.module.css"
import { Link } from "react-router-dom";

const Navlinks = ({isMenuOpen, setIsMenuOpen}) => {
    return ( 
        <div className={`${styles.navlinks} ${!isMenuOpen && styles.menuClosed}`} onClick={()=>setIsMenuOpen(false)}>
            <Link to={"/"}>homePage</Link>
            <Link to={"/skills"}>mySkills</Link>
            <Link to={"/projects"}>myProjects</Link>
            <Link to={"/contacts"}>contactMe</Link>
        </div>
     );
}
 
export default Navlinks;