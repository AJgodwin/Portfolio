// CommonJS server to handle contact form and send email
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Load .env if available
try {
  require('dotenv').config();
} catch (_) {}

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

app.use(cors());
app.use(express.json());

// Basic health check
app.get('/api/health', (_req, res) => res.json({ ok: true }));

// Email transport from env (defaults suitable for Gmail with app password)
function createTransport() {
  const host = process.env.SMTP_HOST || 'smtp.gmail.com';
  const port = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 465;
  const secure = process.env.SMTP_SECURE ? process.env.SMTP_SECURE === 'true' : port === 465;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!user || !pass) {
    throw new Error('Missing SMTP_USER/SMTP_PASS in environment');
  }

  return nodemailer.createTransport({ host, port, secure, auth: { user, pass } });
}

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body || {};
    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: 'Missing fields' });
    }

    // Compose email
    const text = `New portfolio message\n\nFrom: ${name} <${email}>\n\nMessage:\n${message}`;
    const html = `
      <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial; line-height:1.6;">
        <h2 style="margin:0 0 12px;">New portfolio message</h2>
        <p><strong>From:</strong> ${name} &lt;${email}&gt;</p>
        <hr style="border:none;border-top:1px solid #eee;margin:12px 0;" />
        <p>${String(message).replace(/\n/g, '<br/>')}</p>
      </div>
    `;

    const transporter = createTransport();
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'amalgodwin004@gmail.com',
      subject: `Portfolio Contact: ${name}`,
      replyTo: email,
      text,
      html,
    });

    console.log('Email sent:', info.messageId);
    return res.json({ ok: true });
  } catch (err) {
    console.error('Contact send error:', err);
    return res.status(500).json({ ok: false, error: 'Email send failed' });
  }
});

app.listen(PORT, () => {
  console.log(`Contact server listening on http://localhost:${PORT}`);
});
