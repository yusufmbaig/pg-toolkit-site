import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <ul>
          <div className="NavListItem">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/EnglishToolkit">English Toolkit</a>
            </li>
            <li>
              <a href="/SpanishEnglishToolkit">Spanish-English Toolkit</a>
            </li>
          </div>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
