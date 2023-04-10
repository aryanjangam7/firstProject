import { NavLink, Link } from "react-router-dom";
import ThreeLines from "../images/threeLines.svg"

function NavBar(){
    return(
        <div className="Nav-bar">
            <div><h1>LOGO</h1></div>
            <div>
                <ul>
                    <li> <NavLink to="/"> Home </NavLink> </li>
                    <li> <NavLink to="/about"> About </NavLink></li>
                    <li> <NavLink to="/projects"> Projects </NavLink></li>
                    <li> <NavLink to="/contact"> Contact Us </NavLink> </li>
                </ul>
            </div>
            <div className="three">
                <img src={ThreeLines} />
            </div>
        </div>
    )
}

export default NavBar;