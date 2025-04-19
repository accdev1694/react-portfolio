import Navlinks from "../Navlinks/Navlinks";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={`navbar ${styles.navbar}`}>
      <Link to={"/"} className={styles.logo}>
        Portfoli<span className={styles.colorChange}>o</span>
      </Link>
      <div className="links">
        <Navlinks />
      </div>
    </div>
  );
};

export default Navbar;
