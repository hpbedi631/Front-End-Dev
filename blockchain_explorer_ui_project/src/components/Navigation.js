import React from "react";
import { Link } from "react-router-dom";
const Navigation = () => {
    return ( 
    <div>
    <ul className="nav-ul-class">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/transactions">Transactions</Link>
        </li>
        <li>
          <Link to='/addresses'>Addresses</Link>
        </li>
        <li>
          <Link to='/wallet'>Wallet</Link>
        </li>
      </ul>
    </div> );
}
 
export default Navigation;