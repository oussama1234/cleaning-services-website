import { Resend } from 'resend';

// Initialize Resend client
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
export const emailConfig = {
  from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
  to: process.env.EMAIL_TO || 'oussama.meq@gmail.com',
};

/**
 * Send an email using Resend
 * @param {Object} params - Email parameters
 * @param {string} params.to - Recipient email
 * @param {string} params.subject - Email subject
 * @param {string} params.html - Email HTML content
 * @returns {Promise} - Resend API response
 */
export async function sendEmail({ to, subject, html }) {
  try {
    const data = await resend.emails.send({
      from: emailConfig.from,
      to: to || emailConfig.to,
      subject,
      html,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Email sending error:', error);
    return { success: false, error: error.message };
  }
}

export default resend;
