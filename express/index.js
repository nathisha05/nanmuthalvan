/*const exp = require("express");
const mysql = require("mysql2"); // ✅ You missed this line
const app = exp();

const db = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "nathisha123",
  database: "emp",
});

// ✅ Test database connection
db.getConnection((err, connection) => {
  if (err) {
    console.log("❌ Database connection failed!", err);
  } else {
    console.log("✅ Database connected successfully!");
    connection.release(); // release connection back to pool
  }
});

// ✅ Route definition
app.get("/alluser", (req, res) => {
  const que = "select*from emp";
  db.query(que, (err, result) => {
    if (err) {
      return res.send("db");
    } else {
      res.send(result);
    }
  });
});

app.get("/singleuser", (req, res) => {
  const que = "select*from emp where empno=7369";
  db.query(que, (err, result) => {
    if (err) {
      return res.send("db");
    } else {
      res.send(result);
    }
  });
});

// ✅ Start server
app.listen(8000, () => {
  console.log("🚀 Server is running on port 8000");
});*/
//npm init
// npm i express
// node index.js
const exp = require("express");
const app = exp();
const mysql = require("mysql2");

const bodyParser = require("body-parser");

app.use(bodyParser.json());

const db = mysql.createPool({
  port: 3306,
  host: "localhost",
  user: "root",
  password: "nathisha123",
  database: "emp",
});

//start server
app.listen(8000, () => {
  console.log("Server is running");
});

db.getConnection((err) => {
  if (err) {
    console.log("database is not connected");
  } else {
    console.log("database connected");
  }
});

const pro = {
  id: 1,
  price: 250,
};

//route
// app.get("/allUser", (req, res) => {
//   res.send(pro);
// });

app.get("/allUsers", (req, res) => {
  const que = "select * from emp";
  db.query(que, (err, result) => {
    if (err) {
      console.log(err);
      return res.send("db error");
    }
    res.send(result);
  });
});

app.post("/user", (req, res) => {
  const { empno } = req.body;
  const query = "select * from emp where empno=?";
  db.query(query, [empno], (err, result) => {
    if (err) {
      console.log(err);
      return res.send("db.error");
    }

    res.send(result);
  });
});
