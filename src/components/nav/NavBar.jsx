import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import ilogo from "../../assets/Untitled-66.png";
import { BiExit } from "react-icons/bi";
import "./nav.css";
import { useState } from "react";
function NavBar() {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  console.log(open);
  return (
    <nav>
      <div className="container">
        <div className="row">
          <Link className="logo" to="/">
            <img src={ilogo} alt="image logo" />
          </Link>
          <ul className={open ? "isopen " : " exit"}>
            <li className='close-icon' onClick={handleClick}><BiExit  /></li> 
            <li className="home"><Link to="/" >Home</Link></li> 
            
            <li>
              <Link to={"/projects"}>Projects</Link>
            </li>

            <li>
              <Link to="/contact">contact</Link>
            </li>
          </ul>
          <RxHamburgerMenu className="hamburger-menu" onClick={handleClick} />
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
