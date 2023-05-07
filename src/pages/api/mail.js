// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export default function handler(req, res) {

  const body = JSON.parse(req.body)

  const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Object: ${body.object}\r\n
    Message: ${body.message}\r\n
  `;

  const data = {
    to: 'contact@autheman-victor.fr',
    from: 'contact@autheman-victor.fr',
    subject: 'Nouveau message',
    text: message,
    html: message.replace(/\r\n/g, '<br/>')
  };

  (async () => {
    try {
      await mail.send(data);
      res.status(200).json({
        message: "Bravo"
      })
    } catch {
      res.status(500).json({
        message: "Oups"
      })
      return
    }
  })();


  // mail
  //   .send(data)
  //   .then(() => {
  //     console.log("Email envoyé")
  //       return res.send({message:"Email envoyé"})
  //   })
  //   .catch((error) => {
  //     console.error(error)
  //   })

}

export async function fetcher(url, option = {}) {
  let response
  if(!option) {
    response = await fetch(url);
  } else {
    response = await fetch(url, option);
  }

  const data = await response.json()
  return data
}

