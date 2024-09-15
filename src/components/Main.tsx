import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";
import profilePicture from "../assets/images/photo.png";

function Main() {
  return (
    <div className="container" id="aboutme">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profilePicture} alt="Profile" />
        </div>
        <div className="content">
          <div>
            <h1>Anchiti Ghadi</h1>
            <p>Full Stack Engineer</p>
          </div>
          <div className="social_icons">
            <h5>Social Connections:</h5>
            <a
              href="https://www.linkedin.com/in/anchiti-ghadi/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <div className="mobile_social_icons">
            <a
              href="https://www.linkedin.com/in/anchiti-ghadi/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
