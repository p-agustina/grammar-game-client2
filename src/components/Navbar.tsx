import { NavLink } from "react-router-dom";
// import SignUp from "../pages/SignUp";

function Navbar() {
    return ( 
    <>
     <NavLink to="/signup" style={{color: "white"}}>Sign up</NavLink>
     <NavLink to="/login" style={{color: "white"}}>Log in</NavLink>
    
    </> );
}

export default Navbar;