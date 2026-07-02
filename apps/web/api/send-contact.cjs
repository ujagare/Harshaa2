const { Resend } = require("resend");

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL =
  process.env.CONTACT_EMAIL || "marigoldmagick@harshaagurnani.com";
const FROM_EMAIL = process.env.FROM_EMAIL || "onboarding@resend.dev";

const ALLOWED_ORIGINS = [
  "https://marigoldmagick.com",
  "https://www.marigoldmagick.com",
  "https://harshaagurnani.com",
  "https://www.harshaagurnani.com",
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null,
  "http://localhost:3000",
  "http://localhost:3001",
].filter(Boolean);

const resend = RESEND_API_KEY ? new Resend(RESEND_API_KEY) : null;

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

function sanitizeSubject(str) {
  return String(str)
    .replace(/[<>&"'\n\r]/g, "")
    .trim()
    .slice(0, 100);
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email);
}

function isAllowedOrigin(origin) {
  if (!origin) return true;
  try {
    const parsed = new URL(origin);
    // Allow marigoldmagick.com, all vercel.app preview URLs, and localhost
    if (parsed.hostname === "marigoldmagick.com") return true;
    if (parsed.hostname === "www.marigoldmagick.com") return true;
    if (parsed.hostname === "harshaagurnani.com") return true;
    if (parsed.hostname === "www.harshaagurnani.com") return true;
    if (parsed.hostname.endsWith(".vercel.app")) return true;
    if (parsed.hostname === "localhost") return true;
    return ALLOWED_ORIGINS.some(
      (allowed) => allowed && parsed.origin === new URL(allowed).origin,
    );
  } catch {
    return false;
  }
}

const rateLimitMap = new Map();

function checkRateLimit(ip) {
  const now = Date.now();
  const windowMs = 60_000;
  const maxRequests = 5;

  const entry = rateLimitMap.get(ip);
  if (!entry || now - entry.windowStart > windowMs) {
    rateLimitMap.set(ip, { windowStart: now, count: 1 });
    return { allowed: true };
  }

  entry.count += 1;
  if (entry.count > maxRequests) {
    return {
      allowed: false,
      retryAfter: Math.ceil((windowMs - (now - entry.windowStart)) / 1000),
    };
  }

  return { allowed: true };
}

module.exports = async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "0");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  if (req.method === "OPTIONS") return res.status(204).end();

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const rateLimitResult = checkRateLimit(
    req.headers["x-forwarded-for"] || req.socket.remoteAddress || "unknown",
  );
  if (!rateLimitResult.allowed) {
    res.setHeader("Retry-After", String(rateLimitResult.retryAfter));
    return res
      .status(429)
      .json({ error: "Too many requests. Please try again later." });
  }

  try {
    const { name, email, phone, message } = req.body || {};

    if (!name || !email || !message) {
      return res
        .status(400)
        .json({ error: "Name, email, and message are required" });
    }

    const cleanName = String(name).trim().slice(0, 100);
    const cleanEmail = String(email).trim().toLowerCase().slice(0, 254);
    const cleanPhone = String(phone || "")
      .trim()
      .slice(0, 20);
    const cleanMessage = String(message).trim().slice(0, 5000);

    if (!isValidEmail(cleanEmail)) {
      return res.status(400).json({ error: "Invalid email address" });
    }

    if (cleanName.length < 2) {
      return res
        .status(400)
        .json({ error: "Name must be at least 2 characters" });
    }

    if (cleanMessage.length < 10) {
      return res
        .status(400)
        .json({ error: "Message must be at least 10 characters" });
    }

    if (!resend) {
      console.warn(
        "RESEND_API_KEY not configured. Logging contact submission.",
      );
      console.log({
        name: cleanName,
        email: cleanEmail,
        phone: cleanPhone,
        message: cleanMessage,
        timestamp: new Date().toISOString(),
      });
      return res
        .status(200)
        .json({ success: true, message: "Message received (logging mode)" });
    }

    const safeSubject = sanitizeSubject(cleanName);
    const htmlName = escapeHtml(cleanName);
    const htmlEmail = escapeHtml(cleanEmail);
    const htmlPhone = cleanPhone ? escapeHtml(cleanPhone) : null;
    const htmlMessage = escapeHtml(cleanMessage).replace(/\n/g, "<br>");

    const { data, error } = await resend.emails.send({
      from: `Marigold Magick <${FROM_EMAIL}>`,
      to: [CONTACT_EMAIL],
      replyTo: cleanEmail,
      subject: `New contact form submission from ${safeSubject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head><meta charset="utf-8"></head>
        <body style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: #D4AF37; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="color: #1a1a1a; margin: 0; font-size: 24px;">&#10022; Marigold Magick &#10022;</h1>
          </div>
          <div style="background: #ffffff; padding: 30px; border: 1px solid #e5e7eb; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #1a1a1a; font-size: 20px; margin-top: 0;">New Contact Form Submission</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; width: 100px; vertical-align: top;"><strong>Name:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a1a1a;">${htmlName}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;"><strong>Email:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a1a1a;">${htmlEmail}</td>
              </tr>
              ${
                htmlPhone
                  ? `<tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; vertical-align: top;"><strong>Phone:</strong></td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #1a1a1a;">${htmlPhone}</td>
              </tr>`
                  : ""
              }
              <tr>
                <td style="padding: 12px 0; color: #6b7280; vertical-align: top;"><strong>Message:</strong></td>
                <td style="padding: 12px 0; color: #1a1a1a; white-space: pre-wrap;">${htmlMessage}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #f3f4f6; margin: 20px 0;">
            <p style="color: #9ca3af; font-size: 12px; text-align: center;">
              Submitted on ${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
            </p>
          </div>
        </body>
        </html>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(500).json({ error: "Failed to send message" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Message sent successfully" });
  } catch (err) {
    console.error("Contact form error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
};
