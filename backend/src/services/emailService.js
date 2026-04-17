const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: false,
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS }
});

exports.sendOrderConfirmation = async (to, order) => {
  const html = `<p>Hi ${order.userName},</p>
    <p>Thanks for your order ${order.id}. Total: NGN ${order.total}</p>
    <p>Delivery: ${order.deliveryOption} ${order.scheduledDate ? 'on ' + order.scheduledDate : ''}</p>`;
  await transporter.sendMail({ from: process.env.EMAIL_FROM, to, subject: 'Order received - Mlola Aqua', html });
};
