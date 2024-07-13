// components/email-template.js

function EmailTemplate({ invoiceUrl }) {
    return `
      <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
        <header style="text-align: center; margin-bottom: 20px;">

          <h1 style="font-size: 24px; color: #007BFF;">Invoice from Invoicify</h1>
        </header>
        <main style="padding: 10px;">
          <p style="font-size: 16px; line-height: 1.5;">Hello,</p>
          <p style="font-size: 16px; line-height: 1.5;">Thank you for using our service. Your invoice is ready and available for download. Please find the link below:</p>
          <a href="${invoiceUrl}" style="display: inline-block; font-size: 16px; font-weight: bold; color: #ffffff; background-color: #007BFF; padding: 10px 20px; text-decoration: none; border-radius: 5px;">View Invoice</a>
        </main>
        <footer style="text-align: center; margin-top: 20px; font-size: 14px; color: #777;">
          <p>Thank you for your business!</p>
          <p>&copy; ${new Date().getFullYear()} Invoicify. All rights reserved.</p>
        </footer>
      </div>
    `;
  }
  
  export default EmailTemplate;
  