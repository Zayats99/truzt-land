import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

async function sendEmail(req: any, res: any) {
  try {
    await sendgrid.send({
      to: "hello@truzt.io", // Your email where you'll receive emails
      from: "hello@truzt.io", // your website email address here
      subject: `Get in touch`,
      html: `<h3>You've got a new mail from <u>${req.body.name}</u>, their email is: ✉️${req.body.email} </h3>
      <div style="font-size: 16px;">
      <p>Message:</p>
      <p>${req.body.message}</p>
      <br>
      </div>`,
    });
    return res.status(200).json({ error: "" });
  } catch (error: any) {
    return res.status(error.code || 500).json({ error: error.message });
  }
}

export default sendEmail;
