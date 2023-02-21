import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">Goal Setter</Link>
      </div>
      <ul>
        <li>
          <FaUser></FaUser>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <FaSignInAlt></FaSignInAlt>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
