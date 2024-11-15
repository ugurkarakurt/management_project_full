// src/lib/email.ts
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendResetEmail = async (email: string, resetToken: string) => {
  const resetUrl = `${process.env.NEXTAUTH_URL}/reset-password?token=${resetToken}`;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Şifre Sıfırlama Talebi',
    html: `
      <h1>Şifre Sıfırlama</h1>
      <p>Şifrenizi sıfırlamak için aşağıdaki linke tıklayın:</p>
      <a href="${resetUrl}">Şifremi Sıfırla</a>
      <p>Bu link 1 saat süreyle geçerlidir.</p>
      <p>Eğer bu talebi siz yapmadıysanız, bu emaili görmezden gelebilirsiniz.</p>
    `
  };

  await transporter.sendMail(mailOptions);
};


export const testEmail = async () => {
  const testMailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Test için kendi mailinize gönderecek
    subject: 'Test Email',
    text: 'If you receive this email, your email configuration is working!'
  };

  try {
    await transporter.sendMail(testMailOptions);
    console.log('Test email sent successfully');
    return true;
  } catch (error) {
    console.error('Error sending test email:', error);
    return false;
  }
};