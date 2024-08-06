import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <>
      <div className="Footer">
        <footer>
          <div className="SublexicalToolkit">
            <h3>Sublexical Toolkit</h3>
            <p>Copyright 2024</p>
          </div>
          <div className="FooterRightSide">
            <div className="Contact">
              <h3>Contact</h3>
              <p>Sublexical@gmail.com</p>
            </div>
            <div className="Other">
              <h3>Other</h3>
              <p>Privacy Policy</p>
              <p>Terms And Condition</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
