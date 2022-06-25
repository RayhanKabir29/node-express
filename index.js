const express = require("express");
const app = express();
const cors = require("cors");

const port = 5000;

app.use(express.json());
app.use(cors());

const users = [
  { id: 0, name: "Kabir", email: "kabir@gmail.com" },
  { id: 1, name: "Rayhan", email: "rayhan@gmail.com" },
  { id: 2, name: "Rana", email: "rana@gmail.com" },
  { id: 3, name: "Black", email: "black@gmail.com" },
  { id: 4, name: "Horse", email: "horse@gmail.com" },
];
app.get("/", (req, res) => {
  res.send("Hello, world! Node");
});
//object
app.get("/users", (req, res) => {
  const search = req.query.search;

  if (search) {
    const searchUser = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchUser);
  } else {
    res.send(users);
  }
});
//search with params
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser);
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
