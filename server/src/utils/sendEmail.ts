"use strict";

import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "smtp.gmail.com",
  port: 465,
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
    user: "restar.pinecone@gmail.com",
    pass: "cwfvuwtkrrcbugck",
  },
});
interface ISendEmail {
  email: string;
  otp: string;
}

export const sendEmail = async ({ email, otp }: ISendEmail) => {
  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to: email,
    subject: "reset email",
    text: "Hello world?",
    html: generateOtp(otp as string),
  });
};

const generateOtp = (otp: string) => {
  return `
      <div style="min-width:1000px; overflow:auto; line-height:2">
        <div style="margin:50px auto; width:70%; padding:20px 0">
          <div style="border-bottom:1px solid #eee">
            <h3 style="font-size:1.4em; color: #00466a; text-decoration:none; font-weight:600">Re Star Inc</h3>
          </div>
          <p style="font-size:1.1em">Hello Dear</p>
          <p>
            Thank you for choosing Our Brand. Your verification code is
          </p>
          <h2 style="background:#00466a; margin:0 auto; width:max-content; padding:0 10px;color:#fff; border-radius: 4px;">
            ${otp}
          </h2>
          <p style="font-size:0.9em;">Regards,<br />Restar Inc</p>
          <hr style="border:none;border-top:1px solid #eee" />
          <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
            <p>Re Star Inc</p>
            <p>Global</p>
          </div>
        </div>
      </div> 
    `;
};
