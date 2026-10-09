
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Welcome to my first Node.js project!");
});

app.get("/students", (req, res) => {
  res.json([
    { id: 1, name: "Anusha", course: "Node.js" },
    { id: 2, name: "Rahul", course: "React.js" }
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
