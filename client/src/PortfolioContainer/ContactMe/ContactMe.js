import React, { useState } from "react";
import Typical from "react-typical";
import axios from "axios";
import { toast } from "react-toastify";

import imgBack from "../../../src/images/mailz.jpeg";
import load1 from "../../../src/images/load2.gif";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";

import Footer from "../../PortfolioContainer/Footer/Footer";

import "./ContactMe.css";

export default function ContactMe(props) {
  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => setName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleMessage = (e) => setMessage(e.target.value);

  const submitForm = async (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      setBanner("All fields are required.");
      toast.error("All fields are required.");
      return;
    }

    try {
      let data = { name, email, message };
      setBool(true);

      // Send the form data to the backend
      const res = await axios.post("http://localhost:5000/contact", data);

      if (res.status === 200) {
        setBanner(res.data.msg || "Message sent successfully!");
        toast.success(res.data.msg || "Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        setBanner("Something went wrong. Please try again.");
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      setBanner("Error sending message. Please try again later.");
      toast.error("Error sending message. Please try again later.");
      console.error("Submit Form Error:", error.response || error.message || error);
    } finally {
      setBool(false);
    }
  };

  return (
    <div className="main-container fade-in" id={props.id || ""}>
      <ScreenHeading subHeading={"Let's Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typical loop={Infinity} steps={["Get In Touch 📧", 1000]} />
          </h2>
          <a href="https://web.facebook.com/">
            <i className="fa fa-facebook-square" />
          </a>
          <a href="https://www.google.com">
            <i className="fa fa-google-plus-square" />
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa fa-instagram" />
          </a>
          <a href="https://www.youtube.com/">
            <i className="fa fa-youtube-square" />
          </a>
          <a href="https://twitter.com/">
            <i className="fa fa-twitter" />
          </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={imgBack} alt="Email background" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              onChange={handleName}
              value={name}
              placeholder="Enter your name"
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              onChange={handleEmail}
              value={email}
              placeholder="Enter your email"
            />

            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              onChange={handleMessage}
              value={message}
              placeholder="Enter your message"
            />

            <div className="send-btn">
              <button type="submit">
                Send
                <i className="fa fa-paper-plane" />
                {bool && (
                  <b className="load">
                    <img src={load1} alt="Loading animation" />
                  </b>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}
