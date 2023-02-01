import React from "react";
import { BoxIconElement } from "boxicons";
import './CSS/footer.css'

const Footer = () => {
  return(
    <div className="footer">
    <div className="icon">
    <a href="https://github.com/lopezmic05" target={"_blank"}><box-icon type='logo' name='github'></box-icon></a>
    <a href="https://www.linkedin.com/in/michaellopez05/" target={"_blank"}><box-icon type='logo' name='linkedin-square'></box-icon></a>
    </div>
    </div>
  ) 
};

export default Footer;
