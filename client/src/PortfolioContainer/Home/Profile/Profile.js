import React from "react";
import Typical from "react-typical";
import "./Profile.css";
import ScrollService from "../../../utilities/ScrollService";

const Profile = () => {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://www.facebook.com/amlaku.yalew.3">
                <i className="fa fa-facebook-square" />
              </a>
              <a href="/#">
                <i className="fa fa-google-plus-square" />
              </a>
              <a href="https://www.instagram.com/amlayalew/">
                <i className="fa fa-instagram" />
              </a>
              <a href="https://www.linkedin.com/in/amlaku-yalew-049b35148/">
                <i className="fa fa-linkedin-square" />
              </a>
              <a href="https://x.com/amy026410994454">
                <i className="fa fa-twitter" />
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I' M<span className="highlighted-text"> Amlaku.Yalew' Full Stack Developer &  DevOps Enigneer.</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              <h1>
                <Typical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Development😎",
                    1000,
                    "Full Stack Developer!💻",
                    1000,
                    "MERN Stack Dev",
                    1000,
                    "Cross Platform Dev📱",
                    1000,
                    "React / React Native📱",
                    1000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Visual Development Platform of building applications with front
                and back end operations.
                <span>
                </span>
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button
              className="btn primary-btn"
              onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
            > Hire Me </button>
            <a href="amycv.pdf" download="Amlaku amycv.pdf">
              <button className="btn highlighted-btn"> Get Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-p">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
