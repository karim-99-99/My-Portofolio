// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com and create a free account
// 2. Create a new Email Service (choose Gmail)
// 3. Create an Email Template with these variables:
//    - {{to_email}} - recipient email (kareemkhamis2030@gmail.com)
//    - {{from_email}} - sender's email
//    - {{message}} - message content
//    - {{reply_to}} - reply to email
// 4. Get your Service ID, Template ID, and Public Key from EmailJS dashboard
// 5. Replace the values below

export const emailjsConfig = {
  serviceID: "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
  templateID: "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
  publicKey: "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
  toEmail: "kareemkhamis2030@gmail.com", // Your Gmail address
};

