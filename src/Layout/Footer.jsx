import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer dark-background">
        <div className=" copyright text-center">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Purohit-KhanaKhazana</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
          <div className="credits">
            {/* All the links in the footer should remain intact. */}
            {/* You can delete the links only if you've purchased the pro version. */}
            {/* Licensing information: https://bootstrapmade.com/license/ */}
            {/* Purchase the pro version with working PHP/AJAX contact form: [buy-url] */}
            Designed by <strong>AD Tech</strong>
          </div>
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
