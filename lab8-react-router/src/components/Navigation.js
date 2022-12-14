import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
    return ( 
    <>
    <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/newroute">New Route</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to="/student">Student: Jane Smith, studentNo: 5001</Link>
        </li>
        <li>
          <Link to="/redirect">Redirect</Link>
        </li>
      </ul>
    </> );
}
 
export default Navigation;