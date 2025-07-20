import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {/* Theme by{" "} */}
          <a
            href="https://drive.google.com/file/d/12I4UPg97jmHphqBppBmnAzIoIiKH2KUq/view?usp=drivesdk"
            target="_blank"
            rel="noreferrer"
          >
            Contact Me!!!☎️
          </a>
        </p>
      </div>
    </Fade>
  );
}
