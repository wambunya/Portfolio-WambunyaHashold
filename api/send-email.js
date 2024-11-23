// api/send-email.js

import emailjs from "emailjs-com";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      // Destructure the data from the frontend form
      const { name, email, message } = req.body;

      // Initialize EmailJS
      const userId = process.env.EMAILJS_USER_ID; // Use environment variable
      emailjs.init(userId);

      // Send email via EmailJS
      const response = await emailjs.send(
        "YOUR_SERVICE_ID", // Replace with your service ID
        "YOUR_TEMPLATE_ID", // Replace with your template ID
        { name, email, message }
      );

      res.status(200).json({ message: "Email sent successfully!", response });
    } catch (error) {
      res.status(500).json({ message: "Failed to send email", error });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
