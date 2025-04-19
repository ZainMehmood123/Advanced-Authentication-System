// import { MailtrapClient } from "mailtrap"
// import dotenv from 'dotenv'
// const TOKEN = "a381eba1bad829cd5b39bc03c597dc84";
// dotenv.config()
// export const mailtrapClient = new MailtrapClient({
//   token: TOKEN,
// });

// export const sender = {
//   email: "hello@demomailtrap.co",
//   name: "Zain Mehmood",
// };

import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Create Nodemailer transporter
export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

// Sender details
export const sender = {
  email: process.env.GMAIL_USER,
  name: "Zain Mehmood",
};
