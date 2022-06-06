var nodemailer = require("nodemailer");

async function main() {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "jose.villavicencio@unl.edu.ec",
      pass: "vagzophtdvgdxksk",
    },
  });

  var info = await transporter.sendMail({
    from: "Envio",
    to: "jxavier2525@gmail.com",
    subject: "Lista de Pacientes ✔",
    text: "Lista de Pacientes para el dia dia siguiente >>>",
    //html: "<b>Hello world?</b>",
    attachments: [
      {
        filename: "pacientes.pdf",
        path: __dirname + "/pacientes.pdf",
        //cid: "pacientes",
      },
    ],
  });
  console.log("Email Enviado");
}
main().catch(console.error);

//cron.schedule(
//  "* * * * *",
//  main("Hey there, this email was sent to you automatically")
//);
