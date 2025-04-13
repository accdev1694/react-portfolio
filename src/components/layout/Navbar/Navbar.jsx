import Navlinks from "../Navlinks/Navlinks";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={`navbar ${styles.navbar}`}>
      <Link to={"/"}>
        ol<span className="color-change">o</span>che
      </Link>
      <div className="links">
        <Navlinks />
      </div>
    </div>
  );
};

export default Navbar;
