const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", router);

app.listen(5000, () => console.log("Server Running"));


const contactEmail = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: 'mansiraziz93@gmail.com',
    pass: 'arbfemljawvcbbxy'
  }
});


contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.get("/",(req, res) =>{
  res.send("Home page");
})

router.post("/contact", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message; 
  const mail = {
    from: name,
    to: "mansiraziz93@gmail.com",
    subject: "Hi Mansir you have a Message from your Website",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json({ status: "ERROR" });
    } else {
      res.json({ status: "Message Sent" });
    }
  });
});