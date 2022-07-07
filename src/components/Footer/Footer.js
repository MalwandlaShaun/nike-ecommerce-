import React from "react";
import "../../App.css";

function Footer() {
  return (
    <footer>
      <div className="wrapper"></div>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <p className="footer-para">
              Developer: <span className="my-name"> Malwandla Hlungwani</span>
            </p>

            <div className="contact"></div>
            <div className="socials">
              <a
                href="https://www.facebook.com/malwandlashaun.hlungwani/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/malwandla-hlungwani-92443414b/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="https://github.com/MalwandlaShaun/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="https://github.com/MalwandlaShaun/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
            </div>
            <p className="copyright">
              Copyright&nbsp;&copy;&nbsp;Nike Shoes Template
            </p>
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
