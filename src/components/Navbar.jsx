import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/" className="logo">
        oloche<span className="a-colorchange">a</span>boje
      </Link>
      <div className="navlist">
        <Link to="./my-skills">skills</Link>
        <Link to="./my-projects">projects</Link>
        <Link to="./contact-me">contact</Link>
      </div>
    </div>
  );
};

export default Navbar;
