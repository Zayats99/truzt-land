 export default async function handler(req: any, res: any) {
 if (req.method === "PUT") {
   fetch("https://api.sendgrid.com/v3/marketing/contacts", {
    method: 'PUT',
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
    },
    body: JSON.stringify({
      contacts: [{ email: `${req.body.mail}` }],
      list_ids: [process.env.SENDGRID_MAILING_ID],
    }),
   }).then(() => {
       res.status(200).send({
         message:
           "Your email has been succesfully added to the mailing list. Welcome 👋",
       });
     })
     .catch(() => {
       res.status(500).send({
         message:
           "Oups, there was a problem with your subscription, please try again or contact us",
       });
     });
 }
}
