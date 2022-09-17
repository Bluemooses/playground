import NavLink from "../NavLink/NavLink.js";
import GetTestRoute from "../../Functions/GetTestRoute.js";

function Nav() {
  return (
    <div className="Nav">
        <NavLink onClick={GetTestRoute} href="https://www.google.com" target="_blank">Google</NavLink>      
        <NavLink href="https://www.linkedin.com/in/jacob-brenke/" target="_blank">LinkedIn</NavLink>
    </div>
  );
}
export default Nav;
