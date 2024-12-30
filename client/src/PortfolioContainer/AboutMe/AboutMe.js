import React, { useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./AboutMe.css";

const AboutMe = (props) => {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const SCREEN_CONSTANTS = {
    description:
      "It is me, Amlaku Yalew, My professional experience journey showcases a diverse skill set includes role and responsibilities as arranging from researcher to, Senior Embedded avoinics Engineer, standard flight control software developer and supervisor, Cloud Seeding Project, Online Payment System using UIPATH RPA tool and Full Stack develpment. I'm a Senior Full stack developer, DevOps Engineer with background knowledge of MERN stacks with redux, Firebase, SQL, NOSQL like(MongoDB, Redis) & experience with cloud platforms like AWS, Azure & googleCloud along with a knack of building applications with utmost efficiency. I 've a strong profession background in software developement, softwrae testing like (CI/CD),  Understanding Jira Methdologies. I currently pursuing an MSc & eager to contribute to an organization. My professional experience showcases diverse skills. I had also contributed in Cloud Seeding project such as design, remote controlling, remote ignition, both hardware and software implementation. I had also contributed in Ega-Gridiron company by developing onlinepaymnent system using RPA UIPATH tool get seemless transaction, DevOps engineer & Automationfor IT industries. ",
    highlights: {
      bullets: [
        "Full Stack web development",
        "Interactive Front End as per the design",
        "React and React Native",
        "Redux for State Mnanagement",
        "Cloud Seeding project",
        "standard flight control software developer",
        "online payment system using UiPath RPA tool",
        "DevOps and Automation Engineer",
        "Building REST API and Postman Api",
        "Manage database like MYSQL, Mongodb, Postgres",
      ],
      heading: "Here are a Few Highlights:",
    },
  };

  const renderHighlights = () => {
    return SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
      <div className="highlight" key={i}>
        <div className="highlight-blob"></div>
        <span>{value}</span>
      </div>
    ));
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="about-me-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="about-me-parent">
        <ScreenHeading title={"About Me"} subHeading={"Why Choose Me?"} />
        <div className="about-me-card">
          <div className="about-me-profile"></div>
          <div className="about-me-details">
            <span className="about-me-description">
              {SCREEN_CONSTANTS.description}
            </span>
            <div className="about-me-highlights">
              <div className="highlight-heading">
                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
              </div>
              {renderHighlights()}
            </div>
            <div className="about-me-options">
              <button
                className="btn primary-btn"
                onClick={() => ScrollService.scrollHandler.scrollToHireMe()}
              >  Hire Me </button>
              <a href="amycv.pdf" download="Amlaku amycv.pdf">
                <button className="btn highlighted-btn"> Get Resume </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
