import Navlinks from "../Navlinks/Navlinks";
import "./Navbar.css";
import { Link } from "react-router-dom";
import "../../styles/global.css"



const Navbar = () => {
  return (
    <div className="navbar">
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
