const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

let users = [];
let idCounter = 1;

app.get("/", (req, res) => {
  res.send("Welcome to the user management API !");
});

app.post("/users", (req, res) => {
  const user = { id: idCounter++, ...req.body };
  users.push(user);
  res.status(201).json(user);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User  not found");
  res.json(user);
});

app.put("/users/:id", (req, res) => {
  const user = users.find((u) => u.id === parseInt(req.params.id));
  if (!user) return res.status(404).send("User  not found");

  Object.assign(user, req.body);
  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  const userIndex = users.findIndex((u) => u.id === parseInt(req.params.id));
  if (userIndex === -1) {
    return res.status(404).json({
      status: "error",
      message: "User not found",
      timestamp: new Date().toISOString(),
    });
  }

  const deletedUser = users.splice(userIndex, 1)[0];

  return res.status(200).json({
    status: "success",
    message: "User successfully deleted",
    data: deletedUser,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
