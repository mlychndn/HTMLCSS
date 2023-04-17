const express = require("express");
const fs = require("fs");

const app = express();

app.use(express.json());

const storedData = JSON.parse(fs.readFileSync("./post.json", "utf-8"));

app.post("/add", (req, res) => {
  const comingData = req.body;
  storedData.push(comingData);
  const modifiedData = JSON.stringify(storedData);

  fs.writeFile("./post.json", modifiedData, "utf-8", (err) => {
    if (!err) {
      res.status(200).json({
        status: "success",
      });
    } else {
      res.status(400).json({
        status: "fail",
      });
    }
  });
});

app.get("/view", (req, res) => {
  const { id } = req.query;
  console.log(id);

  if (!id) {
    res.status(200).json(storedData);
  }

  if (id) {
    const idData = storedData.find((el) => el.id === id);

    res.status(200).json([idData]);
  }
});

app.patch("/edit/:id", (req, res) => {
  const id = req.params.id;
  const user = storedData.find((el) => el.id === id);

  const { name, age, email } = req.body;

  if (name) {
    user.name = name;
  }

  if (age) {
    user.age = age;
  }

  if (email) {
    user.email = email;
  }

  console.log(user);

  const editData = storedData.filter((el) => el.id !== id);
  editData.push(user);

  fs.writeFile("./post.json", JSON.stringify(editData), "utf-8", (err) => {
    if (!err) {
      res.status(200).json({
        status: "success",
        data: user,
      });
    } else {
      res.status(400).json({
        status: err,
        message: err.message,
      });
    }
  });
});

app.listen(8080, () => {
  console.log("server started");
});
