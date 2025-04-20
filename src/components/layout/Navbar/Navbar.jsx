import Navlinks from "../Navlinks/Navlinks";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <Link to={"/"} className={styles.logo}>
        Portfoli<span className={styles.colorChange}>o</span>
      </Link>
      <div className="links">
        <button className="burgerMenu">code here</button>
        <Navlinks />
      </div>
    </>
  );
};

export default Navbar;
