import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";
const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };
  /* STATIC RESUME DATA */
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work Exprience", logoSrc: "work-exprience.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];
  const programmingSkillsDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 85 },
    { skill: "Express JS", ratingPercentage: 89 },
    { skill: "Node JS", ratingPercentage: 89 },
    { skill: "Mongo Db", ratingPercentage: 70 },
    { skill: "Core Java", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 80 },
    { skill: "Tailwind CSS ", ratingPercentage: 80 },
    { skill: "UIPATH", ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: (
        <>
          <a
            href="https://mymoney-7c3af.web.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Personal Portfolio Website using Front-End
          </a>
        </>
      ),
      duration: { fromDate: "2021", toDate: "2024" },
      description: (
        <ul className="list-disc list-inside">
          <li className="font-bold">
            It's website to showcase all my details & projects at
            one place using React js using front end.
          </li>
        </ul>
      ),
    },
    {
      title: (
        <>
          <a
            href="https://thedojosite-5d67d.web.app/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project Management Software using Full Stack
          </a>
        </>
      ),
      duration: { fromDate: "2022", toDate: "2024" },
      description: (
        <ul className="list-disc list-inside">
          <li className="font-bold">
            This application help teams to manage their project tasks, deadlines
            effectively, fostering collaboration and productivity.
          </li>
        </ul>
      ),
    },
    {
      title: "Fullstack Development",
      duration: { fromDate: "2022", toDate: "2023" },
      description: (
        <ul>
          <li>
            It's comprehensive fullstack development project encompassing both
            frontend & backend technologies to create scalable & interactive
            web applications.",
          </li>
        </ul>
      ),
    },
    {
      title: (
        <>
          DevOps(Online Payment System using UiPath){" "}
          <a
            href="https://ega-gridiron.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700"
          >
            [Website]
          </a>
        </>
      ),
      duration: { fromDate: "2022", toDate: "2023" },
      description:
      <ul>
        <li>
        Online payment system's a robust solution for users developed using UiPath, 
        a leading RPA platform, simplifying the handling of online payments to deliver
         a seamless & secure customer experience. Technologies Used: UiPath's RPA, python, mySQL, Stripe, & Paystack.
        </li>
        </ul>
    },
  ];
  const resumeDetails = [
    /* EDUCATION */
    <div className="resume-screen-container" key="Education">
      <ResumeHeading
        heading={"High School and Preparatory"}
        subHeading={"Secondary School: Maksegnit Gondar, Ethiopia"}
        fromDate={"2009"}
        toDate={"2011"}
      />
      <ResumeHeading
        heading={
          <a
            href="https://www.bdu.edu.et/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bahir Dar University
          </a>
        }
        subHeading={
          "Bachelor of Science in Electrical and Computer Engineering"
        }
        fromDate={"2013"}
        toDate={"2017"}
      />
      <ResumeHeading
        heading={
          <a
            href="https://www.aau.edu.et/aait/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Addis Ababa University Progress
          </a>
        }
        subHeading={"Institute of Technology, Ethiopia, Addis Ababa"}
        fromDate={"2023"}
        toDate={"now"}
      />
    </div>,
    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Trainee in system software development & GNC Researcer"}
          fromDate={"2018"}
          toDate={"2019"}
          /* subHeading={["FULL STACK DEVELOPER INTERN"]}*/
        />
        <div className="Experience-description">
          <ul className="resume-description-text">
            <li>
              {" "}
              Learn Software development details like programming skills,
              Embedded system, system architecture, & development methodologies
              of Drones, Rocket & missiles FCS algorithms.
            </li>
            <li>
              Learn navigation systems, sensor interfacing like gyroscopes,
              accelerometers, Barometer, GPS to maintain, flight control
              software real-time navigation accuracy.
            </li>
          </ul>
        </div>
        <ResumeHeading
          heading={"Standard FCS Full Stack Developer and  Supervisor"}
          fromDate={"2021"}
          toDate={"2022"}
        />
        <div className="Experience-description">
          <ul className="resume-description-text">
            <li>
              Design a system using V-model for efficient management of realtime
              simulation entities
            </li>
            <li>
              Work entire SDLC from requirements gathering specification to
              design, implementation, testing, maintenance, Deployment,
              Implement FCS architectures & DO-178C standards.
            </li>
            <li>
              Implement algorithms using programming languages such as C/C++, C#
              , react js, MongoDB
            </li>
          </ul>
        </div>
      </div>
      <ResumeHeading
        heading={"DevOps Engineer and and Automation (FCS Supervisor)"}
        fromDate={"2022"}
        toDate={"2023"}
      />
      <div className="Experience-description">
        <ul className="resume-description-text">
          <li>
            Standard FCS Development using DevOps: Integrating CI/CD pipelines,
            automated testing, monitorinG to streamline in realtime, enhance the
            reliability, efficiency of FCS development.
          </li>
          <li>
            I was working on DevOps Engineer at EGA Gridron: orchestrated CI/CD
            piplines, manage Terraform & ensured scalability on AWS, optimizing
            develoyment efficiency and security.
          </li>
        </ul>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + "%" }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,
    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,
    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Music"
        description="Listening to soothing music is something i can never compromise with, skimming through Spotify's pop songs charts is at times the best stress reliever that i can get my hands on."
      />
      <ResumeHeading
        heading="Competitive Gaming"
        description="I like to challenge my reflexes a lot while competing in football games, pushing the rank and having interactive gaming sessions excites me the most."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};
export default Resume;
