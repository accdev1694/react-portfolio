import { useState } from "react";
import { getImageUrl } from "../../../utils";
import Navlinks from "../Navlinks/Navlinks";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
      <Link to={"/"} className={styles.logo}>
        Portfoli<span className={styles.colorChange}>o</span>
      </Link>
      <div className="links">
        <img
          className={styles.burgerMenu}
          src={isMenuOpen ? getImageUrl("./assets/images/nav/closeIcon.png") : getImageUrl("./assets/images/nav/menuIcon.png")}
          alt=""
          onClick={()=>setIsMenuOpen(!isMenuOpen)}
        />

        <Navlinks isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}/>
      </div>
    </>
  );
};

export default Navbar;
