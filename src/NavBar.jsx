import { NavLink, Link } from "react-router-dom";

function NavBar(){
    return(
        <div className="Nav-bar">
            <div><h1>LOGO</h1></div>
            <div>
                <ul>
                    <li> <NavLink to="/"> Home </NavLink> </li>
                    <li> <NavLink to="/about"> About </NavLink></li>
                    <li> <NavLink to="/contact"> Contact </NavLink> </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;