/**
 * EmailJS — credentials from environment (never commit real values).
 *
 * Setup:
 * 1. https://www.emailjs.com → account → Email Services → add Gmail (or other).
 * 2. Email Templates → create template. Use variables:
 *    {{to_email}}, {{from_email}}, {{message}}, {{reply_to}}
 *    Set “To Email” in the template to your inbox or use {{to_email}} if supported.
 * 3. Account → API Keys → Public Key.
 * 4. Copy `.env.example` to `.env.local` and fill VITE_EMAILJS_* (see below).
 * 5. On Vercel: Project → Settings → Environment Variables → same names.
 *
 * Rebuild/restart dev server after changing .env.local.
 */
const trim = (v) => (typeof v === "string" ? v.trim() : "");

export const emailjsConfig = {
  serviceID: trim(import.meta.env.VITE_EMAILJS_SERVICE_ID),
  templateID: trim(import.meta.env.VITE_EMAILJS_TEMPLATE_ID),
  publicKey: trim(import.meta.env.VITE_EMAILJS_PUBLIC_KEY),
  toEmail:
    trim(import.meta.env.VITE_EMAILJS_TO_EMAIL) ||
    "kareemkhamis2030@gmail.com",
};

export function isEmailJsConfigured() {
  return Boolean(
    emailjsConfig.serviceID &&
      emailjsConfig.templateID &&
      emailjsConfig.publicKey
  );
}
