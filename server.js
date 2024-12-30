const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();
const contactRoute = require("./route/contactRoute");

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());

// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: "gmail", // Gmail service
  auth: {
    user: process.env.EMAIL_USER, // Your email address (e.g., a.mla.yalew@gmail.com)
    pass: process.env.EMAIL_PASS, // Your email password or app password
  },
});

// Email sending function
const sendEmail = async (name, email, message) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_USER, // Sender address
      to: "your-email@example.com", // Your email address (where you want to receive the message)
      subject: "New Contact Form Submission", // Email subject
      text: `You have received a new message from ${name} (${email}):\n\n${message}`,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully.");
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

// Contact API Endpoint
app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ msg: "All fields are required." });
  }

  try {
    // Call the function to send the email
    await sendEmail(name, email, message); // Send the email to your address

    // Send response back to frontend
    res.status(200).json({ msg: "Message sent successfully!" });
  } catch (error) {
    console.error("Error in sending email:", error);
    res.status(500).json({ msg: "Error sending email." });
  }
});

// Server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
