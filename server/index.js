const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const { response } = require("express");

app.use(cors());
app.use(express.json());

//mySQL connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "spectacles",
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("mySQL connected!");
});

app.post("/addNewUser", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const country = req.body.country;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const address = req.body.address;
  const address2 = req.body.address2;

  db.query(
    "INSERT INTO users (firstName, lastName, email, password, country, city, state, zip, address, address2) VALUES (?,?,?,?,?,?,?,?,?,?)",
    [
      firstName,
      lastName,
      email,
      password,
      country,
      city,
      state,
      zip,
      address,
      address2,
    ],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.put("/update-user-info", (req, res) => {
  const id = req.body.id;
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  const password = req.body.password;
  const country = req.body.country;
  const city = req.body.city;
  const state = req.body.state;
  const zip = req.body.zip;
  const address = req.body.address;
  const address2 = req.body.address2;

  db.query(
    "UPDATE users SET  firstName=?, lastName=?, email=?, password=?, country=?, city=?, state=?, zip=?, address=?, address2=? WHERE id=?",
    [
      firstName,
      lastName,
      email,
      password,
      country,
      city,
      state,
      zip,
      address,
      address2,
      id,
    ],
    (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "SELECT * FROM users WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (err) {
        console.log(err);
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Incorrect email/password!" });
      }
    }
  );
});

app.listen("3001", () => {
  console.log("server started on port 3001");
});
