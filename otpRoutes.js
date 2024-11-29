// import express from "express";
// import nodemailer from "nodemailer";
// import { google } from "googleapis";
// import User from "./models/user.model.js";
// import jwt from "jsonwebtoken";

// const router = express.Router();

// const oauth2Client = new google.auth.OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     process.env.REDIRECT_URI
// );

// oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN
// });

// const generateOtp = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString();
// };

// router.post("/send-otp", async (req, res) => {
//     const { fullName, email, password } = req.body;

//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: true, message: "User already exists" });
//         }

//         const otp = generateOtp();

//         // Save user with OTP to the database
//         const user = new User({ fullName, email, password, otp });
//         await user.save();

//         const accessToken = await oauth2Client.getAccessToken();
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: process.env.EMAIL_USER,
//                 clientId: process.env.CLIENT_ID,
//                 clientSecret: process.env.CLIENT_SECRET,
//                 refreshToken: process.env.REFRESH_TOKEN,
//                 accessToken: accessToken.token,
//             },
//         });

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: 'OTP Verification',
//             text: `Your OTP is: ${otp}`,
//         };

//         await transporter.sendMail(mailOptions);

//         res.status(200).json({ success: true, message: "OTP sent to your email" });
//     } catch (error) {
//         console.error("Error sending OTP:", error);
//         res.status(500).json({ error: true, message: "Error sending OTP" });
//     }
// });

// router.post("/verify-otp", async (req, res) => {
//     const { email, otp } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         if (!user || user.otp !== otp) {
//             return res.status(400).json({ error: true, message: "Invalid OTP" });
//         }

//         user.otp = null; // Clear OTP after verification
//         await user.save();

//         const token = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });

//         res.status(200).json({ success: true, accessToken: token });
//     } catch (error) {
//         console.error("Error verifying OTP:", error);
//         res.status(500).json({ error: true, message: "Error verifying OTP" });
//     }
// });

// export default router;



// import express from "express";
// import nodemailer from "nodemailer";
// import { google } from "googleapis";
// import User from "./models/user.model.js";
// import jwt from "jsonwebtoken";

// const router = express.Router();

// const oauth2Client = new google.auth.OAuth2(
//     process.env.CLIENT_ID,
//     process.env.CLIENT_SECRET,
//     process.env.REDIRECT_URI
// );

// oauth2Client.setCredentials({
//     refresh_token: process.env.REFRESH_TOKEN
// });

// const generateOtp = () => {
//     return Math.floor(100000 + Math.random() * 900000).toString();
// };

// router.post("/send-otp", async (req, res) => {
//     const { fullName, email, password } = req.body;

//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).json({ error: true, message: "User already exists" });
//         }

//         const otp = generateOtp();

//         // Save user with OTP to the database
//         const user = new User({ fullName, email, password, otp });
//         await user.save();

//         const accessToken = await oauth2Client.getAccessToken();
//         const transporter = nodemailer.createTransport({
//             service: 'gmail',
//             auth: {
//                 type: 'OAuth2',
//                 user: process.env.EMAIL_USER,
//                 clientId: process.env.CLIENT_ID,
//                 clientSecret: process.env.CLIENT_SECRET,
//                 refreshToken: process.env.REFRESH_TOKEN,
//                 accessToken: accessToken.token,
//             },
//         });

//         const mailOptions = {
//             from: process.env.EMAIL_USER,
//             to: email,
//             subject: 'OTP Verification',
//             text: `Your OTP is: ${otp}`,
//         };

//         await transporter.sendMail(mailOptions);

//         res.status(200).json({ success: true, message: "OTP sent to your email" });
//     } catch (error) {
//         console.error("Error sending OTP:", error);
//         res.status(500).json({ error: true, message: "Error sending OTP" });
//     }
// });

// router.post("/verify-otp", async (req, res) => {
//     const { email, otp } = req.body;

//     try {
//         const user = await User.findOne({ email });

//         if (!user || user.otp !== otp) {
//             return res.status(400).json({ error: true, message: "Invalid OTP" });
//         }

//         user.otp = null; // Clear OTP after verification
//         await user.save();

//         const token = jwt.sign({ userId: user._id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "1h" });

//         res.status(200).json({ success: true, accessToken: token });
//     } catch (error) {
//         console.error("Error verifying OTP:", error);
//         res.status(500).json({ error: true, message: "Error verifying OTP" });
//     }
// });

// export default router;
