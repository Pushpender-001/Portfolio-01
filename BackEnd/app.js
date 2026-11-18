import "dotenv/config";
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";
import rateLimit from "express-rate-limit";

const app = express();

// 1. Needed on Vercel so rate limiting sees the real visitor IP
app.set("trust proxy", 1);

// 2. Allow only your frontend (add your real URL; keep localhost for testing)
app.use(
  cors({
    origin: ["https://pushpender-portfolio-01-48fj.vercel.app/"],
  })
);
app.use(express.json());

// Max 5 messages per 15 minutes per IP (stops spam)
app.use(
  "/api/contact",
  rateLimit({ windowMs: 15 * 60 * 1000, limit: 5 })
);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Optional: lets you check the deploy works by opening the URL
app.get("/", (req, res) => res.send("Backend is running"));

app.post("/api/contact", async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to send message" });
  }
});

// 3. Only start a server locally; Vercel runs the app itself
if (!process.env.VERCEL) {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

// 4. Vercel needs the app exported
export default app;